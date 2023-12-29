import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export const globalStyles = StyleSheet.create({
  scroll: {
    width: responsiveWidth(90),
    alignSelf: "center",
    backgroundColor: "#FAF9F7",
    marginBottom: responsiveHeight(10),
  },
  cont: {
    alignItems: "center",
    backgroundColor: "#FAF9F7",
    flex: 1,
  },
  bigtext: {
    fontSize: responsiveFontSize(3.6),
    fontWeight: "bold",
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#41392F",
  },
  bigtext2: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#41392F",
  },
  text1: {
    fontSize: responsiveFontSize(2),
    //marginTop: responsiveHeight(1),
    // marginBottom: responsiveHeight(1),
    //fontFamily: "Inter",
    color: "#41392F",
  },
  text2: {
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#75695A",
    // fontWeight: "bold",
  },
  blackLargeText: {
    fontSize: 16,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#41392F",
    fontWeight: "bold",
  },
  greenLargeText: {
    fontSize: 16,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#00B505",
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 14,
    //marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#757575",
    fontWeight: '400',
  },
  text3: {
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#75695A",
    // fontWeight: "bold",
  },
  goldentext2: {
    fontSize: responsiveFontSize(2),
    color: "#75695A",
    fontWeight: "bold",
  },
  goldentext3: {
    fontSize: responsiveFontSize(2.5),
    color: "#75695A",
    fontWeight: "bold",
  },
  whitetext3: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#fff",
    fontWeight: "bold",
  },
  right: {
    height: responsiveHeight(4),
    width: responsiveWidth(8),
    resizeMode: "contain",
    // marginLeft: responsiveWidth(1),
  },
});
