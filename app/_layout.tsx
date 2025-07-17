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
        tabBarStyle: {
          backgroundColor: "#F6FCFF",
          height: 100,
          paddingTop: 10,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          paddingTop: 4,
        },
        tabBarLabelPosition: "below-icon",
        headerShown: true,
        headerStyle: {
          backgroundColor: "#F6FCFF",
          height: 125,
        },
        headerTitleStyle: {
          fontFamily: "KumbhSans_700Bold",
          fontSize: 28,
          color: "#000",
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 125,
              marginLeft: 30,
            }}
          >
            <Ionicons name="checkmark-circle" size={28} color="green" />
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 125,
              marginRight: 30,
            }}
          >
            <Ionicons name="battery-full" size={28} color="black" />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="home-outline" color={color} size={28} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="air-quality"
        options={{
          title: "Air Quality",
          tabBarIcon: ({ color }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="cloud-outline" color={color} size={28} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="personal-health"
        options={{
          title: "Personal Health",
          tabBarIcon: ({ color }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="person-outline" color={color} size={28} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="notifications-outline" color={color} size={28} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="settings-outline" color={color} size={28} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="simulate"
        options={{
          title: "Simulate",
          tabBarIcon: ({ color }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Ionicons name="settings-outline" color={color} size={28} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          href: null,
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
