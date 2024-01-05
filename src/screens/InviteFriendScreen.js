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

export default function InviteFriendScreen(props) {
    const navigation = useNavigation();
    const bottomSheetRef = React.useRef(null);

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
                        <Text style={styles.text}>Invite a friends</Text>
                    </View>

                    <View style={{ paddingHorizontal: height > 700 ? responsiveWidth(1) : responsiveWidth(2) }}>
                        <View style={{
                            borderRadius: 12,
                            backgroundColor: ColorsApp.WHITE,
                            // paddingHorizontal: 1
                        }}>
                            <Image
                                source={require("../../assets/img_infra_invite_placeholder.png")}
                                style={{
                                    height: height > 700 ? responsiveHeight(20) : responsiveHeight(22),
                                    width: '100%',
                                    resizeMode: "contain",

                                }}
                            />
                        </View>

                        <Text style={{ width: '100%', fontWeight: '700', fontSize: height > 700 ? responsiveFontSize(3) : responsiveFontSize(3.2), marginTop: 12, color: ColorsApp.APP_PRIMARY }}>
                            Earning Infera credits, is one step away
                        </Text>
                        <Text style={{ width: '100%', fontWeight: '700', fontSize: height > 700 ? responsiveFontSize(2.3) : responsiveFontSize(2.6), marginTop: height > 700 ? responsiveHeight(2) : responsiveHeight(2.2), color: ColorsApp.APP_PRIMARY_LIGHT }}>
                            Share your code
                        </Text>
                        <Text style={{ width: '100%', fontWeight: '400', fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), marginTop: height > 700 ? responsiveHeight(.8) : responsiveHeight(.4), color: ColorsApp.APP_PRIMARY_LIGHT }}>
                            When your friend joins INFĒRA, they'll receive $30 in INFĒRA credits to use on their first order by applying your code during checkout.
                        </Text>
                        <Text style={{ width: '100%', fontWeight: '700', fontSize: height > 700 ? responsiveFontSize(2.3) : responsiveFontSize(2.6), marginTop: height > 700 ? responsiveHeight(2) : responsiveHeight(2.2), color: ColorsApp.APP_PRIMARY_LIGHT }}>
                            More info
                        </Text>
                        <Text style={{ width: '100%', fontWeight: '400', fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), marginTop: height > 700 ? responsiveHeight(.8) : responsiveHeight(.4), color: ColorsApp.APP_PRIMARY_LIGHT }}>
                            When your friend makes their initial purchase on the INFĒRA app, you'll receive $30 in INFĒRA credits that can be applied to any future purchase. There's no limit to the INFĒRA credits you can earn, and you can share your code  as many times as you want.                        </Text>

                        <TouchableOpacity style={[styles.btnContainer, { marginTop: height > 700 ? responsiveHeight(4) : responsiveHeight(3), backgroundColor: '#F4E9DD' }]} onPress={onShare}>
                            <Text style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                color: ColorsApp.APP_PRIMARY
                            }}>F3154d3</Text>
                            <Image
                                source={require("../../assets/ic_copy.png")}
                                style={{
                                    marginLeft: 8,
                                    height: height > 700 ? responsiveHeight(6) : responsiveHeight(6.2),
                                    width: height > 700 ? responsiveWidth(4) : responsiveWidth(4.2),
                                    resizeMode: "contain",

                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnContainer, { marginTop: height > 700 ? responsiveHeight(1.6) : responsiveHeight(1.8), marginBottom: height > 700 ? responsiveHeight(1.6) : responsiveHeight(4.8), backgroundColor: ColorsApp.APP_PRIMARY }]} onPress={onShare}>
                            <Text style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                color: '#F7F1E7'
                            }}>Share your code</Text>
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
