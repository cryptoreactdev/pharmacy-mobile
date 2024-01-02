import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { globalStyles } from "../stylesheet";
import Card1 from "../components/homescreencards/card1";
import Card2 from "../components/homescreencards/card2";
import { getFeaturedPosts } from "../config/DataApp";
import { getLatestPosts } from "../config/DataApp";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Card3 from "../components/homescreencards/card3";
import Card4 from "../components/homescreencards/card4";
import ReminderBottomSheet from "../components/reminderBottomSheet";
import { useCommonView } from "../components/common/CommonViewShow";

export default function Care({ props, navigation }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [filteredLatestPosts, setFilteredLatestPosts] = useState([]);
  const { isVisible, showView, hideView } = useCommonView();
  const bottomSheetRef = React.useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet to a snap point to change the height.
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    getFeaturedPosts().then((response) => {
      setItems(response);
      setIsLoaded(true);
    });
    getLatestPosts().then((response) => {
      setLatestPosts(response);
      setFilteredLatestPosts(response);
      setIsLoaded(true);
    });
  }, []);
  useEffect(() => {
    // Filter latestPosts based on the search input
    const filteredPosts = latestPosts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredLatestPosts(filteredPosts);
  }, [search, latestPosts]);
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
      <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.scroll}>
        <Header {...props} />
        <Text style={[globalStyles.bigtext, { marginHorizontal: 2 }]}>Care</Text>
        <Text style={styles.txtSubline}>Explore our most recent products</Text>
        <ScrollView horizontal={true}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cardContainer}
              onPress={() => onChangeScreen(item.id, item.title)}
            >
              <Image source={{ uri: item.image }} style={styles.discover} />
              <LinearGradient
                colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.9)"]}
                style={styles.titleContainer}
              >
                <Text style={styles.blogTitle}>{item.title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* <Text style={globalStyles.text2}>We Can Help You with</Text> */}
        <View style={styles.search}>
          <Image
            source={require("../../assets/search.png")}
            style={styles.img2}
          />
          <TextInput
            placeholder="Search"
            style={styles.input}
            placeholderTextColor={"#41392F"}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
        <View style={styles.cont2}>
          {filteredLatestPosts.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onChangeScreen(item.id, item.title)}
              style={styles.btn4}
            >
              <Image source={{ uri: item.image }} style={styles.img} />
              <View style={styles.absoultediv}>
                <Text style={styles.whitetext}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {/* <ReminderBottomSheet refBottomSheet={bottomSheetRef} onClose={hideView} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  // discover: {
  //   height: responsiveHeight(23),
  //   width: responsiveWidth(90),
  //   resizeMode: "contain",
  //   alignSelf: "center",
  //   marginBottom: responsiveHeight(1),
  //   alignSelf: "center",
  // },
  cont2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: responsiveHeight(5),
  },
  txtSubline: {
    fontSize: responsiveFontSize(2),
    //marginTop: responsiveHeight(1),
    // marginBottom: responsiveHeight(1),
    //fontFamily: "Inter",
    color: "#75695A",
    marginBottom: 14,
    marginHorizontal: 2
  },
  img: {
    height: height > 700 ? responsiveHeight(16) : responsiveHeight(18),
    width: responsiveWidth(26),
    // resizeMode: "contain",
    alignSelf: "center",
    marginBottom: responsiveHeight(1),
    alignSelf: "center",
    borderRadius: 20,
    marginRight: responsiveWidth(2),
  },
  whitetext: {
    fontSize: responsiveFontSize(1.5),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: responsiveHeight(10),
  },
  absoultediv: {
    position: "absolute",
    width: responsiveWidth(25),
    bottom: -50,
    left: 7,
    flexWrap: "wrap",
  },
  search: {
    height: responsiveHeight(5),
    width: responsiveWidth(90),
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(2),
  },
  input: {
    width: responsiveWidth(60),
    color: "#41392F",
    fontSize: responsiveFontSize(2),
    paddingHorizontal: responsiveWidth(2),
  },
  img2: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  btn4: {
    flexWrap: "wrap",
  },
  cardContainer: {
    marginBottom: responsiveHeight(5),
    alignSelf: "center",
  },
  discover: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    resizeMode: "cover",
    borderRadius: 10,
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
});
