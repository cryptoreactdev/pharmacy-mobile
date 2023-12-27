import React, { useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
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
const data = [
  { label: "30 days", value: "30days" },
  { label: "60 days", value: "60days" },
  { label: "90 days", value: "90days" },
  { label: "120 days", value: "120days" },
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
  return (
    <>
      <View style={styles.container}>
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
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.detailsContainer}>
            <Image
              source={{ uri: productDetail?.image }}
              style={{ width: 130, height: 150 }}
            />

            <View
              style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 16 }}
            >
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
          </View>
          <View style={styles.optionContainer}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={[styles.optionCard]}>
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
              <TouchableOpacity style={styles.optionCard} onPress={showModal}>
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
              marginHorizontal: 30,
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
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Text style={{ color: "#75695A" }}>Edit</Text>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={18}
                  color={"#757575"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginHorizontal: 30,
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
              <View style={{flexDirection:"coloum"}}>
                <Text style={{ color: "#75695A", marginBottom: 2 }}>
                  Frequency
                </Text>

                <DropdownComponent
                  data={data}
                  value={value}
                  setValue={setValue}
                  isFocus={isFocus}
                  setIsFocus={setIsFocus}
                />
              </View>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Text style={{ color: "#75695A" }}>Change</Text>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={18}
                  color={"#757575"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#F4E9DD",
              marginHorizontal: 30,
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
                  flex: 1,
                }}
              >
                3000 NE 2nd Ave Apt813, Miami,FL
              </Text>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Text style={{ color: "#75695A" }}>Change</Text>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={18}
                  color={"#757575"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#41392F",
              marginHorizontal: 30,
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
    marginHorizontal: 10,
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
    marginRight: responsiveWidth(45),
  },
});

export default SubscriptionDetails;
