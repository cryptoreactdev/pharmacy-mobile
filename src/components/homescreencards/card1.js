import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { globalStyles } from "../../stylesheet";

export default function card1({ key, text1, text2, imageSrc }) {
  return (
    <TouchableOpacity style={styles.cont}>
      <View style={styles.cont2}>
        <Image
          source={{ uri: imageSrc }}
          style={styles.img}
        />
        <View>
          <Text style={styles.text1}>{text1}</Text>
          <Text style={styles.text2}>{text2}</Text>
        </View>
      </View>
      <Image
        source={require("../../../assets/right.png")}
        style={globalStyles.right}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    height: responsiveHeight(8),
    width: responsiveWidth(15),
    resizeMode: "contain",
    marginRight: responsiveWidth(2),
  },
  cont: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: responsiveWidth(0.5),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    marginBottom: responsiveHeight(1),
    backgroundColor: "#fff",
  },
  cont2: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    fontSize: responsiveFontSize(2.2),

    color: "black",
    fontWeight: "bold",
  },
  text2: {
    fontSize: responsiveFontSize(2),
    color: "#757575",
  },
});
