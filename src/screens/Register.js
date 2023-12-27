import React, { useState } from "react";
import { SafeAreaView, View, Alert, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { Text, TextInput, IconButton } from "react-native-paper";
import Styles from "../config/Styles";
import Languages from "../languages";
import LanguageContext from "../languages/LanguageContext";
import ColorsApp from "../config/ColorsApp";
import usePreferences from "../hooks/usePreferences";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import AuthenticationBtn from "../components/AuthenticationBtn";

const auth = getAuth();

const Register = ({ navigation }) => {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const { theme } = usePreferences();

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [atLeastOneNumber, setAtLeastOneNumber] = useState(false);
  const [atLeastOneSymbol, setAtLeastOneSymbol] = useState(false);
  const [noSpaces, setNoSpaces] = useState(false);
  const [eightCharacters, setEightCharacters] = useState(false);

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

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

  const register = async () => {
    setLoading(true);
    const fullPhoneNumber = phoneNumber;
    const userData = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: fullPhoneNumber,
      email: email,
      password: password,
    };
    // TODO Remove AsyncStorage and use redux for state management
    AsyncStorage.setItem('userData', JSON.stringify(userData));
    navigation.navigate("phoneVerify");

  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#FAF9F7" }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={[Styles.AuthPage]}>
          <View style={[Styles.AuthContent]}>
            <View style={{ marginTop: 50 }}>
              <TextInput
                placeholder="First name"
                onChangeText={(text) => setFirstName(text)}
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                style={[Styles.AuthInput, { height: 55 }]}
              />
              <TextInput
                placeholder="Last name"
                onChangeText={(text) => setLastName(text)}
                mode="flat"
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                style={[Styles.AuthInput, { height: 55 }]}
              />
              <TextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text.trim())}
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                autoCapitalize="none"
                style={[Styles.AuthInput, { height: 55 }]}
              />
              <TextInput
                placeholder="Phone number"
                onChangeText={(text) => setPhoneNumber(text)}
                mode="flat"
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                keyboardType="phone-pad"
                style={[Styles.AuthInput, { height: 55 }]}
              />
              <TextInput
                placeholder="Password"
                onChangeText={handlePasswordValidation}
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                secureTextEntry={true}
                style={[Styles.AuthInput, { height: 55 }]}
              />
              {password ? (
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
                      Password Strength:{" "}
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
              ) : (
                ""
              )}
            </View>
            <View style={{ marginBottom: -40, marginTop: password ? 10 : 50 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginTop: 100,
                }}
              >
                <Text>
                  By Selecting Agree and continue, I agree to Dynamic Layers
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onChangeScreen("terms")}
                >
                  <Text
                    style={{
                      color: "#AE9E8A",
                      fontWeight: "800",
                      textDecorationLine: "underline",
                    }}
                  >
                    Terms Of service
                  </Text>
                </TouchableOpacity>
                <Text>, </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onChangeScreen("terms")}
                >
                  <Text
                    style={{
                      color: "#AE9E8A",
                      fontWeight: "800",
                      textDecorationLine: "underline",
                    }}
                  >
                    Payments Terms of Service
                  </Text>
                </TouchableOpacity>
                <Text> and </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onChangeScreen("terms")}
                >
                  <Text
                    style={{
                      color: "#AE9E8A",
                      fontWeight: "800",
                      textDecorationLine: "underline",
                    }}
                  >
                    Notification policy
                  </Text>
                </TouchableOpacity>
                <Text> and acknowledge the </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onChangeScreen("terms")}
                >
                  <Text
                    style={{
                      color: "#AE9E8A",
                      fontWeight: "800",
                      textDecorationLine: "underline",
                    }}
                  >
                    Privacy policy
                  </Text>
                </TouchableOpacity>
              </View>
              <AuthenticationBtn
                textColor={{
                  color: `${
                    email && password && firstName && lastName && phoneNumber
                      ? "#F7F1E7"
                      : "#757575"
                  }`,
                }}
                btnstyle={{
                  backgroundColor: `${
                    email && password && firstName && lastName && phoneNumber
                      ? "#41392F"
                      : "#e2e2e2"
                  }`,
                  width: "100%",
                  height: 60,
                }}
                onPress={() => register()}
                title={"Agree and continue"}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
