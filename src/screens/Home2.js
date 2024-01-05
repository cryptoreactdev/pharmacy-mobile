import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity, AsyncStorage, Dimensions
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "../components/header";
import { globalStyles } from "../stylesheet";
import Card1 from "../components/homescreencards/card1";
import Card2 from "../components/homescreencards/card2";
import { LinearGradient } from "expo-linear-gradient";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Card3 from "../components/homescreencards/card3";
import Card4 from "../components/homescreencards/card4";
import ReminderCardContent from "../components/homescreencards/reminderCard";
import {
  getFeaturedProducts,
  getPromotions,
  getLatestPosts,
  getUserPurchases,
} from "../config/DataApp";
import { getAuth } from 'firebase/auth';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import ReminderBottomSheet from "../components/reminderBottomSheet";
import MinuteView from "../components/common/MinuteView";
import { useCommonView } from "../components/common/CommonViewShow";
const { width, height } = Dimensions.get("window");

export default function Home2(props) {
  // const bottomSheetRef = useRef < BottomSheet > (null);
  const bottomSheetRef = React.useRef(null);
  let timerRef = React.useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [myproducts, setMyproducts] = useState([]);
  const [devices, setDevices] = useState([]);
  const [accesories, setAccesories] = useState([]);
  const [skinCareProducts, setSkinCareProducts] = useState([]);
  const [openCardStates, setOpenCardStates] = useState({});
  const [openSkinCareOption, setOpenSkinCareOption] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [user, setUser] = useState([]);
  const { isVisible, showView, hideView } = useCommonView();
  const auth = getAuth();
  // const fall = React.useRef(new Animated.Value(1)).current;

  // const animatedShadowOpacity = Animated.interpolateNode(fall, {
  //   inputRange: [0, 1],
  //   outputRange: [0.5, 0],
  // });

  useEffect(() => {
    const initialOpenStates = {};
    skinCareProducts.forEach((product) => {
      initialOpenStates[product.id] = false;
    });
    setOpenCardStates(initialOpenStates);
  }, [skinCareProducts]);

  useEffect(() => {
    setUser(auth.currentUser);
    setIsLoaded(true);
    return () => clearTimeout(timerRef.current);
  }, []);


  const fetchData = async () => {
    getFeaturedProducts().then((response) => {
      const modifiedProducts = response.map((product) => {
        const imageArray = product.image.split(",");
        product.allImages = product.image;
        product.image = imageArray.length > 0 ? imageArray[0].trim() : "";
        return product;
      });
      setItems(response);
      setIsLoaded(true);
    });

    getLatestPosts().then((response) => {
      setBlogPosts(response);
      // console.warn("Response from posts", response)
      setIsLoaded(true);
    });

    getPromotions().then((promotionsData) => {
      setPromotions(promotionsData);
      setIsLoaded(true);
    });

    getUserPurchases(auth.currentUser.uid).then((response) => {
      // console.log("GET_USER_PURCHASE : ", JSON.stringify(response))
      const devices = response.filter(
        (product) =>
          product.product_info &&
          product.product_info.type_title === "Devices" &&
          product.product_info.product_title
      );

      const accessoriesList = response.filter(
        (product) =>
          product.product_info &&
          product.product_info.type_title === "Accessories" &&
          product.product_info.product_title
      );

      const skinCareProductsList = response.filter(
        (product) =>
          product.product_info &&
          product.product_info.type_title === "Skin Care" &&
          product.product_info.product_title
      );
      // console.log("AUTH ID2 : ", JSON.stringify(skinCareProductsList))

      // console.log("GET_USER_PURCHASE : DEVICES :", JSON.stringify(devices))

      setDevices(devices);
      setAccesories(accessoriesList);
      setSkinCareProducts(skinCareProductsList);
      setIsLoaded(true);
    });
  };

  // Use the useEffect hook for the initial data fetching
  useEffect(() => {
    fetchData();
    const timeoutId = setTimeout(() => {
      hideView();
      // console.log("HIDE FROM HOME")
    }, 10000);

    // Your component will unmount logic here
    return () => {
      // Clear the timeout to avoid memory leaks
      clearTimeout(timeoutId);
    };
  }, []);

  // Use the useFocusEffect hook to update data when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  useEffect(() => {
    if (isVisible) {
      openBottomSheet();
    }
    else {
      closeBottomSheet();
    }
  }, [isVisible]);

  const toggleCardState = (productId) => {
    setOpenCardStates((prevStates) => ({
      ...prevStates,
      [productId]: !prevStates[productId],
    }));
  };

  const handleCardClick = (index) => {
    setOpenSkinCareOption((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setSelectedIndex(index);
  };

  const onChangeScreen = (id, title) => {
    props.navigation.navigate("postdetails", { id, title });
  };

  const onChangeScreenProduct = (device, itemType) => {
    // props.navigation.navigate("subscriptiondetails", {
    //   source: itemType,
    //   device: device,
    // });

    props.navigation.navigate("productTipsDetails", {
      source: itemType,
      device: device,
    });
  };

  const openInviteFriend = () => {
    props.navigation.navigate("inviteFriends");
  }

  const redirectShopFlow = (device, itemType) => {
    props.navigation.navigate("checkout1", device);
  };

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet to a snap point to change the height.
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };


  return (
    <View style={globalStyles.cont}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globalStyles.scroll}
        overScrollMode="never">
        <Header {...props} />
        {/* {isVisible && <Pressable
          style={{ backgroundColor: 'gray', width: 40, height: 40 }}
          onPress={hideView} >
        </Pressable>} */}
        <Text style={globalStyles.bigtext}>Welcome Back, {user.displayName}</Text>
        {promotions.map((promotion, index) => (
          <View key={index}>
            <Card1
              text1={promotion.text1}
              text2={promotion.text2}
              imageSrc={promotion.image}
              onPress={openInviteFriend}
            />
          </View>

        ))}
        <View style={styles.smallcont}>
          <Text style={globalStyles.bigtext2}>My Treatments</Text>
          <TouchableOpacity
            onPress={() => {
              // props.navigation.navigate("Shop");
              openBottomSheet();
            }}
          // onPress={showView}
          >
            <Image
              source={require("../../assets/plus.png")}
              style={styles.plus}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitle}>Devices</Text>
        {devices.length > 0 ? (
          devices.map((device, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onChangeScreenProduct(device, "device")}
            >
              <Card2 device={device} onPress={onChangeScreenProduct} />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={globalStyles.warningText}>You have not purchased any device yet.</Text>
        )}
        <Text style={styles.subTitle}>Skin Care</Text>
        {skinCareProducts.length > 0 ? (
          skinCareProducts?.map((product, index) => (
            <View style={[styles.card, { paddingVertical: openSkinCareOption[index] ? responsiveHeight(2) : 0 }]} key={index}>
              <Card3 product={product} onPress={() => handleCardClick(index)} />
              {openSkinCareOption[index] && (
                <View style={{ marginTop: height > 700 ? 0 : responsiveHeight(1) }}>
                  <View style={styles.row}>
                    <TouchableOpacity
                      onPress={() => onChangeScreenProduct(product, "skincare")}
                      style={[styles.btn, {
                        marginRight: height > 700 ? responsiveWidth(1.4) : responsiveWidth(1.6),
                        //  marginLeft: height > 700 ? responsiveWidth(3) : responsiveWidth(3.2) 
                      }]}>
                      <Image
                        source={require("../../assets/tips.png")}
                        style={styles.img}
                      />
                      <Text style={globalStyles.text3}>Tips</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.btn, {
                        marginLeft: height > 700 ? responsiveWidth(1.4) : responsiveWidth(1.5),
                        // marginRight: height > 700 ? responsiveWidth(2) : responsiveWidth(3.2)
                      }]}
                      onPress={() => onChangeScreenProduct(product, "skincare")}
                    >
                      <Image
                        source={require("../../assets/settings.png")}
                        style={styles.img}
                      />
                      <Text style={globalStyles.text3}>Settings</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.btn2}>
                    <Image
                      source={require("../../assets/bolt.png")}
                      style={styles.img}
                    />
                    <Text style={styles.text3}>Refill Now</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))
        ) : (
          <Text style={globalStyles.warningText}>You have not purchased any skin care product yet.</Text>
        )}

        <View style={styles.smallcont}>
          <Text style={globalStyles.bigtext2}>Trending</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Shop");
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
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} overScrollMode="never">
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => redirectShopFlow(item)}
            >
              <Card4 item={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.smallcont}>
          <Text style={globalStyles.bigtext2}>Discover 1</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("care");
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
        {blogPosts.map((item, index) => (
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
      <ReminderBottomSheet refBottomSheet={bottomSheetRef} onClose={hideView} />
    </View>
  );
}

const bottomStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
  },


});

