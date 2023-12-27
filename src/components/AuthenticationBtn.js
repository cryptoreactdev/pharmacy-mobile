import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function AuthenticationBtn({ title, onPress, btnstyle, textColor }) {
  return (
    <TouchableOpacity style={[styles.btn, btnstyle]} onPress={onPress}>
      <Text style={[styles.text, textColor]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#41392F",
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
