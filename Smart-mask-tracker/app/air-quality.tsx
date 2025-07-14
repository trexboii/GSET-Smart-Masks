import { ScrollView, Text, View } from "react-native";
import globalStyles from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Heatmap, PROVIDER_GOOGLE } from 'react-native-maps';
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { ProviderContext } from "react-native-maps/lib/decorateMapComponent";
export default function AirQuality() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const mockHeatData = [
  { latitude: 40.7128, longitude: -74.0060, weight: 100 }, // NYC
  { latitude: 40.7130, longitude: -74.0065, weight: 200 },
  { latitude: 40.7125, longitude: -74.0050, weight: 150 },
  { latitude: 40.7140, longitude: -74.0070, weight: 550 },
];
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      let geo = await Location.reverseGeocodeAsync(loc.coords);
      if (geo.length > 0) {
        setCity(geo[0].city || geo[0].region || geo[0].country || "Unknown");
      }
    })();
  }, []);
  let loc_text = "Waiting...";
  if (errorMsg) {
    loc_text = errorMsg;
  } else if (location) {
    loc_text = `Latitude: ${location.coords.latitude}\nLongitude: ${location.coords.longitude} \n ${city}`;
  }
  type DataPoint = {
  latitude: number;
  longitude: number;
  vocIndex: number; 
  pmeLevels:number;
  timestamp: number;
  };

  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  return (
    <ScrollView
        contentContainerStyle={globalStyles.container}
      >
        <View style={globalStyles.container}>
          <View style={globalStyles.row}>
            <View style={globalStyles.data_box}>
              <Text style={globalStyles.label}>Temperature</Text>
              <Text style={globalStyles.info}>54</Text>
            </View>
            <View style={globalStyles.data_box}>
              <Text style={globalStyles.label}>Humidity</Text>
              <Text style={globalStyles.info}>54</Text>
            </View>
          </View>
          <View style={globalStyles.fullBox}>
            <Text style={globalStyles.label}>Air Quality</Text>
            <Text style={globalStyles.info}>54</Text>
            <Text style={globalStyles.small}>Moderate</Text>
            <MapView
              provider = {PROVIDER_GOOGLE} 
              style = {globalStyles.map}
              initialRegion={{
                latitude: mockHeatData[0].latitude|| 37.7749,
                longitude: mockHeatData[0].longitude || -127.4192,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Heatmap
                points={mockHeatData}
                radius={50}
                opacity={0.7}
                gradient={{
                  colors: ['green', 'yellow', 'red'],
                  startPoints: [0.1, 0.5, 1],
                  colorMapSize: 256,
                }}
              />
            </MapView>
          </View>
          <View style={globalStyles.fullBox}>
            <Text style={globalStyles.label}>VOC Index</Text>
            <Text style={globalStyles.info}>144</Text>
          </View>
          <View style={globalStyles.row}>
            <View style={globalStyles.data_box}>
              <Text style={globalStyles.label}>PM2.5 Levels</Text>
              <Text style={globalStyles.info}>😀</Text>
            </View>
            <View style={globalStyles.data_box}>
              <Text style={globalStyles.label}>CO Levels</Text>
              <Text style={globalStyles.info}>😥</Text>
            </View>
          </View>
        </View>
      </ScrollView>
  );
}
