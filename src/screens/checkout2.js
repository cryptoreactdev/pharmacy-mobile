import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { globalStyles } from "../stylesheet";
import Checkoutbtn from "../components/checkoutbtn";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import ColorsApp from "../config/ColorsApp";
const windowWidth = Dimensions.get("window").width;
const { width, height } = Dimensions.get("window");


export default function Checkout2(props) {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const productInformation = props.route.params.productInformation;

  const [finalPrice, setFinalPrice] = useState(
    productInformation.one_time_price * 1 // Default to one-time price with quantity 1
  );

  useEffect(() => {
    // Update final price whenever quantity changes for one-time purchase
    if (selectedOption === "onetime") {
      setFinalPrice(productInformation.one_time_price * quantity);
    }
  }, [quantity, selectedOption, productInformation]);

  const handleRadioSelect = (option) => {
    setSelectedOption(option);
    if (option === "30days") {
      setFinalPrice(productInformation.price_30_days * 12);
    } else if (option === "60days") {
      setFinalPrice(productInformation.price_60_days * 12);
    } else if (option === "90days") {
      setFinalPrice(productInformation.price_90_days * 12);
    } else if (option === "onetime") {
      setFinalPrice(productInformation.one_time_price * quantity);
    }
  };

  const navigation = useNavigation();

  const handleCheckout = () => {
    if (selectedOption !== null) {
      // Additional logic for checkout can be added here
      const newCartItem = {
        productInformation,
        selectedOption,
        quantity,
        finalPrice,
      };

      // Dispatch the new action to add to the cart
      dispatch(addToCart(newCartItem));

      navigation.navigate("shoppingCart", { productInformation });
    } else {
      console.warn("Please select a subscription option before checking out.");
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <View>
      <SafeAreaView style={globalStyles.droidSafeArea}>
        <ScrollView
          style={[
            styles.cont,
            selectedOption && {
              padding: responsiveWidth(2),
              marginHorizontal: responsiveWidth(2),
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ position: "relative", paddingHorizontal: 22 }}>
            <View style={[!selectedOption && styles.wrapper]}></View>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require("../../assets/left.png")}
                  style={styles.left}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Pricing</Text>
            </View>
            <View style={styles.imgcont}>
              <Image
                source={{
                  uri: productInformation.allImages.split(",")[0],
                }}
                style={styles.img}
              />
              <View style={styles.textcont}>
                <Text style={styles.text3}>{productInformation.volumn}</Text>
                <Text numberOfLines={2} style={styles.text2}>{productInformation.title}</Text>
                <Text style={styles.text4}>
                  {productInformation.description.replace(/(<([^>]+)>)/gi, "")}
                </Text>
              </View>
            </View>
          </View>

          {selectedOption ? (
            <View style={{ paddingHorizontal: 18 }}>
              <View>
                {productInformation.type === "Skin Care" ? (
                  <View>
                    <Text style={globalStyles.bigtext2}>Subscribe & Save:</Text>

                    <TouchableOpacity
                      style={styles.package2}
                      onPress={() => handleRadioSelect("30days")}
                    >
                      <View style={styles.themeCheckedcont}>
                        <View style={styles.themeCont}>
                          <Text style={styles.themeText}>Save $240 a year</Text>
                        </View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        ></View>
                      </View>
                      <View style={styles.textrow}>
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={
                              selectedOption === "30days"
                                ? require("../../assets/radio-button-checked.png")
                                : require("../../assets/radio-button-empty.png")
                            }
                            style={styles.box}
                          />
                          <Text style={globalStyles.blackLargeText}>
                            Every 30 days
                          </Text>
                        </View>
                        <Text style={globalStyles.blackLargeText}>
                          ${productInformation.price_30_days}/mo
                        </Text>
                      </View>
                      <Text style={globalStyles.smallText}>
                        Get 30 uses shipped 30days
                      </Text>
                    </TouchableOpacity>

                    <View>
                      <View style={styles.checkedcont}>
                        <View style={styles.greencont}>
                          <Text style={styles.greentext}>Save $240 a year</Text>
                        </View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Image
                            source={require("../../assets/star2.png")}
                            style={styles.starIcon}
                          />
                          <Text style={styles.mostPopularText}>Most Popular</Text>
                        </View>
                      </View>

                      <TouchableOpacity
                        style={styles.package1}
                        onPress={() => handleRadioSelect("60days")}
                      >
                        <View style={styles.textrow}>
                          <View style={{ flexDirection: "row" }}>
                            <Image
                              source={
                                selectedOption === "60days"
                                  ? require("../../assets/radio-button-checked.png")
                                  : require("../../assets/radio-button-empty.png")
                              }
                              style={styles.box}
                            />
                            <Text style={globalStyles.blackLargeText}>
                              Every 60 days
                            </Text>
                          </View>
                          <Text style={globalStyles.greenLargeText}>
                            ${productInformation.price_60_days}/mo
                          </Text>
                        </View>
                        <Text style={globalStyles.smallText}>
                          Get 30 uses shipped 60days
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      style={styles.package2}
                      onPress={() => handleRadioSelect("90days")}
                    >
                      <View style={styles.themeCheckedcont}>
                        <View style={styles.themeCont}>
                          <Text style={styles.themeText}>Save $240 a year</Text>
                        </View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        ></View>
                      </View>
                      <View style={styles.textrow}>
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={
                              selectedOption === "90days"
                                ? require("../../assets/radio-button-checked.png")
                                : require("../../assets/radio-button-empty.png")
                            }
                            style={styles.box}
                          />
                          <Text style={globalStyles.blackLargeText}>
                            Every 90 days
                          </Text>
                        </View>
                        <Text style={globalStyles.blackLargeText}>
                          ${productInformation.price_90_days}/mo
                        </Text>
                      </View>
                      <Text style={globalStyles.smallText}>
                        Get 30 uses shipped 90days
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View></View>
                )}
              </View>

              <Text style={styles.oneTimePurchase}>One-time purchase:</Text>
              <TouchableOpacity
                style={styles.package}
                onPress={() => handleRadioSelect("onetime")}
              >
                <View style={[styles.textrow]}>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={
                        selectedOption === "onetime"
                          ? require("../../assets/radio-button-checked.png")
                          : require("../../assets/radio-button-empty.png")
                      }
                      style={styles.box}
                    />
                    <Text style={styles.radioButtonText}>One time purchase</Text>
                  </View>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={handleDecrement}>
                      <Image
                        source={require("../../assets/removed.png")}
                        style={styles.operationsButtonRemove}
                      />
                    </TouchableOpacity>
                    <Text style={styles.operationsButtonCounter}>{quantity}</Text>
                    <TouchableOpacity onPress={handleIncrement}>
                      <Image
                        source={require("../../assets/add.png")}
                        style={styles.operationsButtonAdd}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>

              <Checkoutbtn
                lg
                title={`Add to cart · $${finalPrice}`}
                onPress={handleCheckout}
              />
            </View>
          ) : (
            <View style={styles.popup}>
              <Image
                source={require("../../assets/Imagee.png")}
                style={styles.popupimg}
              />
              <Text style={globalStyles.bigtext2}>Subscribe & Save</Text>
              <TouchableOpacity style={styles.last}>
                <Image
                  source={require("../../assets/tick.png")}
                  style={styles.box}
                />
                <Text style={styles.text6}>No Commitment, cancel anytime</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.last}>
                <Image
                  source={require("../../assets/tick.png")}
                  style={styles.box}
                />
                <Text style={styles.text6}>
                  You’re only charged before each delivery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.last}>
                <Image
                  source={require("../../assets/tick.png")}
                  style={styles.box}
                />
                <Text style={styles.text6}>Payless</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Checkoutbtn
                  title={"Continue"}
                  onPress={() => {
                    setSelectedOption(true);
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: responsiveWidth(100),
    alignSelf: "center",
    marginBottom: responsiveHeight(2),
    position: "relative",
  },
  left: {
    height: responsiveHeight(8),
    width: responsiveWidth(8),
    left: -11
  },
  down: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  header: {
    height: responsiveHeight(11),
    // width: responsiveWidth(104),
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: responsiveHeight(14),
    width: responsiveWidth(28),
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: '#00000000',
    borderRadius: 12,
  },
  img2: {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    resizeMode: "contain",
  },
  imgcont: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginBottom: 100,
  },
  cont2: {
    alignSelf: "center",
  },
  blacktext: {
    color: "#000000",
    fontSize: responsiveFontSize(1.4),
  },
  rowcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.1,
    borderColor: "#75695A",
    marginVertical: responsiveHeight(1),
  },
  textcont: {
    width: responsiveWidth(45),
    flex: 1,
    marginLeft: 22,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: responsiveHeight(2),
  },
  oneTimePurchase: {
    color: "#41392F",
    fontSize: responsiveFontSize(2.6),
    fontFamily: "Bricolage Grotesque",
    fontWeight: "700",
    lineHeight: 32,
    wordWrap: "break-word",
  },
  radioButtonText: {
    fontSize: responsiveFontSize(2.1),
    marginTop: responsiveHeight(1),
    marginLeft: 8,
    marginBottom: responsiveHeight(1),
    color: "#75695A",
    // fontWeight: "bold",
  },
  text: {
    flex: 1,
    marginRight: responsiveWidth(6),
    fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.4),
    color: "#000000",
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text2: {
    fontSize: responsiveFontSize(2.5),
    color: "#000000",
    fontWeight: "bold",
  },
  text3: {
    fontSize: responsiveFontSize(1.5),
    color: "#000000",
  },
  text6: {
    fontSize: responsiveFontSize(1.7),
    color: "#75695A",
    marginTop: responsiveHeight(1),
  },
  text4: {
    fontSize: responsiveFontSize(1.8),
    color: "#000000",
    fontWeight: "400",
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
    // marginTop: responsiveHeight(1.4),
    alignSelf: "center",
    marginRight: responsiveWidth(1),
  },
  package: {
    borderWidth: 0.2,
    borderColor: "#75695A00",
    padding: responsiveHeight(2),
    marginVertical: responsiveHeight(1),
    borderRadius: 16,
    backgroundColor: ColorsApp.WHITE,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    // borderTopLeftRadius:0,
    // borderTopRightRadius:0,
    backgroundColor: "#fff",
  },
  package1: {
    borderWidth: 0.2,
    borderColor: "#75695A",
    padding: responsiveHeight(2),
    marginVertical: responsiveHeight(1),
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    // backgroundColor: "#fff",
  },
  package2: {
    borderWidth: 0.2,
    borderColor: "#75695A",
    padding: responsiveHeight(1),
    paddingTop: 0,
    marginVertical: responsiveHeight(1),
    borderRadius: 10,
    // borderTopLeftRadius: 0,
    //borderTopRightRadius: 0,
    //backgroundColor: "red",
  },
  themeCheckedcont: {
    width: responsiveWidth(93),
    alignSelf: "center",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    top: responsiveHeight(1),
    height: responsiveHeight(5),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  checkedcont: {
    backgroundColor: "#F4E9DD",
    width: responsiveWidth(93),
    alignSelf: "center",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    top: responsiveHeight(1),
    height: responsiveHeight(5),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#F4E9DD",
  },
  box2: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(1),
    color: "#41392F",
  },
  starIcon: {
    height: 14,
    width: 14,
    resizeMode: "contain",
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(1),
    color: "#41392F",
  },
  mostPopularText: {
    fontSize: 16,
    color: "#41392F",
    fontWeight: "700",
  },
  whitetext: {
    color: "#41392F",
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
  },
  greencont: {
    backgroundColor: "#E8FFE4",
    //backgroundColor: "red",
    height: responsiveHeight(3),
    borderRadius: 50,
    top: responsiveHeight(1),
    // padding: responsiveHeight(0.5),
    marginRight: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(2),
    alignItems: "center",
    justifyContent: "center",
  },
  themeCont: {
    backgroundColor: "#F4E9DD",
    //backgroundColor: "red",
    height: responsiveHeight(3),
    borderRadius: 50,
    top: responsiveHeight(1),
    // padding: responsiveHeight(0.5),
    marginRight: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(2),
    alignItems: "center",
    justifyContent: "center",
  },
  themeText: {
    color: "#41392F",
    fontSize: responsiveFontSize(1.5),
    fontWeight: "700",
  },
  greentext: {
    color: "#00B505",
    fontSize: responsiveFontSize(1.5),
    fontWeight: "bold",
  },
  popup: {
    width: responsiveWidth(100),
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    justifyContent: "center",
    // borderTopWidth: 1,
    borderColor: "#75695A",
    backgroundColor: "#fff",
    paddingTop: responsiveHeight(5),
    alignSelf: "center",
    elevation: 5,
    paddingRight: 16,
    paddingLeft: 16,
    zIndex: 999999,
    marginBottom: 0,
  },
  popupimg: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    marginRight: responsiveWidth(10),
    borderRadius: 30,
    marginTop: 0,
    marginBottom: 0,
    marginRight: "auto",
    marginLeft: "auto",
  },
  last: {
    flexDirection: "row",

    alignItems: "center",
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // marginTop: responsiveHeight(2),
  },
  counterButton: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#41392F",
  },
  counterValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#41392F",
  },
  operationsButtonRemove: {
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    backgroundColor: "#FFF",
    padding: 4,
    width: 32,
    height: 32,
  },
  operationsButtonAdd: {
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    backgroundColor: "#FFF",
    padding: 4,
    width: 32,
    height: 32,
  },
  operationsButtonCounter: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    backgroundColor: "#FFF",
    display: "flex",
    width: 32,
    height: 32,
    padding: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "center",
    textAlignVertical: "center",
  },
  wrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#00000040",
    width: windowWidth,
    height: "120%",
    zIndex: 9999,
  },
});
