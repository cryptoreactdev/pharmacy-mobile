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

export default function Card5(props) {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.img} />

      <View style={styles.textcont}>
        <Text style={styles.productName}>
          {/* {item.title.length > 10
            ? `${item.title.substring(0, 10)}...`
            : item.title} */}
          {item.title}
        </Text>
        <Text style={styles.txtStartingFrom}>
          Starting from:
        </Text>
        <Text style={globalStyles.text1}>$ {item.price_30_days}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: responsiveHeight(18),
    width: responsiveWidth(26),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    // marginRight: responsiveWidth(3),
  },
  textcont: {
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(25),
  },

  productName: {
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#75695A",
    backgroundColor: 'red'
    // fontWeight: "bold",
  },
  txtStartingFrom: {
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#75695A",
    // fontWeight: "bold",
  },


});
