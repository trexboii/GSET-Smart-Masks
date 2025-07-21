import { useFont } from "@shopify/react-native-skia";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  CartesianChart,
  Line,
} from 'victory-native';
import globalStyles from "../styles/styles";
import { getLatestCo2 } from "./api/sendToServer";

export default function PersonalHealth() {
  const [latestCo2, setLatestCo2] = useState<number | null>(null);
  const [co2Data, setCo2Data] = useState<{ x: number; y: number }[]>([]);
  const kumbhFont = useFont(require("../assets/fonts/KumbhSans.ttf"), 12);

  useEffect(() => {
    const fetchCO2History = async () => {
      try {
        const res = await fetch("https://smart-mask-production.up.railway.app/api/co2");
        const json = await res.json();

        const formatted = json.map((entry: any) => ({
          x: new Date(entry.timestamp).getTime(),
          y: entry.co2,
        }));

        setCo2Data(formatted);

        if (formatted.length > 0) {
          setLatestCo2(formatted[formatted.length - 1].y);
        }
      } catch (err) {
        console.error("Failed to fetch CO₂ history:", err);
      }
    };

    const fetchLatest = async () => {
      try {
        const latest = await getLatestCo2();
        if (latest !== null && typeof latest === "number") {
          setLatestCo2(latest);
          setCo2Data(prev => [
            ...prev.slice(-100),
            { x: new Date().getTime(), y: latest },
          ]);
        }
      } catch (err) {
        console.error("Failed to fetch latest CO₂:", err);
      }
    };

    fetchCO2History();
    const interval = setInterval(fetchLatest, 1000);
    return () => clearInterval(interval);
  }, []);

  // Compute filtered data for 1 day and 1 week
  const co2DataDay = useMemo(() => {
    const now = new Date().getTime();
    const oneDayMs = 24 * 60 * 60 * 1000;
    return co2Data.filter(point => now - point.x <= oneDayMs);
  }, [co2Data]);

  const co2DataWeek = useMemo(() => {
    const now = new Date().getTime();
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    return co2Data.filter(point => now - point.x <= oneWeekMs);
  }, [co2Data]);

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
          <Text style={globalStyles.label}>CO₂ - Last 24 Hours</Text>
          <CartesianChart
            data={co2DataDay}
            xKey="x"
            yKeys={['y']}
            axisOptions={{font:kumbhFont}}
          >
            {({ points }) => (
              <Line points={points.y} color="blue" strokeWidth={3} />
            )}
          </CartesianChart>
        </View>

        <View style={globalStyles.bigDataBox}>
          <Text style={globalStyles.label}>CO₂ - Last 7 Days</Text>
          <CartesianChart<{ x: number; y: number }, 'x', 'y'>
            data={co2DataWeek}
            xKey="x"
            yKeys={['y']}
            axisOptions={{font:kumbhFont}}
          >
            {({ points }) => (
              <Line points={points.y} color="green" strokeWidth={3} />
            )}
          </CartesianChart>
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
