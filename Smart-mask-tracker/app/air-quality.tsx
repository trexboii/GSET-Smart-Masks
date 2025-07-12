import { ScrollView, Text, View } from "react-native";
import globalStyles from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {useEffect, useState} from 'react';
import * as Location from 'expo-location'
export default function AirQuality() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null);
    
    useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      let geo = await Location.reverseGeocodeAsync(loc.coords);
      if (geo.length > 0) {
        setCity(geo[0].city || geo[0].region || geo[0].country || "Unknown")
      }
        console.log("Reverse geocode result:", geo[0]);
    })();
  }, []);
  let loc_text = 'Waiting...';
  if (errorMsg) {
    loc_text = errorMsg;
  } else if (location) {
    loc_text = `Latitude: ${location.coords.latitude}\nLongitude: ${location.coords.longitude} \n ${city}`;
  }

  return (
    <SafeAreaView style = {{flex:1}}>
    <ScrollView
        contentContainerStyle={globalStyles.container}
      >
        <View style={globalStyles.container}>
          <View style={globalStyles.header}>
            <Text style={globalStyles.title}>Air Quality</Text>
          </View>
          <View style={globalStyles.row}>
            <View style={globalStyles.data_box}>
              <Text style={globalStyles.label}>Temperature</Text>
              <Text style={globalStyles.info}>54</Text>
              <Text style={globalStyles.info}>{loc_text}</Text>
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
    </SafeAreaView>
  );
}
