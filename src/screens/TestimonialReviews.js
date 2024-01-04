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
import ColorsApp from "../config/ColorsApp";
const { width, height } = Dimensions.get("window");

export default function TestimonialReviews(props) {
    return (
        <View style={{ backgroundColor: '#FAF9F7', }}>
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
                        <Text style={styles.txtHeader}>Testimonial & Reviews</Text>
                    </View>
                    <View style={styles.smallcont}>
                        <Text style={{ flex: 1, fontWeight: '700', fontSize: responsiveFontSize(2.6), }}>Popular Reads</Text>
                        <Text style={{ color: '#75695A', fontSize: responsiveFontSize(1.8) }}>See All</Text>
                        <Image
                            source={require("../../assets/right.png")}
                            style={styles.btnOpen} />
                    </View>
                    <ScrollView horizontal={true} style={styles.cont3}>
                        {/* {blogPosts.map((post) => ( */}
                        <TouchableOpacity
                        >
                            <View>
                                <Image source={require("../../assets/pic_sample_two.png")} style={styles.imgg} />
                                <Text numberOfLines={2} style={styles.whitetext}>Anti Aging Anti Aging</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        >
                            <View>
                                <Image source={require("../../assets/pic_sample_two.png")} style={styles.imgg} />
                                <Text numberOfLines={2} style={styles.whitetext}>Anti Aging Anti Aging</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        >
                            <View>
                                <Image source={require("../../assets/pic_sample_two.png")} style={styles.imgg} />
                                <Text numberOfLines={2} style={styles.whitetext}>Anti Aging Anti Aging</Text>
                            </View>
                        </TouchableOpacity>
                        {/* ))} */}
                    </ScrollView>

                    <TouchableOpacity style={{
                        backgroundColor: "#41392F",
                        width: "90%",
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: 'center',
                        borderRadius: 10,
                    }} onPress={() => onUpdatePassword()}>
                        <Text style={{
                            fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2),
                            fontWeight: '700',
                            color: '#F7F1E7'
                        }}>Upload your testimonial</Text>
                    </TouchableOpacity>

                    <Text style={{ flex: 1, fontWeight: '700', fontSize: responsiveFontSize(2.6), paddingHorizontal: 22, marginTop: 22 }}>Reviews</Text>

                    <View style={{ marginTop: responsiveHeight(2), backgroundColor: ColorsApp.WHITE, borderRadius: 12, marginHorizontal: 22 }}>
                        <Text style={{ flex: 1, fontWeight: '700', fontSize: responsiveFontSize(2.6), paddingHorizontal: 22, marginTop: 22 }}>Google Review</Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 22, marginTop: 6, marginBottom: 22 }}>
                            <Text style={{ fontSize: responsiveFontSize(2.1), fontWeight: "700", color: '#000000', marginRight: 8 }}>4.8</Text>

                            <Image source={require("../../assets/ic_rating_star.png")} style={{
                                marginRight: 4,
                                height: responsiveHeight(2),
                                width: responsiveWidth(4),
                            }} />
                            <Image source={require("../../assets/ic_rating_star.png")} style={{
                                marginRight: 4,
                                height: responsiveHeight(2),
                                width: responsiveWidth(4),
                            }} />
                            <Image source={require("../../assets/ic_rating_star.png")} style={{
                                marginRight: 4,
                                height: responsiveHeight(2),
                                width: responsiveWidth(4),
                            }} />
                            <Image source={require("../../assets/ic_rating_star.png")} style={{
                                marginRight: 4,
                                height: responsiveHeight(2),
                                width: responsiveWidth(4),
                            }} />
                            <Image source={require("../../assets/ic_rating_star.png")} style={{
                                marginRight: 4,
                                height: responsiveHeight(2),
                                width: responsiveWidth(4),
                            }} />
                        </View>

                    </View>

                    <View style={{ marginTop: responsiveHeight(1), backgroundColor: ColorsApp.WHITE, borderRadius: 12, marginHorizontal: 22 }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 22, marginTop: 6, marginBottom: 22 }}>
                            <Image source={require("../../assets/male.jpg")} style={{
                                marginRight: 4,
                                height: responsiveHeight(8),
                                width: height > 700 ? responsiveWidth(18) : responsiveWidth(15),
                                borderRadius: responsiveWidth(12)
                            }} />
                            <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 14, marginTop: 6, marginBottom: 22 }}>
                                <Text style={{ color: ColorsApp.APP_PRIMARY, fontWeight: '700', fontSize: responsiveFontSize(2) }}>
                                    User Name
                                </Text>

                                <Text numberOfLines={10} style={{ color: ColorsApp.APP_PRIMARY, fontWeight: '400', fontSize: responsiveFontSize(1.7) }}>
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ marginTop: responsiveHeight(1), backgroundColor: ColorsApp.WHITE, borderRadius: 12, marginHorizontal: 22 }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 22, marginTop: 6, marginBottom: 22 }}>
                            <Image source={require("../../assets/male.jpg")} style={{
                                marginRight: 4,
                                height: responsiveHeight(8),
                                width: height > 700 ? responsiveWidth(18) : responsiveWidth(15),
                                borderRadius: responsiveWidth(12)
                            }} />
                            <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 14, marginTop: 6, marginBottom: 22 }}>
                                <Text style={{ color: ColorsApp.APP_PRIMARY, fontWeight: '700', fontSize: responsiveFontSize(2) }}>
                                    User Name
                                </Text>

                                <Text numberOfLines={10} style={{ color: ColorsApp.APP_PRIMARY, fontWeight: '400', fontSize: responsiveFontSize(1.7) }}>
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </Text>

                            </View>

                        </View>

                    </View>

                    <View style={{ marginTop: responsiveHeight(1), backgroundColor: ColorsApp.WHITE, borderRadius: 12, marginHorizontal: 22 }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 22, marginTop: 6, marginBottom: 22 }}>
                            <Image source={require("../../assets/male.jpg")} style={{
                                marginRight: 4,
                                height: responsiveHeight(8),
                                width: height > 700 ? responsiveWidth(18) : responsiveWidth(15),
                                borderRadius: responsiveWidth(12)
                            }} />
                            <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 14, marginTop: 6, marginBottom: 22 }}>
                                <Text style={{ color: ColorsApp.APP_PRIMARY, fontWeight: '700', fontSize: responsiveFontSize(2) }}>
                                    User Name
                                </Text>

                                <Text numberOfLines={10} style={{ color: ColorsApp.APP_PRIMARY, fontWeight: '400', fontSize: responsiveFontSize(1.7) }}>
                                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </Text>

                            </View>

                        </View>

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
    smallcont: {
        width: '100%',
        paddingHorizontal: 22,
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14

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
    imgg: {
        height: height > 700 ? responsiveHeight(16) : responsiveHeight(18),
        width: responsiveWidth(26),
        alignSelf: "center",
        marginBottom: responsiveHeight(1),
        alignSelf: "center",
        borderRadius: 20,
        marginRight: responsiveWidth(3),
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
        height: responsiveHeight(18),
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
    whitetext: {
        fontSize: responsiveFontSize(2),
        color: "#fff",
        fontWeight: "600",
        alignSelf: "center",
        marginBottom: responsiveHeight(10),
        position: "absolute",
        bottom: height > 700 ? -68 : -54,

        paddingHorizontal: 12
    },
    cont3: {
        flexDirection: "row",
        marginBottom: responsiveHeight(2),
        paddingHorizontal: 22
    },

    btnOpen: {
        width: 22,
        height: 22,
        // /resizeMode: "contain",
    },
});
