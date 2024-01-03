import React, { useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
  Alert
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Picker } from "@react-native-picker/picker";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SubscriptionSnoozeModal from "./SubscriptionSnoozeModal";
import SubscriptionSnoozSuccessModal from "./SubscriptionSnoozSuccessModal";
import { getProductById } from "../config/DataApp";
import RenderHtml from "react-native-render-html";
import DropdownComponent from "../components/DropDownComponent";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../stylesheet";
const { width, height } = Dimensions.get("window");


const data = [
  { label: "30 days", value: "Every 30 days" },
  { label: "60 days", value: "Every 60 days" },
  { label: "90 days", value: "Every 90 days" },
  { label: "120 days", value: "Every 120 days" },
];
const SubscriptionDetails = (props) => {
  const { width } = useWindowDimensions();

  const [showmodal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [selectedDuration, setSelectedDuration] = useState("30days");
  const source = props.route.params.source;
  const deviceInfo = props.route.params.device;
  console.warn("props.route.params", props.route.params);

  const fetchProductData = (id) => {
    getProductById(id)
      .then((response) => {
        setProductDetail(response[0]);
      })
      .catch((e) => {
        setProductDetail({});
      });
  };

  useEffect(() => {
    let id = props.route.params.device.product_id
      ? props.route.params.device.product_id
      : props.route.params.device.id;
    fetchProductData(id);
  }, [props.route.params.device.id, props.route.params.device.product_id]);
  const showModal = (val) => {
    if (val) {
      setShowSuccessModal(true);
    }
    setShowModal(!showmodal);
  };
  const handleDurationChange = (value) => {
    setSelectedDuration(value);
    // You can handle logic based on the selected duration if needed
  };
  const navigation = useNavigation();


  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )

  const Col = ({ numRows, children }) => {
    return (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }


  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={globalStyles.droidSafeArea}>
          <View style={styles.header}>
            <TouchableOpacity
              // style={{ width: 20 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                source={require("../../assets/left.png")}
                style={styles.left}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Subscription</Text>
          </View>
        </SafeAreaView>

        <ScrollView style={{ flex: 1, paddingHorizontal: 18 }} overScrollMode="never" showsVerticalScrollIndicator={false}>
          <View style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row'
          }}>
            <View>
              <Image source={require('../../assets/card3.png')} style={styles.productImage} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', marginLeft: 16 }}>
              <Text style={styles.smallText}>30ml / 1 fl.oz</Text>
              <Text numberOfLines={2} style={styles.productName}>Estrella renewing vitamin C serum</Text>
              <Text numberOfLines={2} style={styles.productDetail}>Explanation about the product sddfdf dfdfdf </Text>
            </View>
          </View>

          {/* <View style={styles.detailsContainer}>
            <Image
              source={{ uri: productDetail?.image }}
              style={{ width: 130, height: 150 }}
            />

            <View
              style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 16 }}>
              <Text style={{ fontSize: 11, paddingVertical: 5 }}>
                {productDetail?.volumn}
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 5 }}
              >
                {productDetail?.title}
              </Text>
              <Text
                style={{ fontSize: 18, paddingVertical: 5, paddingRight: 20 }}
              >
                <RenderHtml
                  contentWidth={width}
                  source={{
                    html: `${productDetail.description}`,
                  }}
                />
              </Text>
            </View>
          </View> */}
          <View style={styles.optionContainer}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={[styles.optionCard, { marginRight: 10 }]}>
                <MaterialCommunityIcons
                  name="lightning-bolt-circle"
                  size={35}
                  color={"#41392F"}
                  style={{ paddingBottom: 16 }}
                />
                <Text style={{ fontWeight: "bold" }}>Refill Now</Text>
                <Text style={{ fontSize: 12, color: "#757575" }}>
                  Next: Oct 21th
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={[styles.optionCard, { marginLeft: 10 }]} onPress={showModal}>
                <Image
                  source={require("../../assets/crescent.png")}
                  height={50}
                  width={50}
                  style={{ marginBottom: 16 }}
                />
                <Text style={{ fontWeight: "bold" }}>Snooze</Text>
                <Text style={{ fontSize: 12, color: "#757575" }}>
                  For one month
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#F4E9DD",
              // marginHorizontal: 30,
              paddingVertical: 25,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#41392F",
                paddingBottom: 10,
              }}
            >
              Reminder
            </Text>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#75695A", fontWeight: "bold" }}>
                Routine
              </Text>
              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate("dailyroutine", { from: 'SUBSCRIPTION' })}>
                <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), color: "#75695A" }}>Edit</Text>
                <Image
                  source={require("../../assets/right.png")}
                  style={{
                    height: height > 700 ? responsiveHeight(2.2) : responsiveHeight(3.2),
                    width: height > 700 ? responsiveWidth(5.4) : responsiveWidth(6.4),
                    resizeMode: "contain"
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              // marginHorizontal: 30,
              paddingVertical: 25,
              borderBottomWidth: 1,
              borderBottomColor: "#F4E9DD",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#41392F",
                marginBottom: 10,
              }}
            >
              Shipping
            </Text>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "coloum" }}>
                <Text style={{ color: "#75695A", marginBottom: 2 }}>
                  Frequency
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 2,
                    fontWeight: "bold",
                    color: "#41392F",
                    marginBottom: 10,
                  }}
                >
                  Every 3 months
                </Text>
                {/* <DropdownComponent
                  data={data}
                  value={value}
                  setValue={setValue}
                  isFocus={isFocus}
                  setIsFocus={setIsFocus}
                /> */}
              </View>
              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate("subscriptionShippingFrequency")}>
                <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), color: "#75695A" }}>Change</Text>
                <Image
                  source={require("../../assets/right.png")}
                  style={{
                    height: height > 700 ? responsiveHeight(2.2) : responsiveHeight(3.2),
                    width: height > 700 ? responsiveWidth(5.4) : responsiveWidth(6.4),
                    resizeMode: "contain"
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#F4E9DD",
              // marginHorizontal: 30,
              paddingVertical: 25,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#75695A",
                paddingBottom: 10,
              }}
            >
              Shipping address
            </Text>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "#41392F",
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingRight: 4,
                  flex: 1,
                }}
              >
                3000 NE 2nd Ave Apt813, Miami,FLs sdsd sdsd
              </Text>
              <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate("myInformation")}>
                <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), color: "#75695A" }}>Change</Text>
                <Image
                  source={require("../../assets/right.png")}
                  style={{
                    height: height > 700 ? responsiveHeight(2.2) : responsiveHeight(3.2),
                    width: height > 700 ? responsiveWidth(5.4) : responsiveWidth(6.4),
                    resizeMode: "contain"
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#41392F",
              // marginHorizontal: 30,
              paddingVertical: 25,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#41392F",
                paddingBottom: 10,
              }}
            >
              How to Use
            </Text>
            <Text style={{ color: "#1F1F1F", flex: 1 }}>
              {productDetail.hiworks}
            </Text>
          </View>
        </ScrollView>
      </View>
      <SubscriptionSnoozeModal visibility={showmodal} onPress={showModal} />
      <SubscriptionSnoozSuccessModal
        visibility={showSuccessModal}
        onPress={() => setShowSuccessModal(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F7",
  },
  detailsContainer: {
    justifyContent: "center",
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  optionCard: {
    flex: 1,
    backgroundColor: "white",
    height: 110,
    // marginHorizontal: 10,
    borderRadius: 12,
    padding: 10,
  },
  optionContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 25,
  },
  // dropdownPicker: {
  //   // height: 30,
  //   // width: 140,
  //   padding: 8,
  //   borderRadius: 12,
  //   borderWidth: 1,
  //   color: "#41392F",
  //   borderColor: "#CBCBCB",
  //   backgroundColor: "#FAF9F7",
  // },
  // pickerItem: {
  //   color: "#41392F",
  // },
  //  container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  dropdownContainer: {
    width: 250,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dropdownPicker: {
    paddingVertical: 10,
    fontSize: 16,
  },
  header: {
    height: responsiveHeight(11),
    width: responsiveWidth(104),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },

  left: {
    left: 0,
    height: 80,
    width: 70,
    // resizeMode: "contain",
  },

  text: {
    fontSize: responsiveFontSize(2.3),
    color: "#000000",
    fontWeight: "700",
    marginRight: responsiveWidth(38),
  },

  productImage: {
    height: 125,
    width: 125,
    borderWidth: 1,
    borderColor: '#00000000',
    borderRadius: 12,
    backgroundColor: '#fff',
    resizeMode: 'cover'

  },

  row: {
    flexDirection: "row"
  },
  smallText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400'
  },
  productName: {
    color: '#41392F',
    fontSize: 18,
    fontWeight: '600',
  },
  productDetail: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
    color: '#000'
  },
});

export default SubscriptionDetails;
