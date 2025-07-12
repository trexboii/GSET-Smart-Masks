import { Tabs } from "expo-router";
import {
  useFonts,
  KumbhSans_400Regular,
  KumbhSans_700Bold,
} from "@expo-google-fonts/kumbh-sans";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Index from ".";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    KumbhSans_400Regular,
    KumbhSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5ca6ffff",
        tabBarInactiveTintColor: "#b6d7ffff",
        tabBarStyle: { backgroundColor: "#F6FCFF" },
        headerShown: true,
        headerStyle: {
          backgroundColor: "#F6FCFF",
        },
        headerTitleStyle: {
          fontFamily: "KumbhSans_700Bold",
          fontSize: 20,
          color: "#000",
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <Ionicons
            name="checkmark-circle"
            size={24}
            color="green"
            style={{ marginLeft: 15 }}
          />
        ),
        headerRight: () => (
          <Ionicons
            name="battery-full"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen 
        name="personal-health"
        options={{
          title:"Health",
          tabBarIcon: ({ color,size }) => (
            <Ionicons name="heart-outline" color={color} size={size}/>
          ),
        }} />
      <Tabs.Screen 
        name="air-quality"
        options={{
          title: "Air",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />

        <Tabs.Screen
          name = "about"
          options = {{
            href:null,
          }}
        />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
