import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import React from "react";
import { globalStyles } from "../../stylesheet";
const { width, height } = Dimensions.get("window");


export default function ReminderCardContent(props) {
    const { item } = props;
    return (
        <>
            <View style={{
                marginHorizontal: 12,
                marginTop: 12,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: responsiveWidth(0.8),
                borderRadius: 10,
                // marginBottom: responsiveHeight(1),
                backgroundColor: "#fff",
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.2,
                shadowRadius: 24,
                elevation: 15,
            }}>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: 'center',
                    flexDirection: "row",
                }}>
                    <Image source={require("../../../assets/soap.png")} style={{
                        height: responsiveHeight(8),
                        width: responsiveWidth(16),
                        resizeMode: "contain",
                        marginRight: responsiveWidth(2),
                        borderWidth: 1,
                        borderRadius: 6,
                        borderColor: 'white'
                    }} />
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 12 }}>
                        <Text numberOfLines={2} style={{
                            fontSize: responsiveFontSize(2.3),
                            color: "black",
                            fontWeight: "bold",
                            marginVertical: 2,
                        }}>Text one line</Text>
                        <Text style={{
                            alignItems: "center",
                            flexDirection: "row",
                        }}>50ml/1 fl.oz</Text>
                    </View>
                </View>
            </View>

            <View style={{
                marginHorizontal: 12,
                marginTop: 12,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: responsiveWidth(0.8),
                borderRadius: 10,
                // marginBottom: responsiveHeight(1),
                backgroundColor: "#fff",
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.2,
                shadowRadius: 24,
                elevation: 15,
            }}>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: 'center',
                    flexDirection: "row",
                }}>
                    <Image source={require("../../../assets/soap.png")} style={{
                        height: responsiveHeight(8),
                        width: responsiveWidth(16),
                        resizeMode: "contain",
                        marginRight: responsiveWidth(2),
                        borderWidth: 1,
                        borderRadius: 6,
                        borderColor: 'white'
                    }} />
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 12 }}>
                        <Text numberOfLines={2} style={{
                            fontSize: responsiveFontSize(2.3),
                            color: "black",
                            fontWeight: "bold",
                            marginVertical: 2,
                        }}>Text one line</Text>
                        <Text style={{
                            alignItems: "center",
                            flexDirection: "row",
                        }}>50ml/1 fl.oz</Text>
                    </View>
                </View>
            </View>

            <View style={{
                marginHorizontal: 12,
                marginTop: 12,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: responsiveWidth(0.8),
                borderRadius: 10,
                // marginBottom: responsiveHeight(1),
                backgroundColor: "#fff",
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.2,
                shadowRadius: 24,
                elevation: 15,
            }}>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: 'center',
                    flexDirection: "row",
                }}>
                    <Image source={require("../../../assets/soap.png")} style={{
                        height: responsiveHeight(8),
                        width: responsiveWidth(16),
                        resizeMode: "contain",
                        marginRight: responsiveWidth(2),
                        borderWidth: 1,
                        borderRadius: 6,
                        borderColor: 'white'
                    }} />
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 12 }}>
                        <Text numberOfLines={2} style={{
                            fontSize: responsiveFontSize(2.3),
                            color: "black",
                            fontWeight: "bold",
                            marginVertical: 2,
                        }}>Text one line</Text>
                        <Text style={{
                            alignItems: "center",
                            flexDirection: "row",
                        }}>50ml/1 fl.oz</Text>
                    </View>
                </View>
            </View>
        </>
    );
}