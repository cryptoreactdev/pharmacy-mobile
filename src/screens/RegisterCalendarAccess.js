import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthenticationBtn from "../components/AuthenticationBtn";

const RegisterCalendarAccess = ({ navigation }) => {
  const [notificationGranted, setNotificationGranted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleNotificationPermission = () => {
    setNotificationGranted(true);
    navigation.navigate("bottom");
  };

  const handleSkip = () => {
    // Your function logic here
    console.log("Skip button was clicked.");
    setLoading(false);
    navigation.navigate("bottom");
    // You can perform additional actions here
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", flex: 4, justifyContent: "center" }}>
        <MaterialCommunityIcons name="calendar" size={100} color="black" />
        <Text style={styles.title}>Turn on calendar?</Text>
        <Text style={styles.description}>
          Allow you follow your daily care routine directly in your calendar.
        </Text>
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <AuthenticationBtn
          title={"Yes, notify me"}
          btnstyle={{
            height: 50,
            width: "100%",
          }}
          onPress={handleNotificationPermission}
        />
        <AuthenticationBtn
          title={"Skip for now"}
          textColor={{ color: "#41392F" }}
          btnstyle={{
            width: "100%",
            backgroundColor: "white",
            borderWidth: 1,
            height: 50,
          }}
          onPress={handleSkip}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F7",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  notifyButton: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  skipButton: {
    fontSize: 16,
    color: "black",
    marginTop: 20,
  },
});

export default RegisterCalendarAccess;
