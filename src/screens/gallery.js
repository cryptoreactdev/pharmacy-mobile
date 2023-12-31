import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { LinearGradient } from "expo-linear-gradient";
export default function Gallery(props) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("progress");
          }}
        >
          <Image source={require("../../assets/left.png")} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.text}>Gallery</Text>
        <Image source={require("../../assets/left.png")} style={styles.img2} />
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <TouchableOpacity style={styles.cardContainer}>
          <Image
            source={require("../../assets/male.jpg")}
            style={styles.discover}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.9)"]}
            style={styles.titleContainer}
          >
            <Text style={styles.blogTitle}>Oct 21, 2023</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <Image
            source={require("../../assets/male.jpg")}
            style={styles.discover}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.9)"]}
            style={styles.titleContainer}
          >
            <Text style={styles.blogTitle}>Oct 21, 2023</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: responsiveHeight(20),
    width: responsiveWidth(100),
    flexDirection: "row",
    paddingHorizontal: 18,
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: responsiveHeight(8),
    width: responsiveWidth(8),
    // resizeMode: "contain",
  },
  img2: {
    height: responsiveHeight(8),
    width: responsiveWidth(8),
    resizeMode: "contain",
    tintColor: "#fff",
  },
  text: {
    fontSize: responsiveFontSize(2.3),
    color: "#000000",
    fontWeight: "700",
    // marginRight: responsiveWidth(45),
  },
  cardContainer: {
    marginBottom: responsiveHeight(5),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: responsiveWidth(3),
  },
  discover: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    borderRadius: 10,
    // resizeMode: "contain",
    // borderRadius: 10,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: responsiveWidth(40),
  },
  blogTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imgscont: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: responsiveWidth(2),
  },
});
