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
import { removeFromCart } from "../actions/cartActions";
import DropdownComponent from "../components/DropDownComponent";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { globalStyles } from "../stylesheet";
import { useDispatch, useSelector } from "react-redux";
import Checkoutbtn from "../components/checkoutbtn";
import { getLatestProducts } from "../config/DataApp";
import Card5 from "../components/homescreencards/card5";
import { useNavigation } from "@react-navigation/native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
const { width, height } = Dimensions.get("window");

const data = [
  { label: "Every 30 days", value: "30days" },
  { label: "Every 60 days", value: "60days" },
  { label: "Every 90 days", value: "90days" },
  { label: "Every 120 days", value: "120days" },
];
export default function ShoppingCart(props) {
  // Retrieve cart information from the Redux store
  const cartInformation = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  const handleCheckout = () => {
    navigation.navigate("confirmcheckout");
  };
  const onChangeScreenProduct = (product) => {
    props.navigation.navigate("checkout1", product);
  };

  useEffect(() => {
    getLatestProducts().then((response) => {
      const modifiedProducts = response.map((product) => {
        const imageArray = product.image.split(",");
        product.allImages = product.image;
        product.image = imageArray.length > 0 ? imageArray[0].trim() : "";
        return product;
      });

      setProducts(modifiedProducts);
      setIsLoaded(true);
    });
  }, []);

  const removeProductFromCart = (item) => { };

  // Log the cart information to the console
  return (
    <View style={{ flex: 1, backgroundColor: '#FAF9F7' }}>
      <SafeAreaView style={globalStyles.droidSafeArea}>
        <ScrollView style={styles.cont} showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                style={{ width: 70, header: 80 }}
                onPress={() => {
                  props.navigation.goBack();
                }}
              >
                <Image
                  source={require("../../assets/left.png")}
                  style={styles.left}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Cart</Text>
            </View>
            <View style={styles.imgcont}>
              {cartInformation.cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  removeProductFromCart={removeProductFromCart}
                />
              ))}
            </View>
            <View style={styles.headingTitleContainer}>
              <Text style={styles.customH3}>Frequently bought together</Text>
            </View>
            <ScrollView
              style={styles.cont2}
              horizontal={true}
              overScrollMode="never"
              showsHorizontalScrollIndicator={false}
            >
              {products.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => onChangeScreenProduct(item)}
                >
                  <Card5 item={item} />
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Checkoutbtn title={"Checkout"} onPress={handleCheckout} />
          </View>
        </ScrollView >
      </SafeAreaView >
    </View >
  );
}

