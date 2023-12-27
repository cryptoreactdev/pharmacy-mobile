import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NotificationConfirmation = ({ navigation }) => {
  const [notificationGranted, setNotificationGranted] = useState(false);

  const handleNotificationPermission = () => {
    // Code to request notification permission goes here
    setNotificationGranted(true); // Simulating permission granted for demonstration purposes
    // You will need to add actual logic to request permission
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="bell" size={100} color="black" />
      <Text style={styles.title}>Turn on notifications?</Text>
      <Text style={styles.description}>
        We can notify you when something important happens, like security alert or account activity.
      </Text>
      <TouchableOpacity
        style={styles.notifyButton}
        onPress={handleNotificationPermission}
        disabled={notificationGranted}
      >
        <Text style={styles.buttonText}>Yes, notify me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('nextScreen')}>
        <Text style={styles.skipButton}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  notifyButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  skipButton: {
    fontSize: 16,
    color: 'black',
    marginTop: 20,
  },
});

export default NotificationConfirmation;
