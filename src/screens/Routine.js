import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import React, { useState, useEffect } from "react";
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
import ReminderBottomSheet from "../components/reminderBottomSheet";
import { useCommonView } from "../components/common/CommonViewShow";
const { width, height } = Dimensions.get("window");

export default function Routine(props) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [open, setOpen] = useState(false);

  const { isVisible, showView, hideView } = useCommonView();
  const bottomSheetRef = React.useRef(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet to a snap point to change the height.
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    if (isVisible) {
      openBottomSheet();
    } else {
      closeBottomSheet();
    }
  }, [isVisible]);

  const onChangeScreen = (page) => {
    props.navigation.navigate(page);
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
            <Text style={{
              fontSize: height > 700 ? responsiveFontSize(1.6) : responsiveFontSize(1.8),
              marginTop: height > 700 ? responsiveHeight(1) : responsiveHeight(.4),
              marginBottom: height > 700 ? responsiveHeight(1) : responsiveHeight(.4),
              color: "#75695A",
            }}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => props.navigation.navigate("progress")}
          >
            <Image
              source={require("../../assets/camera.png")}
              style={styles.img}
            />
            <Text style={{
              fontSize: height > 700 ? responsiveFontSize(1.6) : responsiveFontSize(1.8),
              marginTop: height > 700 ? responsiveHeight(1) : responsiveHeight(.4),
              marginBottom: height > 700 ? responsiveHeight(1) : responsiveHeight(.4),
              color: "#75695A",
            }}>Process</Text>
          </TouchableOpacity>
        </View>
        <Text style={globalStyles.bigtext}>Schedule</Text>
        <Text style={globalStyles.text1}>
          Follow your care schedule and take care of your beauty process result.
        </Text>
        <View style={styles.row3}>
          <TouchableOpacity style={styles.btn3} onPress={() => onChangeScreen("editSchedule")}>
            <Text style={{
              fontWeight: "bold",
              fontSize: responsiveFontSize(2),
              marginTop: height > 700 ? responsiveHeight(1) : responsiveHeight(.4),
              marginBottom: height > 700 ? responsiveHeight(1) : responsiveHeight(.4),
              color: "#75695A",
            }}>Edit</Text>
            <Image
              source={require("../../assets/pen.png")}
              style={styles.imgg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn4} onPress={() => onChangeScreen("addSchedule")}>
            <Text style={{
              fontSize: responsiveFontSize(2),
              marginTop: height > 700 ? responsiveHeight(1) : responsiveHeight(.4),
              marginBottom: height > 700 ? responsiveHeight(1) : responsiveHeight(.4),
              color: "#fff",
              fontWeight: "bold",
            }}>Add</Text>
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
            <Text style={styles.txtMonth}>June 2023</Text>

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
      {/* <ReminderBottomSheet refBottomSheet={bottomSheetRef} onClose={hideView} /> */}

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
  txtMonth: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: "bold",
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    color: "#41392F",
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginRight: responsiveWidth(4),
  },
  card: {
    width: responsiveWidth(90),
    backgroundColor: "#F4E9DD",
    borderRadius: 10,
    paddingVertical: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: responsiveWidth(90),
    backgroundColor: "#F4E9DD",
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: responsiveHeight(.4),
    paddingHorizontal: responsiveWidth(1.8)
  },
  btn2: {
    height: height > 700 ? responsiveHeight(3.8) : responsiveHeight(4.8),
    width: responsiveWidth(45),
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    height: height > 700 ? responsiveHeight(3.8) : responsiveHeight(4.8),
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
    height: height > 700 ? responsiveHeight(4.4) : responsiveHeight(5),
    width: responsiveWidth(40),
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#41392F",
  },
  btn4: {
    height: height > 700 ? responsiveHeight(4.4) : responsiveHeight(5),
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
    backgroundColor: '#F7F5F2',
    paddingVertical: 12
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
