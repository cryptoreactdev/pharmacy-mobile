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

export default function Card2({ device, onPress }) {
  return (
    <TouchableOpacity
      style={styles.cont}
      onPress={() => onPress(device, "device")}
    >
      <View style={styles.cont2}>
        <Image
          source={{ uri: device?.product_info?.product_image }}
          style={styles.img}
        />
        <View>
          <Text style={styles.text1}>{device.product_info.product_title}</Text>
        </View>
      </View>
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
    marginBottom: responsiveHeight(1),
    backgroundColor: "#fff",
  },
  cont2: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    fontSize: responsiveFontSize(2.5),
    color: "#41392F",
    fontWeight: "700",
  },
  text2: {
    fontSize: responsiveFontSize(2),
    color: "#757575",
  },
});
