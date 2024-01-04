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
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
const { width, height } = Dimensions.get("window");

export default function MyInformation(props) {
    const navigation = useNavigation();
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

    const onUpdateSubscription = () => {
        Alert.alert("Success", "Subscription Updated", [{ text: "OK" }])
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
                        <Text style={styles.text}>My Information</Text>
                    </View>

                    <View style={{ paddingHorizontal: height > 700 ? responsiveWidth(1) : responsiveWidth(2) }}>
                        <Text
                            style={{
                                fontSize: height > 700 ? responsiveFontSize(3) : responsiveFontSize(2),
                                fontWeight: '700',
                                marginTop: 12,
                                marginBottom: 22,
                                color: ColorsApp.APP_PRIMARY
                            }}> Edit your account</Text>

                        <TextInput
                            placeholder="First name"
                            // onChangeText={(text) => setEmail(text.trim())}
                            mode="flat"
                            autoCapitalize="none"
                            underlineColor="transparent"
                            activeUnderlineColor="transparent"
                            style={styles.inputContainer}
                        />

                        <TextInput
                            placeholder="Last name"
                            // onChangeText={(text) => setEmail(text.trim())}
                            mode="flat"
                            autoCapitalize="none"
                            underlineColor="transparent"
                            activeUnderlineColor="transparent"
                            style={styles.inputContainer}
                        />

                        <TextInput
                            placeholder="Email"
                            // onChangeText={(text) => setEmail(text.trim())}
                            mode="flat"
                            autoCapitalize="none"
                            underlineColor="transparent"
                            activeUnderlineColor="transparent"
                            style={styles.inputContainer}
                        />

                        <Text
                            style={{
                                fontSize: height > 700 ? responsiveFontSize(3) : responsiveFontSize(2),
                                fontWeight: '700',
                                marginTop: 32,
                                marginBottom: 22,
                                color: ColorsApp.APP_PRIMARY
                            }}> Shipping Address</Text>

                        <View
                            style={{
                                borderRadius: 12,
                                backgroundColor: ColorsApp.WHITE,
                                paddingHorizontal: 12,
                                paddingVertical: 12,
                                shadowColor: '#000000',
                                shadowOffset: {
                                    width: 1,
                                    height: 0,
                                },
                                shadowOpacity: 0.08,
                                shadowRadius: 1,
                                elevation: 1,
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require("../../assets/shipping-icon.png")}
                                    style={{
                                        width: height > 700 ? responsiveWidth(5) : responsiveWidth(5),
                                        height: height > 700 ? responsiveHeight(3) : responsiveHeight(3)
                                    }}
                                />
                                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8, paddingHorizontal: 6, paddingVertical: 4 }}>
                                    <Text style={{ color: ColorsApp.BLACK, fontWeight: '700', fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(1.8) }}>2120 NE 1236 ST, FLoor 6,Apt 9</Text>
                                    <Text style={{ color: ColorsApp.BLACK, marginTop: 4, fontWeight: '400', fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(1.6) }}>2120 NE 1236 ST, FLoor 6,Apt 9</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 22, marginBottom: 6, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 12, borderColor: ColorsApp.BLACK, borderWidth: 1, paddingVertical: 6, marginRight: 6 }}>
                                    <Text style={{ fontWeight: 700, fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(1.6) }}>
                                        Edit
                                    </Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 12, borderColor: ColorsApp.BLACK, borderWidth: 1, paddingVertical: 6, marginLeft: 6 }}>
                                    <Text style={{ fontWeight: 700 }}>
                                        Delete
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.btnContainer} onPress={() => props.navigation.navigate('addShippingAddress')}>
                            <Text style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(1.8),
                                fontWeight: '700',
                                color: '#F7F1E7'
                            }}>Add Shipping Address </Text>
                            <Image
                                source={require("../../assets/img_new_add.png")}
                                style={styles.btnAdd} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.txtLink}>
                            <Text style={[styles.txtLinkLabel, { fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(1.8), color: ColorsApp.APP_PRIMARY }]} onPress={() => { props.navigation.navigate("changePassword") }}>Change Password</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                            <TouchableOpacity style={[styles.txtLink, { marginRight: 14, alignItems: 'center', justifyContent: 'center' }]}>
                                <Text style={[styles.txtLinkLabel, { fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(1.5), color: ColorsApp.LIGHT_RED }]}>Log out</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.txtLink, { marginLeft: 14, alignItems: 'center', justifyContent: 'center' }]}>
                                <Text style={[styles.txtLinkLabel, { fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(1.5), color: ColorsApp.LIGHT_RED }]}>Delete account</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 8, marginBottom: 42 }}>
                            <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(1.5), color: ColorsApp.APP_PRIMARY, fontWeight: '300' }}>App Version </Text>
                            <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(1.5), color: ColorsApp.APP_PRIMARY, fontWeight: '300' }}>3.106 (20232317)</Text>
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
    inputContainer: {
        marginVertical: 6,
        borderColor: "#CBCBCB",
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontWeight: '600',
        fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(1.6),
        color: ColorsApp.APP_PRIMARY,
        // borderRadius:40,
        // borderEndEndRadius: 40,
        borderRadius: 12
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
