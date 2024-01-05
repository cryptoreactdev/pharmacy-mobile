import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useSelector } from "react-redux";
import Checkoutbtn from "../components/checkoutbtn";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../stylesheet";
import ColorsApp from "../config/ColorsApp";
const { width, height } = Dimensions.get("window");


export default function ThanksPurchase(props) {
  const [inputValue, setInputValue] = useState("");
  const cartInformation = useSelector((state) => state.cart);
  const navigation = useNavigation();

  let totalAmount = 0;

  if (Array.isArray(cartInformation.cartItems)) {
    for (let i = 0; i < cartInformation.cartItems.length; i++) {
      totalAmount += cartInformation.cartItems[i].finalPrice || 0;
    }
  }

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF9F7' }}>
      <SafeAreaView style={globalStyles.droidSafeArea}>
        <ScrollView style={styles.cont}>
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  // props.navigation.navigate("checkout2", props);
                  props.navigation.goBack();
                }}
              >
                {/* <Image
                  source={require("../../assets/left.png")}
                  style={styles.left}
                /> */}
              </TouchableOpacity>
              <Text style={styles.text}>Thanks</Text>
            </View>
            <View style={styles.mainContainer}>
              <Text style={styles.thanksTitle}>Thank you for your purchase</Text>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.column}>
                <Text style={styles.rowTitle}>Order:</Text>
                <Text style={styles.rowText}>#A341HVE</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.rowTitle}>Delivery Date:</Text>
                <Text style={styles.rowText}>12/13/2023</Text>
              </View>
            </View>
            <View style={styles.oneColumn}>
              <Text style={styles.rowTitle}>Shipping Address:</Text>
              <Text style={styles.rowText}>2120 NE 1236 ST, Floor 6, Apt 9</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowTitleItem}>Items:</Text>
            </View>
            <View style={styles.itemsPurchased}>
              {cartInformation.cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </View>
            <Checkoutbtn
              title={'Add to my calendar'}
              onPress={() => {
                // navigation.popToTop()
                // navigation.navigate("home");
                navigation.navigate("dailyroutine", { from: "THANKS_PURCHASE" })
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>

    </View>
  );
}

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1); // Default to 1 if quantity is not provided
  const [selectedDuration, setSelectedDuration] = useState("30days");

  return (
    <View style={styles.cartItem}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.productInformation.allImages.split(",")[0],
          }}
          style={styles.imageCart}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.text2}>{item.productInformation.title.length > 10
            ? item.productInformation.title.substring(0, 10) + '...' : item.productInformation.title}</Text>
        </View>
        <Text style={styles.text3}>{item.productInformation.volumn}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.additionalText}>
          ${quantity * item.productInformation.one_time_price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: responsiveWidth(90),
    alignSelf: "center",
    // marginBottom: responsiveHeight(10),
    // backgroundColor: "#F5F5F5",
    backgroundColor: "#FAF9F7",
  },
  left: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  header: {
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: height > 700 ? responsiveFontSize(2.2) : responsiveFontSize(2.4),
    color: "#000000",
    fontWeight: '700',
    marginRight: responsiveWidth(48),
  },
  thanksTitle: {
    color: "#41392F",
    fontFamily: "Bricolage Grotesque",
    fontSize: height > 700 ? responsiveFontSize(3.6) : responsiveFontSize(2.6),
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 40,

  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
    flexGrow: 0,
    flexShrink: 0,

  },


  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 18,
    marginTop: 16,
  },
  column: {
    // flex: 1,
    marginRight: 8,
  },
  oneColumn: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  row: {
    marginTop: 20
  },
  rowTitle: {
    // fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
    color: "#75695A",
  },
  rowTitleItem: {
    // fontFamily: "Inter",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    color: "#75695A",
    lineHeight: 24,
  },
  rowText: {
    // fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 24,
    color: "#A341HVE",
  },
  cartItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%', // Adjust the width percentage as needed
    padding: 16,
    alignItems: 'flex-start',
    marginVertical: 16,
    marginRight: 'auto', // Align to the left edge
    marginLeft: 'auto', // Align to the right edge
    borderRadius: 16,
    backgroundColor: ColorsApp.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.04,
    shadowRadius: 32,
    elevation: 5,
  },
  imageContainer: {
    marginRight: 16,
  },
  img: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text2: {
    flexDirection: "row",
    fontSize: responsiveFontSize(2.3),
    color: "#000000",
    fontWeight: "bold",
  },
  text3: {
    fontSize: responsiveFontSize(1.5),
    color: "#000000",
  },
  text4: {
    fontSize: responsiveFontSize(1.8),
    color: "#000000",
    fontWeight: "400",
  },
  package: {
    borderWidth: 0.2,
    borderColor: "#75695A",
    padding: responsiveHeight(2),
    marginVertical: responsiveHeight(1),
    borderRadius: 10,
  },
  textrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginTop: responsiveHeight(1.2),
    marginRight: responsiveWidth(1),
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: responsiveHeight(2),
  },
  operationsButtonRemove: {
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: '#FFF',
    padding: 4,
    width: 32,
    height: 32,
  },
  operationsButtonAdd: {
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: '#FFF',
    padding: 4,
    width: 32,
    height: 32,
  },
  operationsButtonCounter: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: '#FFF',
    display: 'flex',
    width: 32,
    height: 32,
    padding: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "center",
    textAlignVertical: "center",
  },
  additionalText: {
    // Apply the styles you provided earlier for the additional text
    fontSize: responsiveFontSize(2),
    color: '#1F1F1F',
    textAlign: 'right',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24,
    alignSelf: "flex-end", // This will align the text to the right
  },
  dropdownPicker: {
    height: 30,
    width: 140,
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    color: "#41392F",
    borderColor: "#CBCBCB",
    backgroundColor: "#FAF9F7",
  },
  pickerItem: {
    color: '#41392F',
  },
  imageCart: {
    width: 56,
    height: 56,
    flexShrink: 0,
  },
});
