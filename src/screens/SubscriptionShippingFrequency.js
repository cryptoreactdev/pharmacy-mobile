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
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import ColorsApp from "../config/ColorsApp";
const { width, height } = Dimensions.get("window");

export default function SubscriptionShippingFrequency(props) {
    const navigation = useNavigation();
    const [selectedDays, setSelectedDays] = useState([]);
    const [morningTime, setMorningTime] = useState("12:00 AM");
    const [eveningTime, setEveningTime] = useState("12:00 PM");
    const [selectedOption, setSelectedOption] = useState(null);

    const bottomSheetRef = React.useRef(null);

    const handleRadioSelect = (option) => {
        setSelectedOption(option);
        // if (option === "30days") {
        //     setFinalPrice(productInformation.price_30_days * 12);
        // } else if (option === "60days") {
        //     setFinalPrice(productInformation.price_60_days * 12);
        // } else if (option === "90days") {
        //     setFinalPrice(productInformation.price_90_days * 12);
        // } else if (option === "onetime") {
        //     setFinalPrice(productInformation.one_time_price * quantity);
        // }
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

    const onUpdateSubscription = () => {
        Alert.alert("Success", "Subscription Updated", [{ text: "OK" }])
    }

    const Row = ({ children }) => (
        <View style={styles.row}>{children}</View>
    )

    const Col = ({ numRows, children }) => {
        return (
            <View style={styles[`${numRows}col`]}>{children}</View>
        )
    }

    return (
        <View style={globalStyles.cont}>
            <SafeAreaView style={globalStyles.droidSafeArea}>
                <ScrollView style={{
                    width: responsiveWidth(90),
                    alignSelf: "center",
                    backgroundColor: "#FAF9F7",
                }}>
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
                        <Text style={styles.text}>Frequency</Text>
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
                    </View>

                    <TouchableOpacity style={[styles.cardContainer, { marginTop: 32, borderWidth: selectedOption === "30 Days" ? 2 : 1, borderColor: selectedOption === "30 Days" ? "#41392F" : "#F7F1E7" }]}
                        onPress={() => handleRadioSelect("30 Days")}>
                        <View style={styles.container}>
                            <View style={{ flexDirection: "row", marginTop: 12, paddingHorizontal: 12 }}>
                                <Image
                                    source={
                                        selectedOption === "30 Days"
                                            ? require("../../assets/radio-button-checked.png")
                                            : require("../../assets/radio-button-empty.png")
                                    }
                                    style={styles.radioBtn}
                                />
                                <Text style={[styles.rdBtnTextLabel, { flex: 1, }]}>Every 30 Days</Text>
                                <Text style={[styles.subscriptionPriceLabel, { color: '#000000' }]}>75$/mo</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 4, paddingHorizontal: 12, marginBottom: 12 }}>
                                <Text style={[styles.rdBtnSubTextLabel, { flex: 1, marginRight: 8 }]}>Get 30 use shipped every 30 days</Text>
                                <Text style={styles.subscriptionSubPriceLabel}>89$/mo</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.cardContainer, { marginTop: 18, borderWidth: selectedOption === "60 Days" ? 2 : 1, borderColor: selectedOption === "60 Days" ? "#41392F" : "#F7F1E7" }]}
                        onPress={() => handleRadioSelect("60 Days")}>
                        <View style={styles.container}>
                            <View style={{ justifyContent: 'space-between', width: '100%', backgroundColor: selectedOption === "60 Days" ? '#41392F' : '#F4E9DD', flexDirection: 'row', borderTopRightRadius: 8, borderTopLeftRadius: 8, paddingHorizontal: 12, paddingVertical: 8 }}>
                                <View style={{
                                    borderRadius: 12, backgroundColor: '#E8FFE4', paddingHorizontal: 10,
                                    paddingVertical: 4
                                }}>
                                    <Text
                                        style={{
                                            fontSize: height > 700 ? responsiveFontSize(1.7) : responsiveFontSize(1.8),
                                            color: '#00B505',
                                            fontWeight: '600'
                                        }}>Save $240 a year</Text>
                                </View>
                                <View
                                    style={{ flexDirection: "row", alignItems: "center", alignSelf: 'center' }}
                                >
                                    <Image
                                        source={
                                            selectedOption === "60 Days"
                                                ? require("../../assets/img_star_white.png")
                                                : require("../../assets/img_star.png")
                                        }
                                        style={[styles.starIcon]}
                                    />
                                    <Text style={{
                                        fontSize: responsiveFontSize(1.8),
                                        color: selectedOption === "60 Days" ? '#F4E9DD' : "#41392F",
                                        fontWeight: "700",
                                    }}>Most Popular</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 12, paddingHorizontal: 12 }}>
                                <Image
                                    source={
                                        selectedOption === "60 Days"
                                            ? require("../../assets/radio-button-checked.png")
                                            : require("../../assets/radio-button-empty.png")
                                    }
                                    style={styles.radioBtn}
                                />
                                <Text style={[styles.rdBtnTextLabel, { flex: 1 }]}>Every 60 Days</Text>
                                <Text style={[styles.subscriptionPriceLabel, { color: '#00B505' }]}>75$/mo</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 4, paddingHorizontal: 12, marginBottom: 12 }}>
                                <Text style={[styles.rdBtnSubTextLabel, { flex: 1, marginRight: 8 }]}>Get 60 use shipped every 60 days</Text>
                                <Text style={styles.subscriptionSubPriceLabel}>89$/mo</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cardContainer, { marginTop: 18, borderWidth: selectedOption === "90 Days" ? 2 : 1, borderColor: selectedOption === "90 Days" ? "#41392F" : "#F7F1E7" }]}
                        onPress={() => handleRadioSelect("90 Days")}>
                        <View style={styles.container}>
                            <View style={{ flexDirection: "row", marginTop: 12, paddingHorizontal: 12 }}>
                                <Image
                                    source={
                                        selectedOption === "90 Days"
                                            ? require("../../assets/radio-button-checked.png")
                                            : require("../../assets/radio-button-empty.png")
                                    }
                                    style={styles.radioBtn}
                                />
                                <Text style={[styles.rdBtnTextLabel, { flex: 1 }]}>Every 90 Days</Text>
                                <Text style={[styles.subscriptionPriceLabel, { color: '#000000' }]}>75$/mo</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 4, paddingHorizontal: 12, marginBottom: 12 }}>
                                <Text style={[styles.rdBtnSubTextLabel, { flex: 1, marginRight: 8 }]}>Get 90 use shipped every 90 days</Text>
                                <Text style={styles.subscriptionSubPriceLabel}>89$/mo</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnContainer} onPress={() => onUpdateSubscription()}>
                        <Text style={{
                            fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                            fontWeight: '700',
                            color: '#F7F1E7'
                        }}>Upgrade • </Text>
                        <Text style={{
                            fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                            fontWeight: '700',
                            color: '#F7F1E7'
                        }}>$75</Text>
                    </TouchableOpacity>

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

    btnContainer: {
        backgroundColor: "#41392F",
        width: "98%",
        height: 50,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: height > 700 ? responsiveHeight(10) : responsiveHeight(8),
        marginBottom: 22
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
    starIcon: {
        height: 14,
        width: 14,
        resizeMode: "contain",
        marginLeft: responsiveWidth(2),
        marginRight: responsiveWidth(1),
        color: "#41392F",
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

    cardContainer: {
        marginHorizontal: 2,
        // paddingHorizontal: 14,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        // padding: responsiveWidth(0.8),
        borderRadius: 10,
        // marginBottom: responsiveHeight(1),
        backgroundColor: ColorsApp.WHITE,
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.16,
        shadowRadius: 2,
        elevation: 1,
    },

    selectedCardContainer: {
        // marginHorizontal: 18,
        paddingHorizontal: 14,
        paddingVertical: 20,
        alignItems: "center",
        // flexDirection: "row",
        justifyContent: "space-between",
        padding: responsiveWidth(0.8),
        borderRadius: 10,
        marginHorizontal: 1,
        // marginBottom: responsiveHeight(1),
        backgroundColor: "#fff",
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },

    btnAdd: {
        width: 30,
        height: 30,
        marginRight: 12
        // /resizeMode: "contain",
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        // flexDirection: "row",
    },

    productDetailContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: responsiveWidth(2)
    },
    ivProduct: {
        height: responsiveHeight(8),
        width: responsiveWidth(16),
        resizeMode: "contain",
        marginRight: responsiveWidth(2),
        marginLeft: responsiveWidth(1),
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'white',
        backgroundColor: 'white'
    },
    txtProductName: {
        flex: 1,
        fontSize: responsiveFontSize(2),
        color: "black",
        fontWeight: "600",
        marginVertical: 2,
    },
    rdBtnTextLabel: {
        fontSize: responsiveFontSize(2),
        color: "black",
        fontWeight: "600",
        marginVertical: 2,
    },
    rdBtnSubTextLabel: {
        fontSize: responsiveFontSize(1.8),
        color: "#757575",
        fontWeight: "300",
        marginVertical: 2,
    },
    subscriptionPriceLabel: {
        fontSize: responsiveFontSize(2),
        fontWeight: "600",
        marginVertical: 2,
    },
    subscriptionSubPriceLabel: {
        fontSize: responsiveFontSize(1.8),
        color: "#757575",
        fontWeight: "300",
        marginVertical: 2,

    },
    txtQuantity: {
        alignItems: "center",
        flexDirection: "row",
    },
    radioBtn: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        // marginTop: responsiveHeight(1.4),
        alignSelf: "center",
        marginRight: responsiveWidth(2),
    },

});
