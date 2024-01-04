import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home2 from "../screens/Home2";
import Care from "../screens/Care";
import Profile from "../screens/Profile";
import ProductDetails from "../screens/ProductDetails";
import SubscriptionDetails from "../screens/SubscriptionDetails";
import PostDetails from "../screens/PostDetails";
import Progress from "../screens/progress";
import Routine from "../screens/Routine";
import Gallery from "../screens/gallery";
import Shop2 from "../screens/Shop2";
import ShoppingCart from "../screens/shoppingcart";
import ConfirmCheckout from "../screens/confirmcheckout";
import ThanksPurchase from "../screens/thankspurchase";
import DailyRoutine from "../screens/dailyRoutine";
import Notification from "../screens/Notification";
import NotificationSettings from "../screens/NotificationSettings";
import VideosHowToUse from "../screens/VideosHowToUse";

const Stack = createStackNavigator();

export default function Newstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="notificationSettings"
        component={NotificationSettings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="productdetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="postdetails"
        component={PostDetails}
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

export function CareStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="care"
        component={Care}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="postdetails"
        component={PostDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function RoutineStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="routine"
        component={Routine}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="progress"
        component={Progress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="gallery"
        component={Gallery}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="shop"
        component={Shop2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="productdetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
