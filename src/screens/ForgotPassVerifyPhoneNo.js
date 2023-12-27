import React, { useState } from "react";
import { SafeAreaView, View, Alert, StyleSheet } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";
import Styles from "../config/Styles";
import Languages from "../languages";
import LanguageContext from "../languages/LanguageContext";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import usePreferences from "../hooks/usePreferences";
import AuthenticationBtn from "../components/AuthenticationBtn";

const auth = getAuth();

const ForgotPassVerifyPhoneNo = (props) => {
  const [code, setCode] = useState("");

  const verifyCode = async () => {
    if(code.length==6){
      props.navigation.navigate("resetpassword");
    }else{
      Alert.alert("Enter valid 6 digit code")
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
            <Text style={styles.title}>Phone Verification</Text>
            <Text style={{ fontSize: 16, marginTop:10, color:"#545454" }}>Please enter your verification code</Text>
          </View>

          <TextInput
            placeholder="6-digit code"
            onChangeText={(text) => setCode(text)}
            mode="flat"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
            autoCapitalize="none"
            style={[Styles.AuthInput, {height:55, marginBottom:2}]}
          />

          <AuthenticationBtn
            title={"Verify"}
            textColor={ {color:`${code?"#F7F1E7":"#757575"}`}}
            btnstyle={{ width: "100%", height:60, backgroundColor:`${code?"#41392F":"#E2E2E2"}` }}
            onPress={() => verifyCode()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
  });
  

export default ForgotPassVerifyPhoneNo