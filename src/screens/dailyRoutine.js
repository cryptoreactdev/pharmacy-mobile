import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
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


export default function DailyRoutine(props) {
  const navigation = useNavigation();
  const [selectedDays, setSelectedDays] = useState([]);
  const [morningTime, setMorningTime] = useState("12:00 AM");
  const [eveningTime, setEveningTime] = useState("12:00 PM");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [morningTimePickerVisible, setMorningTimePickerVisible] = useState(false)
  const [eveningTimePickerVisible, setEveningTimePickerVisible] = useState(false)
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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

  const formatTime = (time, period) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();

    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${period}`;
  };
  return (
    <View style={globalStyles.cont}>
      <ScrollView style={globalStyles.scroll}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("checkout2");
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
              <Image source={require('../../assets/Image.png')} style={styles.productImage} />
            </Col>
            <Col numRows={2}>
              <Text style={styles.smallText}>30ml / 1 fl.oz</Text>
              <Text style={styles.productName}>Estrella renewing vitamin C serum</Text>
              <Text style={styles.productDetail}>Explanation about the product</Text>
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
              key={day}
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
          <View style={styles.dayContainer}>
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
          <View style={styles.dayContainer}>
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
            <Button style={styles.saveButton} labelStyle={styles.saveButtonLabel} onPress={handleSave}>Save</Button>
          </View>
          <View style={styles.skipLink}>
            <Text style={styles.skipLinkLabel}>Skip</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  header: {
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    padding: 0
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
    marginVertical: 16,
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
    marginBottom: 10
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
    marginTop: 10
  },
  badgeContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8
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
    fontSize: responsiveFontSize(2),
    color: "#000000",
    marginRight: responsiveWidth(45),
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24
  },
  row: {
    flexDirection: "row"
  },
  productImage: {
    height: 150,
    width: 125
  },
  saveButton: {
    backgroundColor: '#41392F',
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 12
  },
  saveButtonLabel: {
    color: '#F7F1E7',
    fontSize: 16,
    fontWeight: '700'
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
