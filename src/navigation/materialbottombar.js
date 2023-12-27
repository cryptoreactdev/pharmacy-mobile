import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
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


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNav() {
  // const hide = props.routeName != "Profile"
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
      <Stack.Screen name="Tab" component={TabNav}  options={{ headerShown: false }}/>
      <Stack.Screen
        name="subscriptiondetails"
        component={SubscriptionDetails}
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
      
    </Stack.Navigator>

  );
}

const styles = StyleSheet.create({
  cont: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
