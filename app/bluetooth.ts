// hooks/useSmartMaskBLE.ts
import { useEffect, useState } from 'react';
import { BleManager, Device } from 'react-native-ble-plx';
import { Platform, PermissionsAndroid, Alert } from 'react-native';

const bleManager = new BleManager();

export const useSmartMaskBLE = () => {
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
  const [co2Level, setCo2Level] = useState<string | null>(null);

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

        if (device?.name?.includes('SmartMask')) {
          console.log('Found device:', device.name);
          bleManager.stopDeviceScan();

          try {
            const connected = await device.connect();
            await connected.discoverAllServicesAndCharacteristics();
            setConnectedDevice(connected);

            // Replace with your actual service/characteristic UUIDs
            connected.monitorCharacteristicForService(
              '0000181a-0000-1000-8000-00805f9b34fb', // Environmental Sensing (standard UUID)
              '00002a6e-0000-1000-8000-00805f9b34fb', // CO2 level (mock UUID)
              (err, characteristic) => {
                if (err) {
                  console.log('Monitor error:', err);
                  return;
                }

                if (characteristic?.value) {
                  const decoded = atob(characteristic.value); // base64 decode
                  setCo2Level(decoded);
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
  }, []);

  return { connectedDevice, co2Level };
};
