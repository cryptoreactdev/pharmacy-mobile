import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/header";
import { globalStyles } from "../stylesheet";
import Card1 from "../components/homescreencards/card1";
import Card2 from "../components/homescreencards/card2";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import CalendarPicker from "react-native-calendar-picker";

export default function Routine(props) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [open, setOpen] = useState(false);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  return (
    <View style={globalStyles.cont}>
      <ScrollView style={globalStyles.scroll}>
        <Header {...props} />
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Image
              source={require("../../assets/calendar.png")}
              style={styles.img}
            />
            <Text style={globalStyles.text3}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => props.navigation.navigate("progress")}
          >
            <Image
              source={require("../../assets/camera.png")}
              style={styles.img}
            />
            <Text style={globalStyles.text3}>Process</Text>
          </TouchableOpacity>
        </View>
        <Text style={globalStyles.bigtext}>Schedule</Text>
        <Text style={globalStyles.text1}>
          Follow your care schedule and take care of your beauty process result.
        </Text>
        <View style={styles.row3}>
          <TouchableOpacity style={styles.btn3}>
            <Text style={globalStyles.text3}>Edit</Text>
            <Image
              source={require("../../assets/pen.png")}
              style={styles.imgg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn4}>
            <Text style={globalStyles.whitetext3}>Add</Text>
            <Image
              source={require("../../assets/bolt.png")}
              style={styles.imgg}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.calendarcont}
          onPress={() => setOpen(true)}
        >
          <View style={styles.smallcont}>
            <Text style={globalStyles.bigtext2}>June 2023</Text>

            <Image
              source={require("../../assets/right.png")}
              style={globalStyles.right}
            />
          </View>
          <View style={styles.conttt}>
            <View style={styles.date}>
              <Text style={styles.txtDate}>Sun</Text>
              <Text style={styles.txtDate}>21</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.txtDate}>Mon</Text>
              <Text style={styles.txtDate}>22</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.txtDate}>Tue</Text>
              <Text style={styles.txtDate}>23</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.txtDate}>Wed</Text>
              <Text style={styles.txtDate}>24</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.txtDate}>Thu</Text>
              <Text style={styles.txtDate}>25</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.txtDate}>Fri</Text>
              <Text style={styles.txtDate}>26</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.txtDate}>Sat</Text>
              <Text style={styles.txtDate}>27</Text>
            </View>
          </View>
        </TouchableOpacity>

        {open && (
          <CalendarPicker
            onDateChange={() => {
              setOpen(false);
            }}
          />
        )}

        <View style={styles.lastcont}>
          <View style={styles.datemain}>
            <View style={styles.datee}>
              <Text style={globalStyles.bigtext2}>25</Text>
            </View>
            <Text style={globalStyles.text2}>Tue</Text>
          </View>
          <View>
            <View style={styles.lastcard}>
              <View style={styles.aikor}>
                <Text numberOfLines={1} style={styles.useTime}>Morning, 8AM</Text>
                <Text numberOfLines={1} style={styles.productName}>[ Product ]</Text>
              </View>
              <Image
                source={require("../../assets/soap.png")}
                style={styles.soap}
              />
            </View>
            <View style={styles.lastcard}>
              <View style={styles.aikor}>
                <Text numberOfLines={1} style={styles.useTime}>Morning, 8AM</Text>
                <Text numberOfLines={1} style={styles.productName}>[ Product ]</Text>
              </View>
              <Image
                source={require("../../assets/soap.png")}
                style={styles.soap}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  soap: {
    flex: 1,
    height: responsiveHeight(9),
    width: responsiveWidth(18),
    resizeMode: "contain",
  },
  smallcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(2),
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginRight: responsiveWidth(4),
  },
  card: {
    width: responsiveWidth(90),
    backgroundColor: "#F7F1E7",
    borderRadius: 10,
    paddingVertical: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: responsiveWidth(90),
    backgroundColor: "#F7F1E7",
    alignSelf: "center",
    borderRadius: 10,
    padding: responsiveWidth(1),
  },
  btn2: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(45),
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(45),
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: responsiveHeight(2),
  },
  btn3: {
    height: responsiveHeight(5),
    width: responsiveWidth(40),
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#41392F",
  },
  btn4: {
    height: responsiveHeight(5),
    width: responsiveWidth(40),
    backgroundColor: "#41392F",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imgg: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginLeft: responsiveWidth(4),
  },
  calendarcont: {
    backgroundColor: "#Fff",
    borderRadius: 10,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2),
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(90),
    alignSelf: "center",
    marginTop: responsiveHeight(3),
  },
  date: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red',
    width: '12%'
  },
  conttt: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: responsiveWidth(90),
    alignSelf: "center",
    // backgroundColor: 'red',
    paddingHorizontal: responsiveWidth(4)
  },
  lastcont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  datee: {
    backgroundColor: "#fff",
    height: responsiveHeight(8),
    width: responsiveWidth(16),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  datemain: {
    justifyContent: "center",
    alignItems: "center",
  },
  lastcard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    height: responsiveHeight(12),
    width: responsiveWidth(70),
    borderRadius: 10,
    alignItems: 'center',
    // justifyContent: "space-between",
    // paddingHorizontal: responsiveWidth(2),
    paddingLeft: responsiveWidth(5),
    marginBottom: responsiveHeight(2),
    marginLeft: responsiveWidth(2),
  },
  aikor: {
    flex: 2,
    height: 'auto',
  },
  productName: {
    paddingVertical: 2,
    fontSize: responsiveFontSize(2.3),
    fontWeight: "bold",
    // backgroundColor: 'green',
    // marginTop: responsiveHeight(1),
    // marginBottom: responsiveHeight(1),
    color: "#41392F",
  },
  useTime: {
    paddingVertical: 2,
    fontSize: responsiveFontSize(2.2),
    // marginTop: responsiveHeight(1),
    // marginBottom: responsiveHeight(1),
    // backgroundColor: 'red',
    color: "#75695A",

  },
  txtDate: {
    fontSize: responsiveFontSize(1.9),
    //marginTop: responsiveHeight(1),
    // marginBottom: responsiveHeight(1),
    color: "#41392F",
  },

});
