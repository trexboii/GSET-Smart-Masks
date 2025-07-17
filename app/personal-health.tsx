import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import globalStyles from "../styles/styles";
import { getLatestCo2 } from "./api/sendToServer";
export default function PersonalHealth() {
  const [latestCo2, setLatestCo2] = useState<number | null>(null);
  useEffect(() => {
    const fetchLatest = async () => {
      const latest = await getLatestCo2();
      setLatestCo2(latest);
    };
    const interval = setInterval(() => {
      fetchLatest();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={globalStyles.bigDataBox}>
          <Text style={globalStyles.label}>Breathing Rate (Current)</Text>
          <View style={globalStyles.row}>
            <Text style={globalStyles.info}>54</Text>
            <Text style={globalStyles.unit}>Breaths/Minute</Text>
          </View>
        </View>
        <View style={globalStyles.bigDataBox}>
          <Text style={globalStyles.label}>This Session</Text>
          <Image
            source={require("../assets/images/breathing-rate-filler.png")}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
          />
        </View>
        <View style={globalStyles.bigDataBox}>
          <Text style={globalStyles.label}>All Time</Text>
          <Image
            source={require("../assets/images/breathing-rate-filler.png")}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
          />
        </View>
        <View style={globalStyles.bigDataBox}>
          <View style={globalStyles.row}>
            <Text style={globalStyles.label}>CO2 Level</Text>
            <Text style={globalStyles.info}>{latestCo2 ?? "Loading..."}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
