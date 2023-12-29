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
        <Text numberOfLines={2} style={styles.text3}>{item.title}</Text>
        <Text style={styles.text1}>${item.price === "" && item.price !== null ? 0 : item.price}</Text>
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
    backgroundColor: "#ffffff"

  },
  cont: {
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    padding: responsiveWidth(2),
    // marginHorizontal: responsiveWidth(0.6),
  },
  textcont: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: responsiveWidth(34),
  },
  text3: {
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#75695A",
    height: responsiveHeight(4),
    fontWeight: '500',
    textAlign: 'center'
    // fontWeight: "bold",
  },
  text1: {
    fontSize: responsiveFontSize(2),
    //marginTop: responsiveHeight(1),
    // marginBottom: responsiveHeight(1),
    //fontFamily: "Inter",
    color: "#41392F",
    textAlign: 'center',
    fontWeight: '700'
  },
});
