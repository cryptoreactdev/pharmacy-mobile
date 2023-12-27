import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { globalStyles } from "../stylesheet";
import Checkoutbtn from "../components/checkoutbtn";
import Accordion from "react-native-collapsible/Accordion";
import { useNavigation } from "@react-navigation/native";
//import CustomHeader from '../components/common/CustomHeader';

export default function Checkout1(props) {
  const { route } = props;
  console.log("route", route);
  const { params } = route;

  const SECTIONS = [
    {
      title: "Why you'd love it",
      content: params.review_des,
    },
    {
      title: "Technology",
      content: params.technology,
    },
    {
      title: "How it works",
      content: params.hiworks,
    },
  ];

  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section, _, isActive) => {
    return (
      <View style={styles.rowcont}>
        <Text style={globalStyles.goldentext2}>{section.title}</Text>
        <Image source={require("../../assets/down.png")} style={styles.down} />
      </View>
    );
  };

  const renderContent = (section) => {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  };

  const updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  const productInformation = params;

  const navigation = useNavigation();

  return (
    <View style={styles.cont}>
      <View style={styles.header}>
        <TouchableOpacity
          // style={{ width: 20 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../assets/left.png")}
            style={styles.left}
          />
        </TouchableOpacity>
        <Text style={styles.text}></Text>
      </View>

      <ScrollView>
        <View>
          <View style={styles.imgcont}>
            <Image
              source={{ uri: params.allImages.split(",")[0] }}
              style={styles.img}
            />
          </View>
          <ScrollView
            style={styles.cont2}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {params.allImages
              .split(",")
              .slice(1, 5)
              .map((image, index) => (
                <Image
                  key={index}
                  source={{
                    uri: `https://rdevsolutions.com/applications/pharmacy/images/${image.trim()}`,
                  }}
                  style={styles.img2}
                />
              ))}
          </ScrollView>
          <View>
            <Text style={globalStyles.text1}>Starts from</Text>
            <Text style={globalStyles.bigtext}>${params.one_time_price}</Text>
            <Text style={globalStyles.bigtext2}>${params.title}</Text>
            <Text style={styles.blacktext}>{params.volumn} ml</Text>
          </View>
          <Accordion
            sections={SECTIONS}
            activeSections={activeSections}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={updateSections}
          />
          <Checkoutbtn
            title={"Buy Now"}
            onPress={() => {
              navigation.navigate("checkout2", { productInformation });
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: { padding: responsiveWidth(2), marginHorizontal: responsiveWidth(2) },
  container: {
    flex: 1,
  },

  left: {
    left: 0,
    height: 80,
    width: 70,
    // /resizeMode: "contain",
  },
  header: {
    height: responsiveHeight(11),
    width: responsiveWidth(104),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    margin: 0,
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

  down: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },

  img: {
    height: responsiveHeight(15),
    width: responsiveWidth(40),
    resizeMode: "contain",
  },
  img2: {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    resizeMode: "contain",
  },
  imgcont: {
    justifyContent: "center",
    alignItems: "center",
  },
  cont2: {
    alignSelf: "center",
  },
  blacktext: {
    color: "#000000",
    fontSize: responsiveFontSize(1.4),
  },
  rowcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.1,
    borderColor: "#75695A",
    marginVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(2),
  },
});
