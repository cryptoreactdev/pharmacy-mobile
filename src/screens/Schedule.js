import React from "react";
import { render } from "react-dom";
import RenderHtml from "react-native-render-html";
import AntDesign from "react-native-vector-icons/AntDesign";
import Checkoutbtn from "../components/checkoutbtn";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
export default function Schedule() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          // paddingHorizontal: "number",
          // flex: "number",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Image
          source={require("../../assets/card3.png")}
          // source={{ uri: productDetail?.image }}
          style={{ width: 130, height: 150 }}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 16,
            display: "flex",
          }}
        >
          <Text style={{ fontSize: 11, paddingVertical: 5 }}>
            30 ml/1 fl.oz
          </Text>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 5 }}
          >
            Estrella renwing Vitamin C serum
          </Text>
          <Text
            style={{ fontSize: 18, paddingVertical: 5, paddingRight: 20 }}
          >
            <RenderHtml
              source={{
                html: `Explanation about the product`,
              }}
            />
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 10, marginBottom: 5 }}>
        <Text style={{ fontFamily: "italic", color: "gray" }}>
          Customize your treatment routine and add it to your calender
        </Text>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            width: 90,
            marginRight: 5,
            marginTop: 10,
            borderRadius: 25,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 10,
            alignItems: "center",
            border: 10,
            borderWidth: 1,
            borderColor: "#ECDDC6",
          }}
        // onPress={() => onChangeScreenProduct(product, "skincare")}
        >
          <Text
            style={{ fontSize: 15, color: "#75695A", fontWeight: "bold" }}
          >
            Monday
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 90,
            marginRight: 5,
            marginTop: 10,
            borderRadius: 25,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 5,
            alignItems: "center",
            border: 10,
            borderWidth: 1,
            borderColor: "#ECDDC6",
          }}
        // onPress={() => onChangeScreenProduct(product, "skincare")}
        >
          <Text
            style={{ fontSize: 15, color: "#75695A", fontWeight: "bold" }}
          >
            Tuesday
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 90,
            marginRight: 2,
            marginTop: 10,
            borderRadius: 25,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 5,
            alignItems: "center",
            border: 10,
            borderWidth: 1,
            borderColor: "#ECDDC6",
          }}
        // onPress={() => onChangeScreenProduct(product, "skincare")}
        >
          <Text
            style={{ fontSize: 15, color: "#75695A", fontWeight: "bold" }}
          >
            Wednesday
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            width: 90,
            marginRight: 2,
            marginTop: 10,
            borderRadius: 25,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 10,
            alignItems: "center",
            border: 10,
            borderWidth: 1,
            borderColor: "#ECDDC6",
          }}
        // onPress={() => onChangeScreenProduct(product, "skincare")}
        >
          <Text
            style={{ fontSize: 15, color: "#75695A", fontWeight: "bold" }}
          >
            Thursday
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 90,
            marginRight: 5,
            marginTop: 10,
            borderRadius: 25,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 2,
            alignItems: "center",
            border: 10,
            borderWidth: 1,
            borderColor: "#ECDDC6",
          }}
        // onPress={() => onChangeScreenProduct(product, "skincare")}
        >
          <Text
            style={{ fontSize: 15, color: "#75695A", fontWeight: "bold" }}
          >
            Friday
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 90,
            marginRight: 5,
            marginTop: 10,
            borderRadius: 25,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 2,
            alignItems: "center",
            border: 10,
            borderWidth: 1,
            borderColor: "#ECDDC6",
          }}
        // onPress={() => onChangeScreenProduct(product, "skincare")}
        >
          <Text
            style={{ fontSize: 15, color: "#75695A", fontWeight: "bold" }}
          >
            Saturday
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 90,
            marginRight: 5,
            marginTop: 10,
            borderRadius: 25,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 2,
            alignItems: "center",
            border: 10,
            borderWidth: 1,
            borderColor: "#ECDDC6",
          }}
        // onPress={() => onChangeScreenProduct(product, "skincare")}
        >
          <Text
            style={{ fontSize: 15, color: "#75695A", fontWeight: "bold" }}
          >
            Sunday
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Morning
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 120,
            marginRight: 5,
            marginTop: 10,
            borderRadius: 16,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 150,
            alignItems: "center",
            border: 10,
            borderWidth: 1,
            borderColor: "gray",
          }}
        // onPress={() => onChangeScreenProduct(product, "skincare")}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#75695A",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            08:00 AM
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Evening
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 120,
            marginRight: 5,
            marginTop: 10,
            borderRadius: 16,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 150,
            alignItems: "center",
            border: 10,
            borderWidth: 1,
            borderColor: "gray",
          }}
        // onPress={() => onChangeScreenProduct(product, "skincare")}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#75695A",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            08:00 PM
          </Text>
        </TouchableOpacity>
      </View>
      <Checkoutbtn title={"Save"} />
      <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
        <Text
          style={{ textDecorationLine: "underline", alignItems: "center" }}
        >
          Skip
        </Text>
      </View>
    </ScrollView>
  );
}
