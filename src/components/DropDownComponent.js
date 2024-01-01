import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get("window");

const DropdownComponent = ({
  name,
  data,
  value,
  setValue,
  isFocus,
  setIsFocus,
}) => {
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return <Text style={[styles.label]}>Dropdown label</Text>;
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => <></>}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    width: height > 700 ? responsiveWidth(40) : responsiveWidth(40),
    height: responsiveHeight(3),
    // marginBottom: responsiveHeight(2),
    // marginRight: 12
    // padding: 6,
  },
  dropdown: {
    height: height > 700 ? 34 : 31,
    borderColor: "#CBCBCB",
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderRadius: height > 700 ? 13 : 12,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

// formate of data:
// const data = [
//   { label: "Item 1", value: "1" },
//   { label: "Item 2", value: "2" },
//   { label: "Item 3", value: "3" },
//   { label: "Item 4", value: "4" },
//   { label: "Item 5", value: "5" },
//   { label: "Item 6", value: "6" },
//   { label: "Item 7", value: "7" },
//   { label: "Item 8", value: "8" },
// ];
