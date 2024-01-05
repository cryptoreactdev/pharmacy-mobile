import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Alert,
    Switch,
    TextInput
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
import ColorsApp from "../config/ColorsApp";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function NotificationSettings(props) {
    const navigation = useNavigation();
    const [isNotification, setIsNotification] = useState(false);
    const [isPromotions, setIsPromotions] = useState(false);
    const [isProgress, setIsProgress] = useState(false);
    const [isCalender, setIsCalender] = useState(false);
    const [isOrderUpdates, setIsOrderUpdates] = useState(false);
    const [isGeneral, setIsGeneral] = useState(false);

    const toggleNotification = () => setIsNotification(isNotification => !isNotification);
    const togglePromotions = () => setIsPromotions(isPromotions => !isPromotions);
    const toggleProgress = () => setIsProgress(isProgress => !isProgress);
    const toggleCalender = () => setIsCalender(isCalender => !isCalender);
    const toggleOrderUpdates = () => setIsOrderUpdates(isOrderUpdates => !isOrderUpdates);
    const toggleGeneral = () => setIsGeneral(isGeneral => !isGeneral);


    const onUpdatePassword = () => {
        Alert.alert("Success", "Successfully password updated", [{ text: "OK" }])
    }

    return (
        <View style={globalStyles.cont}>
            <SafeAreaView style={globalStyles.droidSafeArea}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    overScrollMode="never"
                    style={{
                        width: responsiveWidth(90),
                        alignSelf: "center",
                        backgroundColor: "#FAF9F7",
                    }}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <Image
                                source={require("../../assets/left.png")}
                                style={styles.left}
                            />
                        </TouchableOpacity>
                        <Text style={styles.text}>Notification Settings</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 12 }}>
                        <Text
                            style={{
                                fontSize: height > 700 ? responsiveFontSize(2.4) : responsiveFontSize(2.5),
                                fontWeight: '700',
                                marginTop: height > 700 ? 12 : 10,
                                marginBottom: height > 700 ? 12 : 10,
                                color: ColorsApp.APP_PRIMARY
                            }}>Notifications</Text>
                        <Switch
                            style={styles.bigSwitchWeather}
                            trackColor={{ false: '#767577', true: ColorsApp.APP_PRIMARY }}
                            thumbColor={isNotification ? ColorsApp.APP_SECONDARY : '#f4f3f4'}
                            ios_backgroundColor="#E2E2E2"
                            onValueChange={toggleNotification}
                            value={isNotification}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 12 }}>
                        <Text
                            style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                marginTop: height > 700 ? 12 : 10,
                                marginBottom: height > 700 ? 12 : 10,
                                color: '#75695A'
                            }}>Promotions</Text>

                        <Switch
                            style={styles.switchWeather}
                            trackColor={{ false: '#767577', true: ColorsApp.APP_PRIMARY }}
                            thumbColor={isPromotions ? ColorsApp.APP_SECONDARY : '#f4f3f4'}
                            ios_backgroundColor="#E2E2E2"
                            onValueChange={togglePromotions}
                            value={isPromotions}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 12 }}>
                        <Text
                            style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                marginTop: height > 700 ? 12 : 10,
                                marginBottom: height > 700 ? 12 : 10,
                                color: '#75695A'
                            }}>Progress</Text>
                        <Switch
                            style={styles.switchWeather}
                            trackColor={{ false: '#767577', true: ColorsApp.APP_PRIMARY }}
                            thumbColor={isProgress ? ColorsApp.APP_SECONDARY : '#f4f3f4'}
                            ios_backgroundColor="#E2E2E2"
                            onValueChange={toggleProgress}
                            value={isProgress}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 12 }}>
                        <Text
                            style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                marginTop: height > 700 ? 12 : 10,
                                marginBottom: height > 700 ? 12 : 10,
                                color: '#75695A'
                            }}>Calender</Text>
                        <Switch
                            style={styles.switchWeather}
                            trackColor={{ false: '#767577', true: ColorsApp.APP_PRIMARY }}
                            thumbColor={isCalender ? ColorsApp.APP_SECONDARY : '#f4f3f4'}
                            ios_backgroundColor="#E2E2E2"
                            onValueChange={toggleCalender}
                            value={isCalender}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 12 }}>
                        <Text
                            style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                marginTop: height > 700 ? 12 : 10,
                                marginBottom: height > 700 ? 12 : 10,
                                color: '#75695A'
                            }}>Order updates</Text>
                        <Switch
                            style={styles.switchWeather}
                            trackColor={{ false: '#767577', true: ColorsApp.APP_PRIMARY }}
                            thumbColor={isOrderUpdates ? ColorsApp.APP_SECONDARY : '#f4f3f4'}
                            ios_backgroundColor="#E2E2E2"
                            onValueChange={toggleOrderUpdates}
                            value={isOrderUpdates}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 12 }}>
                        <Text
                            style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                marginTop: height > 700 ? 12 : 10,
                                marginBottom: height > 700 ? 12 : 10,
                                color: '#75695A'
                            }}>General</Text>
                        <Switch
                            style={styles.switchWeather}
                            trackColor={{ false: '#767577', true: ColorsApp.APP_PRIMARY }}
                            thumbColor={isGeneral ? ColorsApp.APP_SECONDARY : '#f4f3f4'}
                            ios_backgroundColor="#E2E2E2"
                            onValueChange={toggleGeneral}
                            value={isGeneral}
                        />
                    </View>


                </ScrollView>
            </SafeAreaView>

        </View >
    );
}