const CartItem = (props) => {
  const { item } = props;
  const [quantity, setQuantity] = useState(item.quantity || 1); // Default to 1 if quantity is not provided
  const [selectedDuration, setSelectedDuration] = useState("30days");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      item.finalPrice -= item.productInformation.one_time_price;
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    item.finalPrice += item.productInformation.one_time_price;
  };

  const handleDurationChange = (value) => {
    setSelectedDuration(value);
    // You can handle logic based on the selected duration if needed
  };

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
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.titleContainer, { flex: 1, paddingRight: 12 }]}>
            <Text numberOfLines={2} style={styles.text2}>{item.productInformation.title}</Text>
          </View>
          <View>
            <View>
              <Text style={styles.additionalText}>
                ${quantity * item.productInformation.one_time_price}
              </Text>
            </View>

          </View>
        </View>
        {/* {item.productInformation.volumn} */}
        <Text style={styles.volumeColor}>30ml / 1 fl.oz</Text>
        {item.selectedOption === "onetime" ? (
          <View style={styles.textrow}>
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={handleDecrement}>
                {/* <Image
                  source={require("../../assets/removed.png")}
                  style={styles.operationsButtonRemove}
                /> */}
                <View style={styles.operationsButtonRemove}>
                  <Text style={{ fontSize: 18 }}>-</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.operationsButtonCounter}>{quantity}</Text>
              <TouchableOpacity onPress={handleIncrement}>
                {/* <Image
                  source={require("../../assets/add.png")}
                  style={styles.operationsButtonAdd}
                /> */}
                <View style={styles.operationsButtonAdd}>
                  <Text style={{ fontSize: 18 }}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Pressable
                style={styles.crossText}
                onPress={() => {
                  dispatch(removeFromCart(item.productInformation.id));
                }}
              >
                <Image
                  source={require("../../assets/img_trash.png")}
                  style={styles.btnDeleteImage}
                />
                {/* <Text style={{ color: "red" }}>X</Text> */}
              </Pressable>
            </View>
          </View>
        ) : (

          <View style={{ flex: 1, flexDirection: 'row', marginTop: responsiveHeight(2), }}>
            <View style={{ flex: 1 }}>
              <DropdownComponent
                data={data}
                value={value}
                setValue={setValue}
                isFocus={isFocus}
                setIsFocus={setIsFocus}
              />
            </View>
            <View>
              <Pressable
                style={styles.crossText}
                onPress={() => {
                  dispatch(removeFromCart(item.productInformation.id));
                }}
              >
                <Image
                  source={require("../../assets/img_trash.png")}
                  style={styles.btnDeleteImage}
                />
                {/* <Text style={{ color: "red" }}>X</Text> */}
              </Pressable>
            </View>
          </View>
        )}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    // width: responsiveWidth(90),
    backgroundColor: '#FAF9F7',
    alignSelf: "center",
    marginBottom: responsiveHeight(2),
  },
  left: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  btnDeleteImage: {
    height: 28,
    width: 28,
    resizeMode: "contain",
  },
  header: {
    height: responsiveHeight(11),
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
    paddingHorizontal: 16,
    // alignItems: "flex-start", // Stretch items to fill the width
  },
  headingTitleContainer: {
    paddingHorizontal: 16,
    marginBottom: 14,
    marginTop: 18
  },
  textcont: {
    width: responsiveWidth(50),
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: responsiveHeight(2),
  },
  text: {
    fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.4),
    color: "#000000",
    marginRight: responsiveWidth(45),
    fontWeight: 'bold'
  },
  crossText: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "#E2E2E2",
    // backgroundColor: "#FFF",
    // padding: 4,
    width: 32,
    height: 32,
    // alignSelf: "center",
    // fontSize: responsiveFontSize(2),
    // color: "#000000",
    // //marginRight: responsiveWidth(45),

    // borderWidth: 2,
    // padding: 4,
    // borderRadius: 10,
    // width: 32,
    // height: 32
  },
  // text2: {
  //   color: "#000000",
  //   fontWeight: "bold",
  // },
  // text3: {
  //   fontSize: responsiveFontSize(1.5),
  //   color: "#000000",
  // },
  cartItem: {
    // display: "flex",
    flexDirection: "row",
    width: "100%", // Fill the whole width
    // padding: 16,
    // alignItems: "flex-start",
    padding: 12,
    marginVertical: 16,
    borderRadius: 16,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.04,
    shadowRadius: 32,
    elevation: 0.4,
  },
  imageContainer: {
    // marginRight: 30,
    marginLeft: 2,
    marginRight: 18
  },
  img: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    // justifyContent: "space-between",
    // alignItems: "flex-start",
  },
  text2: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
  },
  volumeColor: {
    fontSize: responsiveFontSize(2.2),
    color: "#757575",
    // marginBottom: responsiveHeight(1),
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
    marginTop: responsiveHeight(2),

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
  },
  operationsButtonRemove: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  titleMainContainer: {

  },

  additionalText: {
    // Apply the styles you provided earlier for the additional text
    fontSize: responsiveFontSize(2.4),
    color: "#1F1F1F",
    textAlign: "right",
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
    color: "#41392F",
  },
  customH3: {
    color: "#41392F", // Fallback color if the custom variable is not supported
    fontFamily: "Bricolage Grotesque",
    fontSize: responsiveFontSize(2.5),
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 32,
  },
  cont2: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "flex-start",
    // flexWrap: "wrap",
    marginRight: 14,
    paddingLeft: 12,
    marginBottom: responsiveHeight(5),
  },
  cardContainer: {
    marginBottom: responsiveHeight(5),
    alignSelf: "center",
  },
  // titleContainer: {
  // position: "absolute",
  // bottom: 0,
  // left: 0,
  // right: 0,
  // padding: 10,
  // borderBottomLeftRadius: 10,
  // borderBottomRightRadius: 10,
  // },
  blogTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
