import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles } from "../../stylesheet";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function Card4(props) {
  const { item } = props;

  return (
    <View style={styles.cont}>
      <Image source={{ uri: item.image }} style={styles.img} />
      <View style={styles.textcont}>
        <Text style={globalStyles.text3}>{item.title}</Text>
        <Text style={globalStyles.text1}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: responsiveHeight(20),
    width: responsiveWidth(34),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    resizeMode: "contain",
  },
  cont: {
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    padding: responsiveWidth(2),
    marginHorizontal: responsiveWidth(2),
  },
  textcont: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: responsiveWidth(34),
  },
});
