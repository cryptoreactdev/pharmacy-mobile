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

export default function ChangePassword(props) {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState(null);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
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

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

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
                        <Text style={styles.text}>Account details</Text>
                    </View>

                    <View style={{ paddingHorizontal: height > 700 ? responsiveWidth(1) : responsiveWidth(2) }}>
                        <Text
                            style={{
                                fontSize: height > 700 ? responsiveFontSize(3) : responsiveFontSize(3.2),
                                fontWeight: '700',
                                marginTop: 12,
                                marginBottom: 16,
                                color: ColorsApp.APP_PRIMARY
                            }}>Follow the instructions</Text>

                        <View style={styles.container}>
                            <TextInput
                                placeholder="Current password"
                                placeholderTextColor="#000"
                                secureTextEntry={!showPassword}
                                // onChangeText={(text) => setEmail(text.trim())}
                                mode="flat"
                                autoCapitalize="none"
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                style={styles.inputContainer}
                            />
                            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => toggleShowPassword()}>
                                <Image
                                    source={
                                        showPassword
                                            ? require("../../assets/passwordVisible.png")
                                            : require("../../assets/passwordNotVisible.png")}
                                    style={{
                                        marginRight: 8,
                                        height: height > 700 ? responsiveHeight(2.5) : responsiveHeight(2),
                                        width: height > 700 ? responsiveWidth(5) : responsiveWidth(4),
                                        resizeMode: "contain",
                                        alignSelf: 'center'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container}>
                            <TextInput
                                placeholder="New password"
                                placeholderTextColor="#000"
                                secureTextEntry={!showNewPassword}
                                // value={password} 
                                // onChangeText={(text) => setEmail(text.trim())}
                                mode="flat"
                                autoCapitalize="none"
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                style={styles.inputContainer}
                            />
                            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => toggleShowNewPassword()}>
                                <Image
                                    source={
                                        showNewPassword
                                            ? require("../../assets/passwordVisible.png")
                                            : require("../../assets/passwordNotVisible.png")}
                                    style={{
                                        marginRight: 8,
                                        height: height > 700 ? responsiveHeight(2.5) : responsiveHeight(2),
                                        width: height > 700 ? responsiveWidth(5) : responsiveWidth(4),
                                        resizeMode: "contain",
                                    }}
                                />
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={styles.btnContainer} onPress={() => onUpdatePassword()}>
                            <Text style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                color: '#F7F1E7'
                            }}>Change Password</Text>
                        </TouchableOpacity>
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
        fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.1),
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
