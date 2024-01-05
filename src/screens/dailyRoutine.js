import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Alert
  // AsyncStorage
} from "react-native";
import React, { useState, useEffect } from "react";
import { globalStyles } from "../stylesheet";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getAuth } from "firebase/auth";
import { addReminder } from "../config/DataApp";
import ReminderCardContent from "../components/homescreencards/reminderCard";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import ColorsApp from "../config/ColorsApp";
const { width, height } = Dimensions.get("window");

export default function DailyRoutine(props) {
  const navigation = useNavigation();
  const [selectedDays, setSelectedDays] = useState([]);
  const [morningTime, setMorningTime] = useState("12:00 AM");
  const [eveningTime, setEveningTime] = useState("12:00 PM");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [morningTimePickerVisible, setMorningTimePickerVisible] = useState(false)
  const [eveningTimePickerVisible, setEveningTimePickerVisible] = useState(false)
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const fromType = props.route.params.from;
  const bottomSheetRef = React.useRef(null);
  // const time = ["8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:00 AM"]

  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      // If selected, remove it
      setSelectedDays((prevSelectedDays) =>
        prevSelectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      // If not selected, add it
      setSelectedDays((prevSelectedDays) => [...prevSelectedDays, day]);
    }
  };

  const handleMorningTimePick = () => {
    setMorningTimePickerVisible(true);
    setEveningTimePickerVisible(false);
  };

  const handleEveningTimePick = () => {
    setMorningTimePickerVisible(false);
    setEveningTimePickerVisible(true);
  };

  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )

  const Col = ({ numRows, children }) => {
    return (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }

  /** handle action function for the save */

  const auth = getAuth();

  const handleSave = async () => {
    try {
      const reminderPayload = {
        user_id: auth.currentUser.uid,
        product_id: '12',
        days: selectedDays,
        morning_time: morningTime,
        evening_time: eveningTime,
      };

      console.log('Sending payload:', reminderPayload);

      const responseData = await addReminder(reminderPayload);

      console.log('Response from addReminder:', responseData);

      navigation.navigate("home");

    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {

      } catch (error) {
        console.error('Error fetching data from :', error);
      }
    };

    fetchData();
  }, []);


  const hideDatePicker = () => {
    setMorningTimePickerVisible(false);
    setEveningTimePickerVisible(false);
  };

  const handleConfirm = (time, period) => {
    setSelectedDate(time);
    hideDatePicker();

    if (period === 'morning') {
      setMorningTime(formatTime(time, 'AM'));
    } else if (period === 'evening') {
      setEveningTime(formatTime(time, 'PM'));
    }
  };


  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet to a snap point to change the height.
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };



  const formatTime = (time, period) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();

    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${period}`;
  };
  return (
    <View style={globalStyles.cont}>
      <SafeAreaView style={globalStyles.droidSafeArea}>
        <ScrollView style={globalStyles.scroll}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
                // if (fromType === 'EDIT_ROUTINE')
                //   navigation.goBack();
                // else
                //   navigation.navigate("checkout2");
              }}
            >
              <Image
                source={require("../../assets/left.png")}
                style={styles.left}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Daily routine</Text>
          </View>


          <View style={styles.productContainer}>
            <Row>
              <Col numRows={2}>
                <Image source={require('../../assets/card3.png')} style={styles.productImage} />
              </Col>
              <Col numRows={2}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={styles.smallText}>30ml / 1 fl.oz</Text>
                  <Text numberOfLines={2} style={styles.productName}>Estrella renewing vitamin C serum</Text>
                  <Text numberOfLines={2} style={styles.productDetail}>Explanation about the product</Text>
                </View>
              </Col>
            </Row>

            <View>
              <Text style={styles.grayColor}>
                Customize your treatment routine and add it to your calendar
              </Text>
            </View>
          </View>

          <View style={styles.badgeContainer}>
            {daysOfWeek?.map((day, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleDayClick(day)}

              >
                <View style={[
                  styles.badge,
                  selectedDays.includes(day) && styles.selectedDay,
                ]}><Text style={styles.badgeText}>{day}</Text></View>

              </TouchableOpacity>
            ))}
          </View>

          <View>
            <View style={[styles.dayContainer, { marginBottom: 6 }]}>
              <View>
                <Text style={styles.badgeTextCustom}>Morning</Text>
              </View>
              <View>
                <TouchableOpacity title="Select a time" onPress={handleMorningTimePick}>
                  <View style={styles.dropdownContainer}>

                    <DateTimePickerModal
                      date={selectedDate}
                      isVisible={morningTimePickerVisible}
                      mode="time"
                      onConfirm={(time) => handleConfirm(time, 'morning')}
                      onCancel={hideDatePicker}
                    />
                    <Text style={styles.time}>{morningTime}</Text>
                    <Image source={require('../../assets/down-arrow.png')} />
                  </View>

                </TouchableOpacity>
              </View>

            </View>
            <View style={[styles.dayContainer, , { marginTop: 6 }]}>
              <View>
                <Text style={styles.badgeTextCustom}>Evening</Text>
              </View>
              <View>
                <TouchableOpacity onPress={handleEveningTimePick}>
                  <View style={styles.dropdownContainer}>
                    <DateTimePickerModal
                      date={selectedDate}
                      isVisible={eveningTimePickerVisible}
                      mode="time"
                      onConfirm={(time) => handleConfirm(time, 'evening')}
                      onCancel={hideDatePicker}
                    />

                    <Text style={styles.time}>{eveningTime}</Text>
                    <Image source={require('../../assets/down-arrow.png')} />
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <View>
              {/* <Button style={styles.saveButton} labelStyle={styles.saveButtonLabel} onPress={handleSave}>Save</Button> */}
              <Button style={styles.saveButton} labelStyle={styles.saveButtonLabel} onPress={() => {
                if (fromType === 'EDIT_ROUTINE')
                  openBottomSheet()
                else if (fromType === 'THANKS_PURCHASE') {
                  navigation.navigate("home");
                } else {
                  Alert.alert("Success", "Routine Saved", [{ text: "OK" }])
                }
              }}>Save</Button>
            </View>
            {fromType === 'EDIT_ROUTINE'
              ? <View style={styles.skipLink}>
                <Text style={styles.skipLinkLabel}>Remove</Text>
              </View>
              : <View style={styles.skipLink}>
                <Text style={styles.skipLinkLabel}>Skip</Text>
              </View>
            }
          </View>
        </ScrollView>
      </SafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        style={{
          borderRadius: 24,
          backgroundColor: ColorsApp.WHITE,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.4,
          shadowRadius: 32,
          elevation: 15,
        }}
        backgroundStyle={{
          borderRadius: 32,
        }}
        handleIndicatorStyle={{
          backgroundColor: "#E2E2E2",
          width: responsiveWidth(12),
          marginTop: 8
        }}
        snapPoints={height > 700 ? ["30%", "70%"] : ["40%", "80%"]}
        enablePanDownToClose
        index={-1}
      >
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text
            style={{
              color: '#000',
              fontSize: height > 700 ? responsiveFontSize(2.2) : responsiveFontSize(2.8),
              fontWeight: '700',
              marginTop: 8
            }}>
            Already have this product?
          </Text>
          <View style={{ width: '100%', paddingHorizontal: 22 }}>
            <Button style={styles.yesButton} labelStyle={[styles.saveButtonLabel, { textTransform: 'capitalize' }]} onPress={closeBottomSheet}>Save</Button>
            <Button style={styles.shopNowButton} labelStyle={styles.shopNowButtonLabel} onPress={closeBottomSheet}>Shop Now</Button>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    height: responsiveHeight(8),
    width: responsiveWidth(8),
    // resizeMode: "contain",
  },


  header: {
    flexDirection: "row",
    // paddingHorizontal: responsiveWidth(4),
  },

  buttonsContainer: {
    marginTop: 32
  },
  skipLink: {
    marginHorizontal: 'auto',
    marginVertical: 16
  },
  skipLinkLabel: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#75695A',
    fontSize: 14,
    fontWeight: '700'
  },
  dayContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    // marginVertical: 16,
  },
  dropdownContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBCBCB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,


  },

  time: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  productContainer: {
    marginHorizontal: 10,
    marginTop: 12,
    marginBottom: 10,
  },
  productName: {
    color: '#41392F',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8
  },
  grayColor: {
    color: '#75695A',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 18
  },
  badgeContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    marginTop: 12
  },
  badge: {
    borderWidth: 1,
    borderColor: '#E8D7BB',
    borderRadius: 100,
    marginRight: 6,
    marginBottom: 6
  },
  selectedDay: {
    backgroundColor: '#E8D7BB',
    borderWidth: 1,
    borderColor: '#E8D7BB',
    borderRadius: 100,
    marginRight: 6
  },
  badgeText: {
    color: '#41392F',
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 'auto'
  },
  badgeTextCustom: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 'auto',
    color: '#41392F',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 32,
  },
  productDetail: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
    color: '#000'
  },
  text: {
    // fontSize: responsiveFontSize(2),
    // color: "#000000",
    // marginRight: responsiveWidth(45),
    // fontSize: 16,
    // fontStyle: "normal",
    // fontWeight: "700",
    // lineHeight: 24

    flex: 1,
    fontSize: height > 700 ? responsiveFontSize(2.1) : responsiveFontSize(2.4),
    color: "#000000",
    marginRight: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  row: {
    flexDirection: "row"
  },
  productImage: {
    height: 135,
    width: 135,
    borderWidth: 1,
    borderColor: '#00000000',
    borderRadius: 12,
    backgroundColor: '#fff',
    resizeMode: 'cover'

  },
  saveButton: {
    backgroundColor: '#41392F',
    paddingHorizontal: 24,
    paddingVertical: 6,
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 12
  },
  saveButtonLabel: {
    color: '#F7F1E7',
    fontSize: 16,
    fontWeight: '700'
  },
  shopNowButtonLabel: {
    color: '#41392F',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'capitalize'
  },

  yesButton: {
    backgroundColor: '#41392F',
    paddingHorizontal: 24,
    paddingVertical: 6,
    marginTop: 22,
    borderRadius: 12,
  },
  shopNowButton: {
    // backgroundColor: '#41392F',
    borderColor: '#41392F',
    borderWidth: 1.2,
    paddingHorizontal: 24,
    paddingVertical: 6,
    marginTop: 22,
    borderRadius: 12,
  },
  smallText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400'
  },
  "1col": {
    borderColor: "#fff",
    flex: 1
  },
  "2col": {
    borderColor: "#fff",
    flex: 2
  },
});
