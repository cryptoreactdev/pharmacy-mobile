import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Checkoutbtn from "./checkoutbtn";

export default function Popupview() {
  return (
    <View style={styles.cont}>
      <Text>Popupview</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#EAEAEA",
    width: responsiveWidth(100),
    height: responsiveHeight(50),

    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
