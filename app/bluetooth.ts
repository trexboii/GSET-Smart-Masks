
import { Buffer } from 'buffer';
import { LocationObject } from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';

const bleManager = new BleManager();

const SERVICE_UUID = '6adf0001-29b1-11ee-be56-0242ac120002';
const CHAR_CO2_UUID = '6adf0002-29b1-11ee-be56-0242ac120002';
const CHAR_ENV_UUID = '6adf0003-29b1-11ee-be56-0242ac120002';

const BACKEND_URL = 'https://smart-mask-production.up.railway.app';

export const useSmartMaskBLE = (location: LocationObject | null) => {
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
  const [co2Level, setCo2Level] = useState<number | null>(null);

  useEffect(() => {
    const requestPermissions = async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);
      }
    };

    const startScan = async () => {
      bleManager.startDeviceScan(null, null, async (error, device) => {
        if (error) {
          console.log('Scan error:', error);
          return;
        }

        if (device?.name?.includes('MagnaClip Smart Mask')) {
          console.log('Found device:', device.name);
          bleManager.stopDeviceScan();

          try {
            const connected = await device.connect();
            await connected.discoverAllServicesAndCharacteristics();
            setConnectedDevice(connected);

            // ─── CO₂ Data (uint16) ───────────────────────────────
            connected.monitorCharacteristicForService(
              SERVICE_UUID,
              CHAR_CO2_UUID,
              async (err, characteristic) => {
                if (err) {
                  console.log('CO2 monitor error:', err);
                  return;
                }

                if (characteristic?.value) {
                  const buffer = Buffer.from(characteristic.value, 'base64');
                  const co2 = buffer.readUInt16LE(0);
                  setCo2Level(co2);

                  try {
                    await fetch(`${BACKEND_URL}/api/co2`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ co2 }),
                    });
                    console.log('CO2 sent:', co2);
                  } catch (err) {
                    console.error('Error sending CO2:', err);
                  }
                }
              }
            );

            // ─── Environmental Data (CSV: vocIndex,pm25,temp,humidity) ───
            connected.monitorCharacteristicForService(
              SERVICE_UUID,
              CHAR_ENV_UUID,
              async (err, characteristic) => {
                if (err) {
                  console.log('Env monitor error:', err);
                  return;
                }

                if (characteristic?.value) {
                  const buffer = Buffer.from(characteristic.value, 'base64');
                  const pm25 = buffer.readFloatLE(0);
                  const vocIndex = buffer.readFloatLE(4);
                  const temperature = buffer.readFloatLE(8);
                  const humidity = buffer.readFloatLE(12);


                  try {
                    await fetch(`${BACKEND_URL}/api/datapoints`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        vocIndex,
                        pm25,
                        temperature,
                        humidity,
                        latitude: location?.coords.latitude ?? null,
                        longitude: location?.coords.longitude ?? null,
                      }),
                    });
                    console.log('Env data sent:', { vocIndex, pm25, temperature, humidity });
                  } catch (err) {
                    console.error('Error sending Env data:', err);
                  }
                }
              }
            );
          } catch (err) {
            Alert.alert('Connection error', String(err));
          }
        }
      });
    };

    requestPermissions().then(startScan);

    return () => {
      bleManager.destroy();
    };
  }, [location]);

  return { connectedDevice, co2Level };
};
