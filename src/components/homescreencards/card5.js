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
        <Text numberOfLines={2} style={styles.productName}>
          {/* {item.title.length > 10
            ? `${item.title.substring(0, 10)}...`
            : item.title} */}
          {item.title}
        </Text>
        <Text style={styles.txtStartingFrom}>
          Starting from:
        </Text>
        <Text style={styles.txtPrice}>${item.price_30_days}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: responsiveHeight(18),
    width: responsiveWidth(27),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FFF',
    resizeMode: "cover",

  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 2,
    marginHorizontal: responsiveWidth(1),


    // marginRight: responsiveWidth(2.6),
  },
  textcont: {
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(25),
  },

  productName: {
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveHeight(1),
    // marginBottom: responsiveHeight(1),
    color: "#75695A",
    width: '100%',
    height: 32,
    fontWeight: '500',
    textAlign: 'center',
    // fontWeight: "bold",
  },
  txtStartingFrom: {
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(0.3),
    marginBottom: responsiveHeight(0.2),
    color: "#75695A",
    // fontWeight: "bold",
  },

  txtPrice: {
    fontSize: responsiveFontSize(2),
    // marginTop: responsiveHeight(0.3),
    marginBottom: responsiveHeight(1),
    color: "#75695A",
    fontWeight: '700',
    // fontWeight: "bold",
  },


});
