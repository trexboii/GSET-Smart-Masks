import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import globalStyles from "@/styles/styles";
export default function Index() {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={globalStyles.data_box}>
          <View style={globalStyles.row}>
            <Text style={globalStyles.notifis}>Personal Health</Text>
            <View style={globalStyles.rowLabel}>
              <Text style={globalStyles.time}>07/09, 12:49 PM</Text>
              <Ionicons name="close" size={28} color="red" />
            </View>
          </View>
          <Text style={globalStyles.home}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
      <View style={globalStyles.container}>
        <View style={globalStyles.data_box}>
          <View style={globalStyles.row}>
            <Text style={globalStyles.notifis}>Personal Health</Text>
            <View style={globalStyles.rowLabel}>
              <Text style={globalStyles.time}>07/09, 12:49 PM</Text>
              <Ionicons name="close" size={28} color="red" />
            </View>
          </View>
          <Text style={globalStyles.home}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
      <View style={globalStyles.container}>
        <View style={globalStyles.data_box}>
          <View style={globalStyles.row}>
            <Text style={globalStyles.notifis}>Personal Health</Text>
            <View style={globalStyles.rowLabel}>
              <Text style={globalStyles.time}>07/09, 12:49 PM</Text>
              <Ionicons name="close" size={28} color="red" />
            </View>
          </View>
          <Text style={globalStyles.home}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
      <View style={globalStyles.container}>
        <View style={globalStyles.data_box}>
          <View style={globalStyles.row}>
            <Text style={globalStyles.notifis}>Personal Health</Text>
            <View style={globalStyles.rowLabel}>
              <Text style={globalStyles.time}>07/09, 12:49 PM</Text>
              <Ionicons name="close" size={28} color="red" />
            </View>
          </View>
          <Text style={globalStyles.home}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
      <View style={globalStyles.container}>
        <View style={globalStyles.data_box}>
          <View style={globalStyles.row}>
            <Text style={globalStyles.notifis}>Personal Health</Text>
            <View style={globalStyles.rowLabel}>
              <Text style={globalStyles.time}>07/09, 12:49 PM</Text>
              <Ionicons name="close" size={28} color="red" />
            </View>
          </View>
          <Text style={globalStyles.home}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
      <View style={globalStyles.container}>
        <View style={globalStyles.data_box}>
          <View style={globalStyles.row}>
            <Text style={globalStyles.notifis}>Personal Health</Text>
            <View style={globalStyles.rowLabel}>
              <Text style={globalStyles.time}>07/09, 12:49 PM</Text>
              <Ionicons name="close" size={28} color="red" />
            </View>
          </View>
          <Text style={globalStyles.home}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 80,
  },
  image: {
    width: 400,
    height: 400,
    overflow: "hidden",
    alignSelf: "center",
  },
});
