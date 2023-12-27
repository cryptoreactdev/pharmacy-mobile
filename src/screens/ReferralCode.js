import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AuthenticationBtn from "../components/AuthenticationBtn";

const ReferralCode = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    /*if (code.trim() === "") {
      setError("Error, no consultant with that code");
    } else {
      setError(""); // Reset the error message
      // Continue with your navigation logic or other actions
      navigation.navigate("registerPharmacyProduct");
    }*/
    setError("Error, no consultant with that code");
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Consultant</Text>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>
          Please enter your consultant code
        </Text>
        <TextInput
          style={styles.input}
          placeholder="6-digit code"
          value={code}
          onChangeText={(text) => {
            setCode(text);
            setError(""); // Clear the error message when input changes
          }}
        />
        {error !== "" && <Text style={styles.errorText}>{error}</Text>}
        <View style={styles.buttonContainer}>
          <AuthenticationBtn
            title={"Skip"}
            textColor={{ color: "#75695A" }}
            btnstyle={{ width: 150, height: 40, borderColor: "#75695A", backgroundColor: "white", borderWidth: 1 }}
            onPress={() => navigation.navigate("registerPharmacyProduct")}
          />
          <AuthenticationBtn
            title={"Continue"}
            textColor={{ color: "#F7F1E7" }}
            btnstyle={{ width: 150, height: 40 }}
            onPress={handleContinue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F7",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default ReferralCode;
