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
import ColorsApp from "../config/ColorsApp";
const { width, height } = Dimensions.get("window");


export default function Community2(props) {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigation = useNavigation();
  const { isVisible, showView, hideView } = useCommonView();
  const bottomSheetRef = React.useRef(null);
  const productType = ['Most Popular', 'Recent', 'Skin', 'Eyes'];
  const [selectedType, setSelectedType] = useState([]);


  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet to a snap point to change the height.
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    getCommunityPosts().then((response) => {
      // console.warn("community posts", response)
      setBlogPosts(response);
    });
  }, []);

  const onChangeScreen = (id, title) => {
    navigation.navigate("postdetails", { id, title });
  };

  const handleTypeClick = (type) => {
    if (selectedType.includes(type)) {
      // If selected, remove it
      setSelectedType((prevSelectedTypes) =>
        prevSelectedTypes.filter((selectedType) => selectedType !== type)
      );
    } else {
      // If not selected, add it
      setSelectedType((prevSelectedTypes) => [...prevSelectedTypes, type]);
    }
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
        <Text style={{
          fontSize: responsiveFontSize(2),
          color: "#75695A",
        }}>
          Explore, discover, share your journey, and find inspiration in the stories of our vibrant community.
        </Text>
        <View style={styles.cont1}>
          <TouchableOpacity style={[styles.cont2, { marginRight: 8 }]} onPress={() => props.navigation.navigate("videosHowToUse")}>
            <Image
              source={require("../../assets/video.png")}
              style={styles.img}
            />
            <Text style={styles.blacktext}>Videos &{"\n"}how to use it</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cont2, , { marginLeft: 8 }]} onPress={() => props.navigation.navigate("testimonialReviews")}>
            <Image
              source={require("../../assets/review.png")}
              style={styles.img}
            />
            <Text style={styles.blacktext}>Testimonials &{"\n"}reviews</Text>
          </TouchableOpacity>
        </View>
        <Text style={{
          fontSize: responsiveFontSize(2),
          marginTop: responsiveHeight(1),
          // marginBottom: responsiveHeight(.6),
          color: "#75695A", fontWeight: '700'
        }}>Tags </Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.typeContainer}>
            {productType?.map((type, index) => (
              <TouchableOpacity
                key={index}
                style={selectedType.includes(type) ? styles.selectedViewContainer : styles.unselectedViewContainer}
                onPress={() => handleTypeClick(type)}
              >
                <Text style={globalStyles.txtType}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={styles.smallcont}>
          <Text style={[globalStyles.bigtext2, { flex: 1 }]}>Popular Reads</Text>
          <Text style={globalStyles.text2}>See All</Text>
          <Image
            source={require("../../assets/right.png")}
            style={styles.btnOpen} />
        </View>
        <ScrollView horizontal={true} style={styles.cont3}>
          {blogPosts.map((post, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onChangeScreen(post.id, post.title)}
            >
              <View key={post.id}>
                <Image source={{ uri: post.image }} style={styles.imgg} />
                <Text style={styles.whitetext}>{post.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
      <ReminderBottomSheet refBottomSheet={bottomSheetRef} onClose={hideView} />

    </View>
  );
}

const styles = StyleSheet.create({
  cont1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingHorizontal: 1
  },
  typeContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    // paddingHorizontal: responsiveWidth(6),
    marginTop: 12
  },
  btnOpen: {
    width: 22,
    height: 22,
    // /resizeMode: "contain",
  },
  selectedViewContainer: {
    height: responsiveHeight(4.2),
    paddingHorizontal: responsiveWidth(3),
    borderWidth: responsiveWidth(.34),
    borderColor: "#ECDDC6",
    marginRight: 5,
    backgroundColor: "#ECDDC6",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  unselectedViewContainer: {
    height: responsiveHeight(4.2),
    paddingHorizontal: responsiveWidth(3),
    marginRight: 5,
    borderWidth: responsiveWidth(.34),
    borderColor: "#ECDDC6",
    backgroundColor: "#ECDDC600",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cont2: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3.8),
    marginBottom: responsiveHeight(2),
    backgroundColor: ColorsApp.WHITE,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  img: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    resizeMode: "contain",
  },
  blacktext: {
    color: "#000",
    fontWeight: "600",
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(1.6),
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
