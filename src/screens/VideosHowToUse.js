import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    ImageBackground
} from "react-native";
import React from "react";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../stylesheet";
const { width, height } = Dimensions.get("window");

export default function VideosHowToUse(props) {
    return (
        <View>
            <SafeAreaView style={globalStyles.droidSafeArea}>
                <ScrollView
                    style={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    overScrollMode="never">
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={{ alignSelf: 'flex-end' }}
                            onPress={() => {
                                props.navigation.goBack();
                            }}
                        >
                            <Image
                                source={require("../../assets/left.png")}
                                style={styles.left}
                            />
                        </TouchableOpacity>
                        <Text style={styles.txtHeader}>Videos & How to use</Text>
                    </View>
                    <Text style={{ width: '100%', paddingHorizontal: 26, fontWeight: '700', fontSize: responsiveFontSize(2.6), marginBottom: 12, marginTop: 24 }}>Product Videos</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 12 }}>
                        <TouchableOpacity style={styles.cardContainer}>
                            <Image
                                source={require("../../assets/pic_sample_two.png")}
                                style={styles.discover}
                            />
                            <LinearGradient
                                colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.6)"]}
                                style={styles.titleContainer}
                            >
                                <Text style={styles.blogTitle}>Product name</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardContainer}>
                            <Image
                                source={require("../../assets/pic_sample_two.png")}
                                style={styles.discover}
                            />
                            {/* <Image
                                source={require("../../assets/play.png")}
                                style={{
                                    height: responsiveHeight(9),
                                    width: responsiveWidth(18),
                                    marginTop: -112
                                }}
                            /> */}
                            <LinearGradient
                                colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.6)"]}
                                style={styles.titleContainer}
                            >
                                <Text style={styles.blogTitle}>Product name</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ width: '100%', paddingHorizontal: 26, fontWeight: '700', fontSize: responsiveFontSize(2.6), marginBottom: 12 }}>How to use</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 12 }}>
                        <TouchableOpacity style={styles.cardContainer}>
                            <Image
                                source={require("../../assets/pic_sample_two.png")}
                                style={styles.discover}
                            />


                            <LinearGradient
                                colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.6)"]}
                                style={styles.titleContainer}
                            >
                                <Text style={styles.blogTitle}>Product name</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cardContainer}>
                            <Image
                                source={require("../../assets/pic_sample_two.png")}
                                style={styles.discover}
                            />

                            <LinearGradient
                                colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.6)"]}
                                style={styles.titleContainer}
                            >
                                <Text style={styles.blogTitle}>Product name</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </View >

    );
}

const styles = StyleSheet.create({
    // header: {
    //     height: responsiveHeight(20),
    //     width: responsiveWidth(100),
    //     flexDirection: "row",
    //     paddingHorizontal: 18,
    //     justifyContent: "space-between",
    //     alignItems: "center",
    // },
    txtHeader: {
        flex: 1,
        fontSize: height > 700 ? responsiveFontSize(2.1) : responsiveFontSize(2.4),
        color: "#000000",
        marginRight: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: responsiveWidth(4),
    },
    scrollContainer: {
        backgroundColor: '#FAF9F7',
        marginBottom: responsiveHeight(2),
    },

    img: {
        height: responsiveHeight(8),
        width: responsiveWidth(8),
        // resizeMode: "contain",
    },
    left: {
        height: responsiveHeight(8),
        width: responsiveWidth(8),
    },
    img2: {
        height: responsiveHeight(8),
        width: responsiveWidth(8),
        resizeMode: "contain",
        tintColor: "#fff",
    },
    text: {
        fontSize: responsiveFontSize(2.3),
        color: "#000000",
        fontWeight: "700",
        // marginRight: responsiveWidth(45),
    },
    cardContainer: {
        marginBottom: responsiveHeight(5),
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: responsiveWidth(3),
    },
    discover: {
        height: height > 700 ? responsiveHeight(18) : responsiveHeight(20),
        width: responsiveWidth(40),
        borderRadius: 10,
        // resizeMode: "contain",
        // borderRadius: 10,
    },
    titleContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: responsiveWidth(40),
    },
    blogTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    imgscont: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingHorizontal: responsiveWidth(2),
    },
});
