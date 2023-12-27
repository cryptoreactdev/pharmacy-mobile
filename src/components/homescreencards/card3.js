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

export default function Card3(product) {
  const imageArray = product?.product?.product_info?.product_image.split(",");
  const firstImage = imageArray?.length > 0 ? imageArray[0].trim() : "";

  return (
    <TouchableOpacity style={styles.cont} onPress={product?.onPress}>
      <View style={styles.cont2}>
        <Image source={{ uri: firstImage }} style={styles.img} />
        <View>
          <Text style={styles.text1}>{product?.product?.product_info.product_title}</Text>
          <Text style={styles.text2}>{product?.product?.product_info.volumn}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    resizeMode: "contain",
    marginRight: responsiveWidth(2),
  },
  cont: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: responsiveWidth(0.5),
    borderRadius: 10,
    marginBottom: responsiveHeight(1),
    backgroundColor: "#fff",
  },
  cont2: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    fontSize: responsiveFontSize(2.5),
    color: "black",
    fontWeight: "bold",
  },
  text2: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1.5),
    fontWeight: "bold",
    color: "#757575",
  },
});
