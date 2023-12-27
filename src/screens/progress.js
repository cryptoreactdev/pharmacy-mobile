import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/header";
import { globalStyles } from "../stylesheet";
import Card1 from "../components/homescreencards/card1";
import Card2 from "../components/homescreencards/card2";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import CalendarPicker from "react-native-calendar-picker";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";

export default function Progress(props) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Check for camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      console.error('Camera permission not granted');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };


  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  return (
    <View style={globalStyles.cont}>
      <ScrollView style={globalStyles.scroll}>
        <Header />
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => props.navigation.navigate("routine")}
          >
            <Image
              source={require("../../assets/calendar.png")}
              style={styles.img}
            />
            <Text style={globalStyles.text3}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image
              source={require("../../assets/camera.png")}
              style={styles.img}
            />
            <Text style={globalStyles.text3}>Process</Text>
          </TouchableOpacity>
        </View>
        <Text style={globalStyles.bigtext}>Process</Text>
        <Text style={globalStyles.text1}>
          Follow you care schedule and track your beauty process results
        </Text>
        <TouchableOpacity style={styles.opencamera} onPress={() => pickImage()}>
          <Image
            source={require("../../assets/camera.png")}
            style={styles.img2}
          />
          <Text style={globalStyles.goldentext3}>Take a Photo</Text>
        </TouchableOpacity>
        <View style={styles.rowdiv}>
          <Image
            source={require("../../assets/warning.png")}
            style={styles.img}
          />
          <Text style={styles.blacktextsmall}>
            For reliable results, use consistent lighting and location
          </Text>
        </View>
        <View style={styles.smallcont}>
          <Text style={globalStyles.bigtext2}>Discover</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("gallery");
            }}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={globalStyles.text2}>See All</Text>
            <Image
              source={require("../../assets/right.png")}
              style={globalStyles.right}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.cardContainer}>
            <Image
              source={require("../../assets/male.jpg")}
              style={styles.discover}
            />
            <LinearGradient
              colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.9)"]}
              style={styles.titleContainer}
            >
              <Text style={styles.blogTitle}>Shomo SHomo</Text>
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
              <Text style={styles.blogTitle}>Shomo SHomo</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  smallcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(2),
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginRight: responsiveWidth(4),
  },
  img2: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    marginRight: responsiveWidth(4),
    tintColor: "#75695A",
  },
  rowdiv: {
    flexDirection: "row",

    marginVertical: responsiveHeight(2),
    alignItems: "center",
  },
  blacktextsmall: {
    fontSize: responsiveFontSize(1.6),
  },
  card: {
    width: responsiveWidth(90),
    backgroundColor: "#F4E9DD",
    borderRadius: 10,
    paddingVertical: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: responsiveWidth(70),
    backgroundColor: "#F4E9DD",
    alignSelf: "center",
    borderRadius: 10,
    padding: responsiveWidth(1),
  },
  btn2: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(35),
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(35),
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  opencamera: {
    marginVertical: responsiveHeight(2),
    backgroundColor: "#F4E9DD",
    height: responsiveHeight(18),
    width: responsiveWidth(90),
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  cardContainer: {
    marginBottom: responsiveHeight(5),
    flexDirection: "row",
    alignItems: "center",
    marginRight: responsiveWidth(3),
  },
  discover: {
    height: responsiveHeight(22),
    width: responsiveWidth(42),
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
    width: responsiveWidth(42),
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
