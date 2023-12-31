import React from "react";
import { I18nManager } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPass from "../screens/ForgotPass";
import About from "../screens/About";
import Terms from "../screens/Terms";
import AgreeTerms from "../screens/AgreeTerms";
import ReferralCode from "../screens/ReferralCode";
import RegisterPharmacyProduct from "../screens/RegisterPharmacyProduct";
import RegisterNotifications from "../screens/RegisterNotifications";
import RegisterCalendarAccess from "../screens/RegisterCalendarAccess";
import NewUserCharacteristics from "../screens/NewUserCharacteristics";
import Welcome from "../screens/Welcome";
import Languages from "../languages";
import LanguageContext from "../languages/LanguageContext";
import usePreferences from "../hooks/usePreferences";
import { useNavigation } from "@react-navigation/native";
import Materialbottombar from "./materialbottombar";
import PhoneVerification from "../screens/PhoneVerification";
import ForgotPassPhoneNo from "../screens/ForgotPassPhoneNo";
import ForgotPassVerifyPhoneNo from "../screens/ForgotPassVerifyPhoneNo";
import ResetPass from "../screens/ResetPass";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const RootStack = createStackNavigator();

export default function GuestNavigation(props) {
  const navigation = useNavigation();

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;
  const { theme } = usePreferences();

  const buttonBack = () => {
    return (
      <IconButton
        icon={I18nManager.isRTL ? "arrow-right" : "arrow-left"}
        style={{ marginLeft: 15 }}
        size={24}
        onPress={() => navigation.goBack()}
      />
    );
  };

  const navigatorOptions = {
    headerStyle: {
      shadowColor: "transparent",
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: "#FAF9F7",
    },
    presentation: "modal",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
    },
    headerTintColor: theme === "dark" ? "white" : "black",
    headerBackTitleVisible: false,
    headerTitleAlign: "center",
    gestureEnabled: true,
    /*cardOverlayEnabled: true,
    ...TransitionPresets.ModalPresentationIOS*/
  };

  return (
    <RootStack.Navigator
      initialRouteName="welcome"
      screenOptions={(route) => {
        return navigatorOptions;
      }}
    >
      <RootStack.Screen
        name="welcome"
        component={Welcome}
        options={{ title: "Welcome", headerShown: false }}
      />
      <RootStack.Screen
        name="phoneVerify"
        component={PhoneVerification}
        options={{ title: "Sign Up", headerShown: true }}
      />
      <RootStack.Screen
        name="referralCode"
        component={ReferralCode}
        options={{ title: "Sign Up", headerShown: true }}
      />
      <RootStack.Screen
        name="registerPharmacyProduct"
        component={RegisterPharmacyProduct}
        options={{ title: "Sign Up", headerShown: true }}
      />
      <RootStack.Screen
        name="registerNotifications"
        component={RegisterNotifications}
        options={{ title: "Sign Up", headerShown: true }}
      />
      <RootStack.Screen
        name="registerCalendarAccess"
        component={RegisterCalendarAccess}
        options={{ title: "Sign Up", headerShown: true }}
      />
      <RootStack.Screen
        name="newUserCharacteristics"
        component={NewUserCharacteristics}
        options={{ title: "Sign In", headerShown: true }}
      />
      <RootStack.Screen
        name="login"
        component={Login}
        options={{ title: "I have an account", headerTransparent: true }}
      />
      <RootStack.Screen
        name="agreeTerms"
        component={AgreeTerms}
        options={{ title: "Agree our terms", headerShown: true }}
      />
      <RootStack.Screen
        name="register"
        component={Register}
        options={{
          title: Strings.ST11,
          headerTransparent: true,
          headerLeft: () => buttonBack(),
        }}
      />
      <RootStack.Screen
        name="forgot"
        component={ForgotPass}
        options={{
          title: Strings.ST43,
          headerTransparent: true,
          headerLeft: () => buttonBack(),
        }}
      />
      <RootStack.Screen
        name="forgotpassphoneno"
        component={ForgotPassPhoneNo}
        options={{
          title: "Forget Password",
          headerShown: true,
          headerLeft: () => buttonBack(),
        }}
      />
      <RootStack.Screen
        name="forgotpassverifyphoneno"
        component={ForgotPassVerifyPhoneNo}
        options={{
          title: "Forget Password",
          headerShown: true,
          headerLeft: () => buttonBack(),
        }}
      />
      <RootStack.Screen
        name="resetpassword"
        component={ResetPass}
        options={{
          title: "Forget Password",
          headerShown: true,
          headerLeft: () => buttonBack(),
        }}
      />
      <RootStack.Screen
        name="about"
        component={About}
        options={{ title: Strings.ST110 }}
      />
      <RootStack.Screen
        name="terms"
        component={Terms}
        options={{ title: Strings.ST8 }}
      />
      <RootStack.Screen
        name="bottom"
        component={Materialbottombar}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}
