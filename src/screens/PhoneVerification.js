import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AuthenticationBtn from "../components/AuthenticationBtn";

const PhoneVerification = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(59);

  const onChangeScreen = (screen) => {
    navigation.navigate(screen);
  };

  const handleResend = () => {
    console.log("handle resend operation here");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => Math.max(0, prevTime - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const countdownStyle = {
    fontSize: 14,
    color: timeRemaining <= 5 ? "red" : "#9E9E9E",
    marginVertical: 5,
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#FAF9F7" }}
    >
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Text style={styles.title}>Phone Verification</Text>
          <Text style={{ color: "#545454" }}>
            Please enter your verification code
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="6-digit code"
            value={code}
            onChangeText={setCode}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Enter the email address you used to register with Dynamic Layers.
            You will receive an email to define a new password.
          </Text>
        </View>
        <View style={styles.resendContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#75695A" }}>Didn't receive code?</Text>
            <TouchableOpacity style={{}} onPress={handleResend}>
              <Text style={styles.resendText}>Resend</Text>
            </TouchableOpacity>
          </View>
          <Text style={countdownStyle}>
            Time remaining: 00:{timeRemaining < 10 ? `0${timeRemaining}` : timeRemaining}
          </Text>
        </View>
        <View>
          <AuthenticationBtn
            title={"Verify"}
            btnstyle={{
              width: "100%",
              height: 60,
              backgroundColor: `${code ? "#41392F" : "#E2E2E2"}`,
            }}
            textColor={{ color: `${code ? "#F7F1E7" : "#757575"}` }}
            onPress={() => onChangeScreen("agreeTerms")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F7",
    paddingHorizontal: 20,
  },
  headContainer: {
    marginVertical: 15,
  },
  inputContainer: {
    paddingTop: 20,
  },
  text: {
    color: "#757575",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderRadius: 10,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  resendText: {
    color: "red",
    textDecorationLine: "underline",
    fontWeight: "800",
    marginRight: 20,
    letterSpacing: 0.5,
  },
  resendContainer: {
    width: "100%",
    marginTop: 20,
    marginHorizontal: 5,
  },
});

export default PhoneVerification;