const styles = StyleSheet.create({
  smallcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4
  },
  plus: {
    height: height > 700 ? responsiveHeight(4) : responsiveHeight(5),
    width: height > 700 ? responsiveWidth(9) : responsiveWidth(10),
    resizeMode: "contain",
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginRight: responsiveWidth(4),
  },
  card: {
    // flex: 1,
    // width: '96%',
    backgroundColor: "#fff",
    borderRadius: 10,
    // paddingVertical: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    paddingHorizontal: height > 700 ? responsiveWidth(2.6) : responsiveWidth(3)
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    height: height > 700 ? responsiveHeight(4.2) : responsiveHeight(5.2),
    // width: responsiveWidth(35),
    flex: 1,
    backgroundColor: "#F7F1E7",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn2: {
    // flex: 1,
    height: height > 700 ? responsiveHeight(4.2) : responsiveHeight(5.2),
    width: '100%',
    backgroundColor: "#41392F",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: responsiveHeight(2),
  },
  text3: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#fff",
    fontWeight: "bold",
  },
  // discover: {
  //   height: responsiveHeight(20),
  //   width: responsiveWidth(90),
  //   resizeMode: "contain",
  //   alignSelf: "center",
  //   marginBottom: responsiveHeight(5),
  //   alignSelf: "center",
  //   borderRadius: 10,
  // },
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
  warningText: {
    color: "#fff",
    fontSize: 16,
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
  subTitle: {
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#75695A",
    fontWeight: "bold",
  },
});
