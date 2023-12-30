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
  useWindowDimensions
} from "react-native";
import React from "react";
import { globalStyles } from "../../stylesheet";
import { HTMLStyles } from "../../config/HTMLStyles";
import HTMLView from "react-native-render-html";



export default function Card3(product) {
  const imageArray = product?.product?.product_info?.product_image.split(",");
  const firstImage = imageArray?.length > 0 ? imageArray[0].trim() : "";
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity style={styles.cont} onPress={product?.onPress}>
      <View style={styles.cont2}>
        <Image source={{ uri: firstImage }} style={styles.img} />
        <View style={{ flex: 1 }}>
          <Text numberOfLines={2} style={styles.text1}>{product?.product?.product_info.product_title}</Text>
          <Text style={styles.text2}>50ml/1 fl.oz</Text>
          {/* <HTMLView
            source={{
              html: product?.product?.product_info.product_description ? product?.product?.product_info.product_description : `<p></p>`,
            }}
            contentWidth={width}
            tagsStyles={HTMLStyles}
          /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    // flex: 1,
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    resizeMode: "contain",
    marginRight: responsiveWidth(2),
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'white'
  },
  cont: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: responsiveWidth(0.8),
    borderRadius: 10,
    // marginBottom: responsiveHeight(1),
    backgroundColor: "#fff",
  },
  cont2: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    fontSize: responsiveFontSize(2.3),
    color: "black",
    fontWeight: "bold",
    marginVertical: 2,
  },
  text2: {
    fontSize: responsiveFontSize(2),
    // marginTop: responsiveHeight(1),
    // fontWeight: "bold",
    color: "#000000",
    marginVertical: 2
  },
});
