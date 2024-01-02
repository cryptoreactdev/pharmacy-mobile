import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Header from "../components/header";
import { globalStyles } from "../stylesheet";
import Card1 from "../components/homescreencards/card1";
import Card2 from "../components/homescreencards/card2";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Card3 from "../components/homescreencards/card3";
import Card4 from "../components/homescreencards/card4";
import Card5 from "../components/homescreencards/card5";
import { getCommunityPosts } from "../config/DataApp";
import { useNavigation } from "@react-navigation/native";
import ReminderBottomSheet from "../components/reminderBottomSheet";
import { useCommonView } from "../components/common/CommonViewShow";
const { width, height } = Dimensions.get("window");


export default function Community2(props) {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigation = useNavigation();
  const { isVisible, showView, hideView } = useCommonView();
  const bottomSheetRef = React.useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet to a snap point to change the height.
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    getCommunityPosts().then((response) => {
      console.warn("community posts", response)
      setBlogPosts(response);
    });
  }, []);

  const onChangeScreen = (id, title) => {
    navigation.navigate("postdetails", { id, title });
  };


  useEffect(() => {
    if (isVisible) {
      openBottomSheet();
    } else {
      closeBottomSheet();
    }
  }, [isVisible]);


  return (
    <View style={globalStyles.cont}>
      <ScrollView style={globalStyles.scroll}>
        <Header {...props} />
        <Text style={globalStyles.bigtext}>Community</Text>
        <Text style={globalStyles.text1}>
          Get inspiration from other pharmacy name users
        </Text>
        <View style={styles.cont1}>
          <View style={styles.cont2}>
            <Image
              source={require("../../assets/video.png")}
              style={styles.img}
            />
            <Text style={styles.blacktext}> Videos and how to use it</Text>
          </View>
          <View style={styles.cont2}>
            <Image
              source={require("../../assets/review.png")}
              style={styles.img}
            />
            <Text style={styles.blacktext}> Testimonials and reviews</Text>
          </View>
        </View>
        <Text style={globalStyles.text2}>Tags </Text>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={styles.btn}>
            <Text style={globalStyles.text1}> Most Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={globalStyles.text1}> Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={globalStyles.text1}> Most Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={globalStyles.text1}> Most Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={globalStyles.text1}> Most Popular</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.smallcont}>
          <Text style={globalStyles.bigtext2}>Popular Reads</Text>
          <Text style={globalStyles.text2}>See All</Text>
        </View>
        <ScrollView horizontal={true} style={styles.cont3}>
          {blogPosts.map((post) => (
            <TouchableOpacity
              onPress={() => onChangeScreen(post.id, post.title)}
              style={styles.btn4}
            >
              <View key={post.id}>
                <Image source={{ uri: post.image }} style={styles.imgg} />
                <Text style={styles.whitetext}>{post.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
      {/* <ReminderBottomSheet refBottomSheet={bottomSheetRef} onClose={hideView} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  cont1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cont2: {
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: responsiveWidth(2),
    marginBottom: responsiveHeight(2),
  },
  img: {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    resizeMode: "contain",
  },
  blacktext: {
    color: "#000",
    fontWeight: "bold",
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(1),
  },
  btn: {
    borderWidth: 1,
    borderColor: "#41392F",
    height: responsiveHeight(4.5),
    borderRadius: 20,
    paddingHorizontal: responsiveWidth(2),
    marginRight: responsiveWidth(2),
    marginVertical: responsiveHeight(2),
  },
  smallcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cont3: {
    flexDirection: "row",
    marginBottom: responsiveHeight(4),
  },
  imgg: {
    height: responsiveHeight(20),
    width: responsiveWidth(26),
    alignSelf: "center",
    marginBottom: responsiveHeight(1),
    alignSelf: "center",
    borderRadius: 20,
    marginRight: responsiveWidth(3),
  },
  whitetext: {
    fontSize: responsiveFontSize(2.2),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: responsiveHeight(10),
    position: "absolute",
    bottom: -50,
    left: 10,
  },
});
