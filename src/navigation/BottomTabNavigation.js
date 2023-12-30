// BottomTabNavigation.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Routine from "../screens/Routine";
import Care from "../screens/Care";
import Store from "../screens/Store";
import Blog from "../screens/Blog";

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === 'confirmcheckout') {
    return false;
  }

  return true;
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Routine":
              iconName = "briefcase";
              break;
            case "Care":
              iconName = "tree";
              break;
            case "Community":
              iconName = "account-group";
              break;
            case "Shop":
              iconName = "cart";
              break;
            default:
              iconName = "home";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
        })} />
      <Tab.Screen name="Routine" component={Routine}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
        })} />
      <Tab.Screen name="Care" component={Care}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
        })} />
      <Tab.Screen name="Community" component={Blog}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
        })} />
      <Tab.Screen name="Shop" component={Store}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
        })} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
