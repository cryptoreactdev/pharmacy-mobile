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
  Dimensions
} from "react-native";
import React from "react";
import { globalStyles } from "../../stylesheet";
const { width, height } = Dimensions.get("window");


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
    height: height > 700 ? responsiveHeight(6) : responsiveHeight(8),
    width: responsiveWidth(15),
    resizeMode: "contain",
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ffffff',
    elevation: 1,
    marginRight: responsiveWidth(2),
  },
  cont: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: responsiveWidth(0.5),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#F7F1E7",
    marginBottom: responsiveHeight(1),
    // backgroundColor: "#fff",
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