const styles = StyleSheet.create({
    left: {
        height: responsiveHeight(8),
        width: responsiveWidth(8),
        // resizeMode: "contain",
    },
    bigSwitchWeather: {
        transform: Platform.OS === 'ios' ? [{ scaleX: .82 }, { scaleY: .82 }] : [{ scaleX: 1 }, { scaleY: 1 }],
        alignSelf: 'center',
        position: 'absolute',
        top: 8,
        right: 12,
    },
    switchWeather: {
        transform: Platform.OS === 'ios' ? [{ scaleX: .76 }, { scaleY: .76 }] : [{ scaleX: 1 }, { scaleY: 1 }],
        alignSelf: 'center',
        position: 'absolute',
        top: 8,
        right: 12,
    },
    btnAdd: {
        width: height > 700 ? responsiveWidth(5) : responsiveWidth(4),
        height: height > 700 ? responsiveHeight(5) : responsiveHeight(4),
        marginLeft: 6
    },
    txtNotificationTitle: {
        paddingVertical: height > 700 ? responsiveHeight(.6) : responsiveHeight(.4),
        fontWeight: '700',
        fontSize: responsiveFontSize(2)
    },
    txtNotificationDescription: {
        paddingVertical: height > 700 ? responsiveHeight(.6) : responsiveHeight(.4),
        fontWeight: '500',
        fontSize: responsiveFontSize(1.8)
    },
    ivRight: {
        marginRight: 12,
        height: responsiveHeight(3.5),
        width: responsiveWidth(7),
        resizeMode: "contain"
    },
    container: {
        marginVertical: 12,
        borderColor: "#CBCBCB",
        borderWidth: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        // paddingVertical: 6,
        fontWeight: '400',
        fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(1.6),
        color: ColorsApp.APP_PRIMARY,

        borderRadius: 12
    },
    inputContainer: {
        flex: 1,
        marginVertical: 6,
        paddingVertical: 6,
        fontWeight: '400',
        fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(1.6),
        color: ColorsApp.APP_PRIMARY,
        marginRight: 4
        // borderRadius:40,
        // borderEndEndRadius: 40,
        // borderRadius: 12
    },

    btnContainer: {
        backgroundColor: "#41392F",
        width: "98%",
        height: 50,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: height > 700 ? responsiveHeight(4) : responsiveHeight(3),
        marginBottom: 22
    },
    header: {
        flexDirection: "row",
    },
    text: {
        flex: 1,
        fontSize: height > 700 ? responsiveFontSize(2.1) : responsiveFontSize(2.4),
        color: "#000000",
        marginRight: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    txtLink: {
        marginHorizontal: 'auto',
        marginVertical: 16
    },
    txtLinkLabel: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: '700'
    },
});
