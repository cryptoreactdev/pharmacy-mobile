// AgreeTerms.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AuthenticationBtn from "../components/AuthenticationBtn";

const AgreeTerms = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF9F7" }}>
      <View style={styles.container}>
        <View style={styles.upperView}>
          <Text style={styles.title}>
            Airbnb is a community where anyone can belong
          </Text>
          <Text style={styles.content}>
            To ensure this, we are asking you to commit to the following:
          </Text>
          <Text>Lorem ipsum</Text>
        </View>
        <View style={styles.lowerView}>
          <AuthenticationBtn
            btnstyle={{width:"100%"}}
            title={"Agree and continue"}
            textColor={{color:"#F7F1E7"}}
            onPress={() => navigation.navigate("newUserCharacteristics")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  upperView: {
    flex: 7,
  },
  lowerView: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    // textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AgreeTerms;
