import React, { useState } from "react";
import { SafeAreaView, View, Alert } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";
import Styles from "../config/Styles";
import Languages from "../languages";
import LanguageContext from "../languages/LanguageContext";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import usePreferences from "../hooks/usePreferences";
import AuthenticationBtn from "../components/AuthenticationBtn";

const auth = getAuth();

export default function ForgotPass(props) {
  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const { theme, toggleTheme } = usePreferences();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

  const restPass = async () => {
    setLoading(true);

    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setLoading(false);
          Alert.alert("Alert", Strings.ST38);
          props.navigation.navigate("login");
        })
        .catch((e) => {
          if (e.code == "auth/user-not-found") {
            setLoading(false);
            Alert.alert(Strings.ST37);
          } else {
            setLoading(false);
            Alert.alert(Strings.ST104);
          }
        });
    } else {
      setLoading(false);
      Alert.alert(Strings.ST33);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={Styles.AuthPage}>
        <View style={Styles.AuthContent}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <IconButton icon="account-lock-outline" size={80} />
            <Text
              style={{ alignSelf: "center", fontSize: 16, textAlign: "center" }}
            >
              {Strings.ST139}
            </Text>
          </View>

          <TextInput
            label={Strings.ST19}
            onChangeText={(text) => setEmail(text)}
            mode="flat"
            underlineStyle="transparent"
            underlineColor="transparent"
            underlineColorAndroid={"transparent"}
            autoCapitalize="none"
            style={Styles.AuthInput}
          />

          <AuthenticationBtn title={"Send"} btnstyle={{width:"100%"}} onPress={()=> restPass()} />
        </View>
      </View>
    </SafeAreaView>
  );
}
