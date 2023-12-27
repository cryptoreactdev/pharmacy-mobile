import React, { useState, useEffect } from "react";
import { getAuth } from 'firebase/auth';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { globalStyles } from "../stylesheet";
import { useSelector } from "react-redux";
import Checkoutbtn from "../components/checkoutbtn";
import { getLatestProducts, createPurchase } from "../config/DataApp";
import Card5 from "../components/homescreencards/card5";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { clearCart } from '../actions/cartActions'; // Update the path


export default function ConfirmCheckout() {
  const [inputValue, setInputValue] = useState('');
  const cartInformation = useSelector((state) => state.cart);
  const navigation = useNavigation();

  const dispatch = useDispatch(); // Add this line to get the dispatch function


  let totalAmount = 0;

  if (Array.isArray(cartInformation.cartItems)) {
    for (let i = 0; i < cartInformation.cartItems.length; i++) {
      totalAmount += cartInformation.cartItems[i].finalPrice || 0;
    }
  }

  const auth = getAuth();

  const handleCheckout = async () => {

    try {
      // Iterate over each item in the cart and make a separate API call for each
      for (const cartItem of cartInformation.cartItems) {
        const purchaseData = {
          finalPrice: cartItem.finalPrice,
          productId: cartItem.productInformation.id,
          userId: auth.currentUser.uid, // Replace with the actual user ID
          discountCode: inputValue,
          quantity: cartItem.quantity,
          selectedOption: cartItem.selectedOption,
        };
        const responseData = await createPurchase(purchaseData);
        console.log('Response from createPurchase:', responseData);
      }

      // After all API calls are complete, navigate to the next screen
      dispatch(clearCart());

      navigation.navigate("thankspurchase");
    } catch (error) {
      console.error('Error during checkout:', error);
      // Handle the error as needed
    }
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.cont}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("checkout2", props);
              }}
            >
              <Image
                source={require("../../assets/left.png")}
                style={styles.left}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Checkout</Text>
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.shippingTitle}>Shipping Address</Text>
            <TouchableOpacity
              onPress={() => {
                // Handle shipping address press
              }}
            >
              <View style={styles.shippingAddressContainer}>
                <View style={styles.firstRow}>
                  <Image
                    source={require("../../assets/shipping-icon.png")}
                    style={styles.shippingImage}
                  />
                </View>
                <View style={styles.secondRow}>
                  <Text style={styles.upperText}>Logan Paul</Text>
                  <Text style={styles.lowerText}>Av. Address 123. Medellin, Colombia. </Text>
                </View>
                <View style={styles.thirdRow}>
                  <Image
                    source={require("../../assets/chevron-right.png")}
                    style={styles.shippingImage}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.discountTitle}>Discounts</Text>
            <TextInput
              style={styles.discountInput}
              placeholder="Insert coupon"
              onChangeText={handleInputChange}
              value={inputValue}
            />
            <TouchableOpacity
              style={styles.package}
              onPress={() => {}}
            >
              <View style={styles.textrow}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../../assets/radio-button-empty.png")}
                    style={styles.box}
                  />
                  <Text style={globalStyles.text2}>Use credits</Text>
                </View>
                <Text style={globalStyles.text2}>
                  $75
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.discountTitle}>Pay with</Text>
            <TouchableOpacity
              onPress={() => {
                // Handle payment method press
              }}
            >
              <View style={styles.shippingAddressContainer}>
                <View style={styles.firstRowCard}>
                  <Image
                    source={require("../../assets/visa.png")}
                    style={styles.cardImage}
                  />
                </View>
                <View style={styles.secondRowCard}>
                  <Text style={styles.upperText}>*****3241</Text>
                  <Text style={styles.lowerText}>Logan Paul</Text>
                </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.discountTitle}>Price details</Text>
            <View style={styles.priceDetailsContainer}>
              {cartInformation.cartItems.map((item, index) => (
                <View key={index} style={styles.priceDetailsRow}>
                  <View style={styles.priceDetailsLeftRow}>
                    <Text style={styles.priceDetailsText}>{item.productInformation.title}</Text>
                  </View>
                  <View style={styles.priceDetailsRightRow}>
                    <Text style={styles.priceDetailsText}>${item.finalPrice}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <Checkoutbtn
            title={`Buy now · $${totalAmount}`}
            onPress={handleCheckout}
           
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: responsiveWidth(90),
    alignSelf: "center",
   // marginBottom: responsiveHeight(10),
    backgroundColor: '#F5F5F5'
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
  imageCart: {
    width: 56,
    height: 56,
    flexShrink: 0,
  },
  imgcont: {
    flexDirection: "column", // Use a column layout
    alignItems: "flex-start", // Stretch items to fill the width
  },
  textcont: {
    width: responsiveWidth(50),
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: responsiveHeight(2),
  },
  text: {
    fontSize: responsiveFontSize(2),
    color: "#000000",
    marginRight: responsiveWidth(45),
  },
  text2: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
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
  cartItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%', // Fill the whole width
    padding: 16,
    alignItems: 'flex-start',
    marginVertical: 16,
    borderRadius: 16,
    backgroundColor: '#FFF',
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
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  text2: {
    fontSize: responsiveFontSize(2.5),
    color: '#000000',
    fontWeight: 'bold',
  },
  text3: {
    fontSize: responsiveFontSize(1.5),
    color: '#000000',
  },
  text4: {
    fontSize: responsiveFontSize(1.8),
    color: '#000000',
    fontWeight: '400',
  },
  package: {
  paddingVertical: responsiveHeight(2),
  paddingHorizontal: 0, // Set left and right padding to 0
  marginVertical: responsiveHeight(1),
  borderRadius: 10,
  width: '100%',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  additionalText: {
    // Apply the styles you provided earlier for the additional text
    fontSize: responsiveFontSize(2), 
    color: '#1F1F1F',
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    alignSelf: 'flex-end', // This will align the text to the right
  },
  dropdownPicker: {
    height: 30,
    width: 140,
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    color: '#41392F',
    borderColor: '#CBCBCB',
    backgroundColor: '#FAF9F7',
  },
  pickerItem: {
    color: '#41392F', 
  },
  customH3: {
    color: '#41392F', // Fallback color if the custom variable is not supported
    fontFamily: 'Bricolage Grotesque',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32,
  },
  cont2: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "flex-start",
    // flexWrap: "wrap",
    marginBottom: responsiveHeight(5),
  },
  cardContainer: {
    marginBottom: responsiveHeight(5),
    alignSelf: "center",
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  blogTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    flexGrow: 0,
    flexShrink: 0,
    gap: 16,
  },
  shippingTitle: {
    color: '#41392F', // Fallback color if the custom variable is not supported
    fontFamily: 'Bricolage Grotesque',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
  },
  discountTitle: {
    color: '#41392F', // Fallback color if the custom variable is not supported
    fontFamily: 'Bricolage Grotesque',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
    marginTop: 16,
    marginBottom: 16,
  },
  shippingAddressContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 344,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 24,
  },

  firstRow: {
    width: 24,
    height: 24,
  },
  shippingImage: {
    width: 24,
    height: 24,
  },
  secondRow: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center',
    marginLeft: 8, 
    marginRight: 8,
    width: '100%',
  },

  thirdRow: {

  },

  upperText: {
    color: '#000',
    fontFamily: 'Bricolage Grotesque',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24, 
  },

  lowerText: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },

  discountInput: {
    display: 'flex',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBCBCB', // Use your desired color or the fallback color
    backgroundColor: '#FAF9F7', // Use your desired color or the fallback color
  },
  package: {
    padding: responsiveHeight(2),
    marginVertical: responsiveHeight(1),
    borderRadius: 10,
    width: '100%'
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
  cardImage: {
    height: 48,
    width: 48,
  },
  firstRowCard: {
    width: 48,
    height: 48,
  },
  secondRowCard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 8, 
    marginRight: 8, 
    paddingVertical: 8,
    paddingHorizontal: 12,
    display: 'flex',
    width: '100%',
  },
  priceDetailsContainer: {
    display: 'flex',
    width: '100%',
    padding: 24,
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 16,
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.04,
    shadowRadius: 32,
    elevation: 5,
  },

  priceDetailsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  priceDetailsText: {
    fontSize: 16,
    color: '#000000',
    color: '#1F1F1F',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24
    // Add any other styles you need for the text
  },
  priceDetailsLeftRow: {
    width: '70%',
    marginRight: '5%'
  },
  priceDetailsRightRow: {
    width: '25%',
  },


});
