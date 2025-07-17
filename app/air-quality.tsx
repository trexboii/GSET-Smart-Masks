import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  Button,
} from "react-native";
import globalStyles from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Heatmap, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useState, useRef } from "react";
import * as Location from "expo-location";
import { ProviderContext } from "react-native-maps/lib/decorateMapComponent";
export default function AirQuality() {
  const BACKEND_URL = "https://smart-mask-production.up.railway.app";
  const [points, setPoints] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const mapRef = useRef<MapView>(null);

  const mockHeatData = [
    { latitude: 40.7128, longitude: -74.006, weight: 100 }, // NYC
    { latitude: 40.713, longitude: -74.0065, weight: 200 },
    { latitude: 40.7125, longitude: -74.005, weight: 150 },
    { latitude: 40.714, longitude: -74.007, weight: 550 },
  ];
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const fetchAndSchedule = async () => {
      try {
        // 👇 Fetch latest heatmap data
        const res = await fetch(`${BACKEND_URL}/api/datapoints`);
        const data = await res.json();
        const heatmapData = data.map((point: any) => ({
          latitude: point.latitude,
          longitude: point.longitude,
          weight: point.vocIndex + point.pm25,
        }));
        setPoints(heatmapData);
        console.log("Fetched points:", heatmapData);
      } catch (error) {
        console.error("Error fetching heatmap data:", error);
        setErrorMsg("Failed to fetch heatmap data");
      } finally {
        // 👇 Schedule the next run after this one finishes
        timeoutId = setTimeout(fetchAndSchedule, 30000); // 30s refresh
      }
    };

    const loadEverything = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      const geo = await Location.reverseGeocodeAsync(loc.coords);
      if (geo.length > 0) {
        setCity(geo[0].city || geo[0].region || geo[0].country || "Unknown");
      }

      await fetchAndSchedule(); // initial fetch + starts loop
    };

    loadEverything();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
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
    pmeLevels: number;
    timestamp: number;
  };

  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={[globalStyles.row]}>
          {" "}
          <View style={globalStyles.smallDataBox}>
            <Text style={globalStyles.label}>Temperature</Text>
            <Text style={globalStyles.info}>54</Text>
          </View>
          <View style={globalStyles.smallDataBox}>
            <Text style={globalStyles.label}>Humidity</Text>
            <Text style={globalStyles.info}>54</Text>
          </View>
        </View>
        <View style={globalStyles.bigDataBox}>
          <Text style={globalStyles.label}>Air Quality</Text>
          <Text style={globalStyles.info}>54</Text>
          <Text style={globalStyles.small}>Moderate</Text>
          {location && points.length > 0 ? (
            <MapView
              provider={PROVIDER_GOOGLE}
              style={globalStyles.map}
              ref={mapRef}
              initialRegion={{
                latitude:
                  points[0]?.latitude || location?.coords.latitude || 37.7749,
                longitude:
                  points[0]?.longitude ||
                  location?.coords.longitude ||
                  -122.4194,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Heatmap
                points={points}
                radius={50}
                opacity={0.7}
                gradient={{
                  colors: ["green", "yellow", "red"],
                  startPoints: [0.1, 0.5, 1],
                  colorMapSize: 256,
                }}
              />
              <Button
                title="Center on Me"
                onPress={() => {
                  if (location) {
                    mapRef.current?.animateToRegion(
                      {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                      },
                      1000
                    );
                  }
                }}
              />
            </MapView>
          ) : (
            <ActivityIndicator />
          )}
        </View>
        <View style={globalStyles.bigDataBox}>
          <Text style={globalStyles.label}>VOC Index</Text>
          <Text style={globalStyles.info}>144</Text>
        </View>
        <View style={globalStyles.row}>
          <View style={globalStyles.smallDataBox}>
            <Text style={globalStyles.label}>PM2.5 Levels</Text>
            <Text style={globalStyles.info}>😀</Text>
          </View>
          <View style={globalStyles.smallDataBox}>
            <Text style={globalStyles.label}>CO Levels</Text>
            <Text style={globalStyles.info}>😥</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
