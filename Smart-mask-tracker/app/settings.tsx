import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";

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

export default SmartMask;

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
