import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { globalStyles } from "../../stylesheet";

export default function Card5(props) {
  const { item } = props;
  return (
    <View style={styles.cont}>
      <Image source={{ uri: item.image }} style={styles.img} />

      <View style={styles.textcont}>
        <Text style={globalStyles.text3}>
          {item.title.length > 10
            ? `${item.title.substring(0, 10)}...`
            : item.title}
        </Text>
        <Text style={globalStyles.text1}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: responsiveHeight(18),
    width: responsiveWidth(25),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cont: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: responsiveWidth(4),
  },
  textcont: {
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(25),
  },
});
