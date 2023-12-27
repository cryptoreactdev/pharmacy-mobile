import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React, { useState, useEffect } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { getAuth, signOut } from 'firebase/auth';


export default function Header(props) {
  const auth = getAuth();
  const [user, setUser] = useState([]);
  useEffect(() => {

      setUser(auth.currentUser);

  }, []);
  const onChangeScreen = (page) => {
    props.navigation.navigate(page);""
  };
   const onShoppingCartPress = () => {
    props.navigation.navigate('shoppingCart'); // Replace 'shoppingCart' with the actual name of your shopping cart screen
  };
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => onChangeScreen("profile")}>
        <Image
          source={require("../../assets/header1.png")}
          style={styles.img1}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onShoppingCartPress}>
        <Image
          source={require("../../assets/header2.png")}
          style={styles.img2}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: responsiveHeight(15),
    width: responsiveWidth(100),
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
  },
  img1: {
    height: responsiveHeight(7),
    width: responsiveWidth(20),
    resizeMode: "contain",
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(-1),
  },
  img2: {
    height: responsiveHeight(5),
    width: responsiveWidth(20),
    resizeMode: "contain",
    marginTop: responsiveHeight(4),
    marginRight: responsiveWidth(7),
  },
});
