import React, { useState } from "react";
import { SafeAreaView, View, Alert, StyleSheet } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";
import Styles from "../config/Styles";
import Languages from "../languages";
import LanguageContext from "../languages/LanguageContext";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import usePreferences from "../hooks/usePreferences";
import AuthenticationBtn from "../components/AuthenticationBtn";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const auth = getAuth();

const ResetPass = (props) => {
  const [password, setPassword] = useState("");

  const [atLeastOneNumber, setAtLeastOneNumber] = useState(false);
  const [atLeastOneSymbol, setAtLeastOneSymbol] = useState(false);
  const [noSpaces, setNoSpaces] = useState(false);
  const [eightCharacters, setEightCharacters] = useState(false);

  const handlePasswordValidation = (text) => {
    setPassword(text.trim());

    const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const numberRegex = /[0-9]/;
    const noSpaceRegex = /^\S+$/;

    setNoSpaces(noSpaceRegex.test(text));
    setAtLeastOneNumber(numberRegex.test(text));
    setAtLeastOneSymbol(symbolRegex.test(text));
    setEightCharacters(text.length > 8);
  };

  const resetPassword = async () => {
    if (eightCharacters && noSpaces && (atLeastOneNumber || atLeastOneSymbol)) {
      props.navigation.navigate("login");
    }else{
        Alert.alert("Invalid Password!")
    }
    // setLoading(true);

    // if (email) {
    //   sendPasswordResetEmail(auth, email)
    //     .then(() => {
    //       setLoading(false);
    //       Alert.alert("Alert", Strings.ST38);
    //       props.navigation.navigate("login");
    //     })
    //     .catch((e) => {
    //       if (e.code == "auth/user-not-found") {
    //         setLoading(false);
    //         Alert.alert(Strings.ST37);
    //       } else {
    //         setLoading(false);
    //         Alert.alert(Strings.ST104);
    //       }
    //     });
    // } else {
    //   setLoading(false);
    //   Alert.alert(Strings.ST33);
    // }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF9F7" }}>
      <View style={Styles.AuthPage}>
        <View style={Styles.AuthContent}>
          <View
            style={{
              marginVertical: 40,
            }}
          >
            <Text style={styles.title}>Set a new password</Text>
            <Text style={{ fontSize: 16, marginTop: 10, color: "#545454" }}>
              Make sure it follows the rule
            </Text>
          </View>

          <TextInput
            placeholder="6-digit code"
            onChangeText={handlePasswordValidation}
            mode="flat"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
            autoCapitalize="none"
            style={[Styles.AuthInput, { height: 55, marginBottom: 2 }]}
          />

          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="information"
                size={25}
                color={`${
                  eightCharacters &&
                  noSpaces &&
                  (atLeastOneNumber || atLeastOneSymbol)
                    ? "green"
                    : "red"
                }`}
              />
              <Text>
                Password Strength:
                {`${
                  eightCharacters &&
                  noSpaces &&
                  (atLeastOneNumber || atLeastOneSymbol)
                    ? "Strong"
                    : "Week"
                }`}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name={`${eightCharacters ? "check" : "window-close"}`}
                size={25}
                color={"black"}
              />
              <Text>Must be at least 8 characters</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name={`${
                  atLeastOneNumber || atLeastOneSymbol
                    ? "check"
                    : "window-close"
                }`}
                size={25}
                color={"black"}
              />
              <Text>Must have at least one symbol or number</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name={`${noSpaces ? "check" : "window-close"}`}
                size={25}
                color={"black"}
              />
              <Text>Cannot contain spaces</Text>
            </View>
          </View>

          <AuthenticationBtn
            title={"Reset Password"}
            textColor={{ color: `${password ? "#F7F1E7" : "#757575"}` }}
            btnstyle={{
              width: "100%",
              height: 60,
              backgroundColor: `${password ? "#41392F" : "#E2E2E2"}`,
            }}
            onPress={() => resetPassword()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ResetPass;
