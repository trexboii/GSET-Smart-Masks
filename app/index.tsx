import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import globalStyles from "@/styles/styles";

export default function Index() {
  const [connected, setConnected] = useState(false); // start as disconnected

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <View style={globalStyles.container}>
        <Text style={[styles.title, { color: connected ? "green" : "red" }]}>
          {connected ? "Connected" : "Disconnected"}
        </Text>

        <Pressable onPress={() => setConnected(!connected)}>
          <Image
            source={require("../assets/images/mask-ico.png")}
            style={{ width: 400, height: 400 }}
            resizeMode="contain"
          />
        </Pressable>

        <View style={globalStyles.bigDataBox}>
          <Text style={styles.label}>LIVE DATA</Text>
          <Text style={styles.text}>Air Quality Index: 123</Text>
          <Text style={styles.text}>Breathing Rate: 20 BPM</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
