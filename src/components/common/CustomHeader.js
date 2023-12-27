import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Touchable,
    // Image,
  } from "react-native";
  import React, { useState, useEffect } from 'react';
  import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";
  import { getAuth, signOut } from 'firebase/auth';
  
  
  export default function CustomHeader(props) {
    // const auth = getAuth();
    // const [user, setUser] = useState([]);
    // useEffect(() => {
  
    //     setUser(auth.currentUser);
  
    // }, []);
    // const onChangeScreen = (page) => {
    //   props.navigation.navigate(page);""
    // };
    //  const onShoppingCartPress = () => {
    //   props.navigation.navigate('shoppingCart'); // Replace 'shoppingCart' with the actual name of your shopping cart screen
    // };
    return (
     
        <View style={styles.header}>
          <TouchableOpacity
          //   onPress={() => {
          //     props.navigation.navigate("checkout2", props);
          //   }}
          >
            <Image
              source={require("../../../assets/left.png")}
              style={styles.left}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Cartsdsdsdfdsds</Text>
        </View>      
    );
  }
  
  const styles = StyleSheet.create({
   
      left: {
        height: 50,
        width: 50,
        resizeMode: "contain",
      },
      header: {
        height: responsiveHeight(15),
        width: responsiveWidth(100),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        margin: 0
      },
    
    //   imageCart: {
    //     width: 56,
    //     height: 56,
    //     flexShrink: 0,
    //   },
      
      text: {
        fontSize: responsiveFontSize(2.3),
        color: "#000000",
        fontWeight: "700",
        marginRight: responsiveWidth(45),
      }, 
  });
  