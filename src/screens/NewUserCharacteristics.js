import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import AuthenticationBtn from "../components/AuthenticationBtn";
import { TextInput } from "react-native-gesture-handler";

const skinTypes = [
  "Oily",
  "Dry",
  "Normal",
  "Scaly",
  "Sensitive",
  "Balanced",
  "Other",
];
const genders = ["Female", "Male", "Other"];

const NewUserCharacteristics = ({ navigation }) => {
  const [selectedSkinType, setSelectedSkinType] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showError, setShowError] = useState(false);

  const handleSkinTypeSelection = (type) => {
    setSelectedSkinType(type);
  };

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  useEffect(() => {
    if (selectedSkinType && selectedGender && chosenDate) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  }, [selectedSkinType, selectedGender, chosenDate]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 6 }}>
        <Text style={styles.title}>Tell us about you</Text>
        <Text style={styles.subtitle}>
          This will help us personalize your experience.
        </Text>

        <Text style={styles.question}>What's your skin type?</Text>
        <View style={styles.buttonContainer}>
          {skinTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.skinTypeButton,
                selectedSkinType === type && styles.selectedButton,
              ]}
              onPress={() => handleSkinTypeSelection(type)}
            >
              <Text>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.question}>What is your gender?</Text>
        <View style={[styles.buttonContainer, styles.genderContainer]}>
          {genders.map((gender, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.genderButton,
                selectedGender === gender && styles.selectedGender,
              ]}
              onPress={() => handleGenderSelection(gender)}
            >
              <Text>{gender}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.question}>What is your birthday?</Text>
        <TouchableOpacity style={styles.datePickerContainer}>
            <Text style={styles.datePickerText}>{chosenDate.toDateString()}</Text>
        </TouchableOpacity>

        {showError && (
          <Text style={styles.errorMessage}>
            Please, complete all required fields
          </Text>
        )}
      </View>

      <View style={{ flex: 1 }}>
        <AuthenticationBtn
          title={"Continue"}
          btnstyle={{ backgroundColor: "#41392F", width: "100%" }}
          textColor={{ color: "#FFF" }}
          onPress={() => {
            if (!showError) navigation.navigate("referralCode");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  datePickerContainer: {
    borderRadius: 10,
    borderColor: "#CBCBCB",
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  datePickerText: {
    flex: 1,
    color: "#000000",
  },
  container: {
    flex: 1,
    backgroundColor: "#FAF9F7",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 20,
  },
  genderContainer: {
    backgroundColor: "#F7F1E7",
    borderRadius: 10,
    height: 45,
  },
  skinTypeButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 20,
    color: "#FAF9F7",
    borderColor: "#E8D7BB",
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  genderButton: {
    backgroundColor: "transparent",
    flex: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    margin: 5,
  },
  selectedButton: {
    backgroundColor: "#E8D7BB",
  },
  selectedGender: {
    backgroundColor: "white",
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
});

export default NewUserCharacteristics;
