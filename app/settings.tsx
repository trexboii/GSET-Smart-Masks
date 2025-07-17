import { Link } from "expo-router";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import globalStyles from "../styles/styles";
export default function Settings() {
  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <View style={[globalStyles.bigDataBox, { height: 85 }]}>
        <View style={globalStyles.row}>
          <Text style={globalStyles.label}>Notifications</Text>
          <Text style={globalStyles.infoAlignedRight}>On/Off</Text>
        </View>
      </View>
      <View style={[globalStyles.bigDataBox, { height: 85 }]}>
        <View style={globalStyles.row}>
          <Text style={globalStyles.label}>Preferred Units</Text>
          <Text style={globalStyles.infoAlignedRight}>On/Off</Text>
        </View>
      </View>
      <View style={[globalStyles.bigDataBox, { height: 85 }]}>
        <View style={globalStyles.row}>
          <Text style={globalStyles.label}>Data Sharing</Text>
          <Text style={globalStyles.infoAlignedRight}>On/Off</Text>
        </View>
      </View>
      <View style={[globalStyles.bigDataBox, { height: 85 }]}>
        <View style={globalStyles.row}>
          <Text style={globalStyles.label}>Location Services</Text>
          <Text style={globalStyles.infoAlignedRight}>On/Off</Text>
        </View>
      </View>
      <View style={[globalStyles.bigDataBox, { height: 85 }]}>
        <View style={globalStyles.row}>
          <Link href="/about" style={globalStyles.label}>
            About This App
          </Link>
        </View>
      </View>
      <View style={[globalStyles.bigDataBox, { height: 85 }]}>
        <Text style={globalStyles.label}>RESET</Text>
      </View>
    </ScrollView>
  );
}

const SmartMask = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={[styles.bar, { paddingTop: 50 }]}>
        <Text style={styles.barText}>Home</Text>
      </View>

      {/* Spacer: main content */}
      <View style={{ flex: 1 }} />

      {/* Bottom Bar */}
      <View style={[styles.bar, { paddingBottom: 50 }]}>
        <Text style={styles.barText}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bar: {
    backgroundColor: "#F2FAFF",
    width: Dimensions.get("window").width,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  barText: {
    color: "black",
    fontSize: 40,
    fontFamily: "Manrope_400Regular",
  },
});
