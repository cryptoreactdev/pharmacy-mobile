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

export default function Notification(props) {
    const navigation = useNavigation();


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
                        <Text style={styles.text}>Notification</Text>
                    </View>

                    <View style={{ paddingHorizontal: height > 700 ? responsiveWidth(1) : responsiveWidth(2), paddingBottom: responsiveHeight(14) }}>
                        <Text
                            style={{
                                fontSize: responsiveFontSize(2.4),
                                fontWeight: '600',
                                marginTop: 12,
                                marginBottom: 16,
                                color: ColorsApp.APP_PRIMARY
                            }}>New Notification</Text>
                        <View>
                            <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("notificationSettings")}>
                                <View style={{ flex: 1, paddingVertical: height > 700 ? responsiveHeight(.8) : responsiveHeight(.6), paddingHorizontal: height > 700 ? responsiveWidth(4) : responsiveWidth(3) }}>
                                    <Text numberOfLines={2} style={styles.txtNotificationTitle}>
                                        New Notification 🔔
                                    </Text>
                                    <Text numberOfLines={4} style={styles.txtNotificationDescription}>
                                        Description
                                    </Text>

                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image
                                        source={require("../../assets/right.png")}
                                        style={styles.ivRight}
                                    />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cardContainer}>
                                <View style={{ flex: 1, paddingVertical: height > 700 ? responsiveHeight(.8) : responsiveHeight(.6), paddingHorizontal: height > 700 ? responsiveWidth(4) : responsiveWidth(3) }}>
                                    <Text numberOfLines={2} style={styles.txtNotificationTitle}>
                                        New Notification 🔔
                                    </Text>
                                    <Text numberOfLines={4} style={styles.txtNotificationDescription}>
                                        Description
                                    </Text>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image
                                        source={require("../../assets/right.png")}
                                        style={styles.ivRight}
                                    />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cardContainer}>
                                <View style={{ flex: 1, paddingVertical: height > 700 ? responsiveHeight(.8) : responsiveHeight(.6), paddingHorizontal: height > 700 ? responsiveWidth(4) : responsiveWidth(3) }}>
                                    <Text numberOfLines={2} style={styles.txtNotificationTitle}>
                                        New Notification 🔔
                                    </Text>
                                    <Text numberOfLines={4} style={styles.txtNotificationDescription}>
                                        Description
                                    </Text>

                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image
                                        source={require("../../assets/right.png")}
                                        style={styles.ivRight}
                                    />
                                </View>

                            </TouchableOpacity>
                        </View>

                        <Text
                            style={{
                                fontSize: responsiveFontSize(2.4),
                                fontWeight: '600',
                                marginTop: 22,
                                marginBottom: 16,
                                color: ColorsApp.APP_PRIMARY
                            }}>Old Notification</Text>

                        <View>
                            <TouchableOpacity style={styles.cardContainer}>
                                <View style={{ flex: 1, paddingVertical: height > 700 ? responsiveHeight(.8) : responsiveHeight(.6), paddingHorizontal: height > 700 ? responsiveWidth(4) : responsiveWidth(3) }}>
                                    <Text numberOfLines={2} style={styles.txtNotificationTitle}>
                                        New Notification 🔔
                                    </Text>
                                    <Text numberOfLines={4} style={styles.txtNotificationDescription}>
                                        Description
                                    </Text>

                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image
                                        source={require("../../assets/right.png")}
                                        style={styles.ivRight}
                                    />
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardContainer}>
                                <View style={{ flex: 1, paddingVertical: height > 700 ? responsiveHeight(.8) : responsiveHeight(.6), paddingHorizontal: height > 700 ? responsiveWidth(4) : responsiveWidth(3) }}>
                                    <Text numberOfLines={2} style={styles.txtNotificationTitle}>
                                        New Notification 🔔
                                    </Text>
                                    <Text numberOfLines={4} style={styles.txtNotificationDescription}>
                                        Description
                                    </Text>

                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image
                                        source={require("../../assets/right.png")}
                                        style={styles.ivRight}
                                    />
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardContainer}>
                                <View style={{ flex: 1, paddingVertical: height > 700 ? responsiveHeight(.8) : responsiveHeight(.6), paddingHorizontal: height > 700 ? responsiveWidth(4) : responsiveWidth(3) }}>
                                    <Text numberOfLines={2} style={styles.txtNotificationTitle}>
                                        New Notification 🔔
                                    </Text>
                                    <Text numberOfLines={4} style={styles.txtNotificationDescription}>
                                        Description
                                    </Text>

                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image
                                        source={require("../../assets/right.png")}
                                        style={styles.ivRight}
                                    />
                                </View>

                            </TouchableOpacity>
                        </View>


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
    cardContainer: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: .6,
        elevation: 1,
        marginVertical: 6,
        paddingVertical: height > 700 ? responsiveHeight(.4) : responsiveHeight(.4),
        backgroundColor: ColorsApp.WHITE, borderRadius: 12, flexDirection: 'row'
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
