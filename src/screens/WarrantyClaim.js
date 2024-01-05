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
    Share,
    TextInput,
    Pressable
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
import DropdownComponent from "../components/DropDownComponent";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
const { width, height } = Dimensions.get("window");

export default function WarrantyClaim(props) {
    const navigation = useNavigation();
    const bottomSheetRef = React.useRef(null);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: "Every 30 days", value: "30days" },
        { label: "Every 60 days", value: "60days" },
        { label: "Every 90 days", value: "90days" },
        { label: "Every 120 days", value: "120days" },
    ];

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    `Hi, I'm inviting you to join so we'll both get reward! SIgn up using my code F3154d3 here.`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    const openBottomSheet = () => {
        bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet to a snap point to change the height.
    };

    const closeBottomSheet = () => {
        bottomSheetRef.current?.close();
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
                        <Text style={styles.text}>Warranty Claim</Text>
                    </View>

                    <View style={{ paddingHorizontal: height > 700 ? responsiveWidth(1) : responsiveWidth(2) }}>
                        <Text style={{ fontSize: height > 700 ? responsiveFontSize(2.8) : responsiveFontSize(3.2), fontWeight: '700', color: ColorsApp.APP_PRIMARY }}>
                            How can we help you?
                        </Text>

                        <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.9) : responsiveFontSize(2.1), fontWeight: '400', color: ColorsApp.APP_PRIMARY, marginTop: 4 }}>
                            Please submit your warranty claim, and a customer service representative will contact you within 48 hours
                        </Text>
                        {/* <View style={{ flex: 1, flexDirection: 'row', marginTop: responsiveHeight(2), }}>
                            <View style={{ flex: 1 }}>
                                <DropdownComponent
                                    data={data}
                                    value={value}
                                    setValue={setValue}
                                    isFocus={isFocus}
                                    setIsFocus={setIsFocus}
                                />
                            </View>
                            <View>
                                <Pressable
                                    style={styles.crossText}
                                    onPress={() => {
                                        // dispatch(removeFromCart(item.productInformation.id));
                                    }}
                                >
                                    <Image
                                        source={require("../../assets/img_trash.png")}
                                        style={styles.btnDeleteImage}
                                    />
                                </Pressable>
                            </View>
                        </View> */}
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

    btnContainer: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        borderRadius: 10,
        // marginTop: height > 700 ? responsiveHeight(4) : responsiveHeight(3),
        // marginBottom: 22
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
});
