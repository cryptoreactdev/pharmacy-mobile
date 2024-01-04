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

export default function AddShippingAddress(props) {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const onUpdatePassword = () => {
        Alert.alert("Success", "Successfully Password Updated", [{ text: "OK" }])
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
                        <Text style={styles.text}>Add Shipping Address</Text>
                    </View>

                    <View style={{
                        height: '100%', paddingHorizontal: height > 700 ? responsiveWidth(1) : responsiveWidth(2)
                    }}>

                        <View style={styles.container}>
                            <TextInput
                                placeholder="First name"
                                placeholderTextColor="#000"
                                // onChangeText={(text) => setEmail(text.trim())}
                                mode="flat"
                                autoCapitalize="none"
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                style={styles.inputContainer}
                            />
                        </View>

                        <View style={styles.container}>
                            <TextInput
                                placeholder="Last name"
                                placeholderTextColor="#000"
                                // value={password} 
                                // onChangeText={(text) => setEmail(text.trim())}
                                mode="flat"
                                autoCapitalize="none"
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                style={styles.inputContainer}
                            />
                        </View>

                        <View style={styles.container}>
                            <TextInput
                                placeholder="Street Address"
                                placeholderTextColor="#000"
                                // value={password} 
                                // onChangeText={(text) => setEmail(text.trim())}
                                mode="flat"
                                autoCapitalize="none"
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                style={styles.inputContainer}
                            />
                        </View>

                        <View style={styles.container}>
                            <TextInput
                                placeholder="Address Line"
                                placeholderTextColor="#000"
                                // value={password} 
                                // onChangeText={(text) => setEmail(text.trim())}
                                mode="flat"
                                autoCapitalize="none"
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                style={styles.inputContainer}
                            />
                        </View>

                        <View style={styles.container}>
                            <TextInput
                                placeholder="City"
                                placeholderTextColor="#000"
                                // value={password} 
                                // onChangeText={(text) => setEmail(text.trim())}
                                mode="flat"
                                autoCapitalize="none"
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                style={styles.inputContainer}
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                flex: 1,
                                marginVertical: 6,
                                borderColor: "#CBCBCB",
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                flexDirection: 'row',
                                // paddingVertical: 6,
                                fontWeight: '400',
                                marginRight: 8,
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(1.6),
                                color: ColorsApp.APP_PRIMARY,

                                borderRadius: 12
                            }}>
                                <TextInput
                                    placeholder="State"
                                    placeholderTextColor="#000"
                                    // value={password} 
                                    // onChangeText={(text) => setEmail(text.trim())}
                                    mode="flat"
                                    autoCapitalize="none"
                                    underlineColor="transparent"
                                    activeUnderlineColor="transparent"
                                    style={styles.inputContainer}
                                />
                            </View>
                            <View style={{
                                flex: 1,
                                marginVertical: 6,
                                borderColor: "#CBCBCB",
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                flexDirection: 'row',
                                // paddingVertical: 6,
                                marginLeft: 8,
                                fontWeight: '400',
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(1.6),
                                color: ColorsApp.APP_PRIMARY,
                                borderRadius: 12
                            }}>
                                <TextInput
                                    placeholder="Zip Code"
                                    placeholderTextColor="#000"
                                    // value={password} 
                                    // onChangeText={(text) => setEmail(text.trim())}
                                    mode="flat"
                                    autoCapitalize="none"
                                    underlineColor="transparent"
                                    activeUnderlineColor="transparent"
                                    style={styles.inputContainer}
                                />
                            </View>
                        </View>

                        <View style={styles.container}>
                            <TextInput
                                placeholder="Phone Number"
                                placeholderTextColor="#000"
                                // value={password} 
                                // onChangeText={(text) => setEmail(text.trim())}
                                mode="flat"
                                autoCapitalize="none"
                                underlineColor="transparent"
                                activeUnderlineColor="transparent"
                                style={styles.inputContainer}
                            />
                        </View>


                        <TouchableOpacity style={styles.btnContainer} onPress={() => onUpdatePassword()}>
                            <Text style={{
                                fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                                fontWeight: '700',
                                color: '#F7F1E7'
                            }}>Save Info</Text>
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
        marginVertical: 6,
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
        marginTop: height > 700 ? responsiveHeight(18) : responsiveHeight(12),
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
