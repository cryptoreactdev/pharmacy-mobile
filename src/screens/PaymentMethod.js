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

export default function PaymentMethod(props) {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState(null);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const bottomSheetRef = React.useRef(null);


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
                <View>
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
                            <Text style={styles.text}>Payment Method</Text>
                        </View>

                        <View style={{ paddingHorizontal: height > 700 ? responsiveWidth(1) : responsiveWidth(2) }}>
                            <Text
                                style={{
                                    fontSize: height > 700 ? responsiveFontSize(2.8) : responsiveFontSize(3),
                                    fontWeight: '700',
                                    marginTop: 12,
                                    marginBottom: 16,
                                    color: ColorsApp.APP_PRIMARY
                                }}>Edit your payment method</Text>

                            <View
                                style={{
                                    backgroundColor: ColorsApp.WHITE,
                                    borderRadius: 8,
                                    // marginHorizontal: 12,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 16,
                                    shadowColor: '#000000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 0,
                                    },
                                    shadowOpacity: 0.3,
                                    shadowRadius: .6,
                                    elevation: .6,
                                }}>
                                <Image
                                    source={require("../../assets/credit-card.png")}
                                    style={styles.ivCreditCard}
                                />
                                <View style={{ flexDirection: 'column', marginHorizontal: 12, marginVertical: 12 }}>
                                    <Text style={{ fontSize: height > 700 ? responsiveFontSize(2.2) : responsiveFontSize(2.3), marginVertical: height > 700 ? responsiveHeight(.4) : responsiveHeight(.3), fontWeight: '700' }}>
                                        *****4123
                                    </Text>
                                    <Text style={{ fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), marginVertical: height > 700 ? responsiveHeight(.4) : responsiveHeight(.3) }}>
                                        Gur Barack
                                    </Text>
                                </View>
                            </View>


                            {/* <TouchableOpacity style={styles.btnContainer} onPress={() => onUpdatePassword()}>
                            <Text style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                color: '#F7F1E7'
                            }}>Change Password</Text>
                        </TouchableOpacity> */}
                        </View>

                    </ScrollView>
                    <TouchableOpacity style={styles.btnContainer} onPress={() => props.navigation.navigate('addShippingAddress')}>
                        <Text style={{
                            fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                            fontWeight: '700',
                            color: ColorsApp.APP_PRIMARY
                        }}>Add payment method </Text>
                        <Text style={{
                            fontSize: height > 700 ? responsiveFontSize(4) : responsiveFontSize(4.2),
                            fontWeight: '300',
                            color: ColorsApp.APP_PRIMARY,
                            marginBottom: 6, marginLeft: 8
                        }}>+ </Text>
                        {/* <Image
                            source={require("../../assets/img_new_add.png")}
                            style={styles.btnAdd} /> */}
                    </TouchableOpacity>
                </View>



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
    ivCreditCard: {
        height: responsiveHeight(3),
        width: responsiveWidth(6),
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
        backgroundColor: "#F4E9DD",
        width: "100%",
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
