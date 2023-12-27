import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthenticationBtn from "../components/AuthenticationBtn";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const RegisterNotifications = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationGranted, setNotificationGranted] = useState(false);
  const [userData, setUserData] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    // Load user data from AsyncStorage when the component mounts
    loadUserData();
  }, []);

  const handleNotificationPermission = () => {
    // Code to request notification permission goes here
    openModal();
    setNotificationGranted(true); // Simulating permission granted for demonstration purposes
    registerUser();
  };

  const loadUserData = async () => {
    try {
      // Retrieve user data from AsyncStorage
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData !== null) {
        // Parse the JSON string to an object and update the state
        setUserData(JSON.parse(storedUserData));
      } else {
        console.log('No user data found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error loading user data: ', error);
    }
  };

  const registerUser = async() => {
    const errorHandler = (e) => {
      if (e.code === 'auth/email-already-in-use') {
        setLoading(false);
        Alert.alert(Strings.ST104, Strings.ST36);
      } else {
        setLoading(false);
        Alert.alert(Strings.ST104, Strings.ST33);
      }
    };
    await createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: `${firstName} ${lastName}`,
          })
            .then(() => {
              // Store additional user information
              const fullPhoneNumber = countryCode + phoneNumber;
              const userData = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: fullPhoneNumber,
              };

              const db = getFirestore();
              const usersCollection = collection(db, 'users');
              const userDoc = doc(usersCollection, user.uid);
              setDoc(userDoc, userData);
              setLoading(false);
            })
            .catch(errorHandler);
        })
        .catch(errorHandler);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate("bottom");
  };

  const handleSkip = () => {
    registerUser();
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{ alignItems: "center", flex: 4, justifyContent: "center" }}
        >
          <MaterialCommunityIcons name="bell" size={100} color="black" />
          <Text style={styles.title}>Turn on notifications?</Text>
          <Text style={styles.description}>
            We can notify you when something important happens, like security
            alert or account activity.
          </Text>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <AuthenticationBtn
            title={"Yes, Notify me"}
            btnstyle={{
              height: 50,
              width: "100%",
            }}
            onPress={handleNotificationPermission}
            disabled={notificationGranted}
          />
          <AuthenticationBtn
            title={"Skip for now"}
            textColor={{ color: "#41392F" }}
            btnstyle={{
              width: "100%",
              backgroundColor: "white",
              borderWidth: 1,
              height: 50,
            }}
            onPress={handleSkip}
          />
        </View>
      </View>
      <Modal
        style={{}}
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              width: 250,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "800",
                  textAlign: "center",
                  marginBottom: 5,
                }}
              >
                Pharmacy would like to send you Notifications
              </Text>
              <Text
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                Notifications may include alerts, sounds, and icon badges. These
                can be configured in settings
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <AuthenticationBtn
                btnstyle={{
                  width: 150,
                  height: 40,
                  backgroundColor: "transparent",
                }}
                textColor={{ color: "black", fontSize: 14 }}
                title={"Don't Allow"}
                onPress={closeModal}
              />
              <AuthenticationBtn
                title={"Allow"}
                onPress={closeModal}
                textColor={{ color: "black", fontSize: 14 }}
                btnstyle={{
                  backgroundColor: "transparent",
                  width: 150,
                  height: 40,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FAF9F7",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#757575",
  },
  notifyButton: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  skipButton: {
    fontSize: 16,
    color: "black",
    marginTop: 20,
  },
});

export default RegisterNotifications;
