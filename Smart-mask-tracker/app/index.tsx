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
    marginTop: 100,
    marginBottom: 50,
  },
  image: {
    width: "50%",
    alignSelf: "center",
    margin: 10,
  },
});
