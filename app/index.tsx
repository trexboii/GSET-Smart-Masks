import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import globalStyles from "@/styles/styles";
export default function Index() {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text style={[globalStyles.title, styles.title]}>Welcome</Text>
        <Image
          source={require("../assets/images/mask-ico.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={globalStyles.data_box}>
          <Text style={globalStyles.label}>LIVE DATA</Text>
          <Text style={globalStyles.home}>Air Quality Index : 123</Text>
          <Text style={globalStyles.home}>Breathing Rate: 20 BPM</Text>
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
