import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Care from "../screens/Care";
import Routine from "../screens/Routine";
import Shop2 from "../screens/Shop2";
import Home2 from "../screens/Home2";
import Community2 from "../screens/Community2";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Newstack from "./newstack";
import { CareStack } from "./newstack";
import { ShopStack } from "./newstack";
import { RoutineStack } from "./newstack";
import Checkout1 from "../screens/checkout1";
import { createStackNavigator } from "@react-navigation/stack";
import Checkout2 from "../screens/checkout2";
import ShoppingCart from "../screens/shoppingcart";
import ConfirmCheckout from "../screens/confirmcheckout";
import ThanksPurchase from "../screens/thankspurchase";
import DailyRoutine from "../screens/dailyRoutine";
import SubscriptionDetails from "../screens/SubscriptionDetails";
import BottomSheet from "@gorhom/bottom-sheet";
import AddSchedule from "../screens/AddSchedule";
import EditSchedule from "../screens/EditSchedule";
import SubscriptionShippingFrequency from "../screens/SubscriptionShippingFrequency";
import MyInformation from "../screens/MyInformation";
import ChangePassword from "../screens/ChangePassword";
import AddShippingAddress from "../screens/AddShippingAddress";
import VideosHowToUse from "../screens/VideosHowToUse";
import TestimonialReviews from "../screens/TestimonialReviews";
import PaymentMethod from "../screens/PaymentMethod";
import ProductTipsDetails from "../screens/ProductTipsDetails";
import InviteFriends from "../components/InviteFriends";
import InviteFriendScreen from "../screens/InviteFriendScreen";
import WarrantyClaim from "../screens/WarrantyClaim";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNav() {
  // const hide = props.routeName != "Profile"

  const bottomSheetRef = React.useRef(null);
  let timerRef = React.useRef(null);


  useEffect(() => {
    setInterval(openBottomSheet, 5000)
    // openBottomSheet()
  }, []);


  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet to a snap point to change the height.
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();

    // if (timerRef.current != null) {
    //   clearTimeout(timerRef.current)
    // }

    // timerRef.current = setTimeout(() => {
    //   openBottomSheet();
    // }, 5000);


    //   <BottomSheet
    //   ref={bottomSheetRef}
    //   // initialSnap={0}
    //   snapPoints={["40%", "80%"]} // Set custom heights here
    //   enablePanDownToClose // Pan down gesture closes the sheet
    //   index={-1} // Initial position of the bottom sheet (optional). Default is 0
    // >
    //   <View style={bottomStyles.contentContainer}>
    //     <Text >React Native Bottom Sheet</Text>
    //     <Button onPress={closeBottomSheet} title="Close Bottom Sheet" />
    //   </View>
    // </BottomSheet>
  };

  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#F7F1E7",
        position: "absolute",
        overflow: "hidden",
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        height: 80,
        paddingHorizontal: 10,
        justifyContent: "center",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Newstack}
        tabBarColor="red"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.cont}>
              <Image
                source={require("../../assets/home.png")}
                style={{
                  tintColor: focused ? "#41392F" : "#AE9E8A",
                  height: 25,
                  width: 25,
                  resizeMode: "contain",
                }}
                accessibilityIgnoresInvertColors={true}
              />
              {!focused && (
                <Text style={{ color: "#41392F", fontSize: 10 }}>Home</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Routine"
        component={RoutineStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.cont}>
              <Image
                source={require("../../assets/calendar.png")}
                style={{
                  tintColor: focused ? "#41392F" : "#AE9E8A",
                  height: 25,
                  width: 25,
                  resizeMode: "contain",
                }}
                accessibilityIgnoresInvertColors={true}
              />
              {!focused && (
                <Text style={{ color: "#AE9E8A", fontSize: 10 }}>Routine</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Care"
        component={CareStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.cont}>
              <Image
                source={require("../../assets/care.png")}
                style={{
                  tintColor: focused ? "#41392F" : "#AE9E8A",
                  height: 25,
                  width: 25,
                  resizeMode: "contain",
                }}
                accessibilityIgnoresInvertColors={true}
              />
              {!focused && (
                <Text style={{ color: "#AE9E8A", fontSize: 10 }}>Care</Text>
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Community"
        component={Community2}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.cont}>
              <Image
                source={require("../../assets/community.png")}
                style={{
                  tintColor: focused ? "#41392F" : "#AE9E8A",
                  height: 25,
                  width: 25,
                  resizeMode: "contain",
                }}
                accessibilityIgnoresInvertColors={true}
              />
              {!focused && (
                <Text style={{ color: "#AE9E8A", fontSize: 10 }}>
                  Community
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.cont}>
              <Image
                source={require("../../assets/shop.png")}
                style={{
                  tintColor: focused ? "#41392F" : "#AE9E8A",
                  height: 22,
                  width: 22,
                  resizeMode: "contain",
                }}
                accessibilityIgnoresInvertColors={true}
              />
              {!focused && (
                <Text style={{ color: "#AE9E8A", fontSize: 10 }}>Shop</Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>

  );
}
export default function Materialbottombar() {
  return (
    <Stack.Navigator initialRouteName="Tab" >
      <Stack.Screen name="Tab" component={TabNav} options={{ headerShown: false }} />
      <Stack.Screen
        name="subscriptiondetails"
        component={SubscriptionDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="productTipsDetails"
        component={ProductTipsDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="subscriptionShippingFrequency"
        component={SubscriptionShippingFrequency}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="myInformation"
        component={MyInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="changePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="addShippingAddress"
        component={AddShippingAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="addSchedule"
        component={AddSchedule}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="editSchedule"
        component={EditSchedule}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="checkout1"
        component={Checkout1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="checkout2"
        component={Checkout2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="shoppingCart"
        component={ShoppingCart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="confirmcheckout"
        component={ConfirmCheckout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="thankspurchase"
        component={ThanksPurchase}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="dailyroutine"
        component={DailyRoutine}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="videosHowToUse"
        component={VideosHowToUse}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="testimonialReviews"
        component={TestimonialReviews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="paymentMethod"
        component={PaymentMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="inviteFriends"
        component={InviteFriendScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="warrantyClaim"
        component={WarrantyClaim}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

const bottomStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
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
  cont: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
