// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Add any initialization logic here
    // For example, you can navigate to the main screen after a delay
    setTimeout(() => {
      // Navigate to the main screen (replace 'Materialbottombar' with the actual screen name)
      navigation.replace('Materialbottombar');
    }, 2000); // 2000 milliseconds (2 seconds) delay as an example
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo-splash.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#41392F', // Background color of the splash screen
  },
  logo: {
    width: 200, // Adjust the width of the image as needed
    height: 200, // Adjust the height of the image as needed
  },
});

export default SplashScreen;
