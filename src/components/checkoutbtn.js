import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Checkoutbtn({ lg, title, onPress }) {
  return (
    <TouchableOpacity style={lg ? styles.btn1 : styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
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
  btn1: {
    backgroundColor: "#41392F",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
