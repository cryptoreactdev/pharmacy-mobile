import React, { useState, useEffect } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    Dimensions,
    Alert
} from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Picker } from "@react-native-picker/picker";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SubscriptionSnoozeModal from "./SubscriptionSnoozeModal";
import SubscriptionSnoozSuccessModal from "./SubscriptionSnoozSuccessModal";
import { getProductById } from "../config/DataApp";
import RenderHtml from "react-native-render-html";
import DropdownComponent from "../components/DropDownComponent";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../stylesheet";
import ColorsApp from "../config/ColorsApp";
import { HTMLStyles } from "../config/HTMLStyles";
import { HTMLStylesDark } from "../config/HTMLStylesDark";
import HTMLView from "react-native-render-html";
import { ImageBackground } from "react-native-web";
const { width, height } = Dimensions.get("window");


const data = [
    { label: "30 days", value: "Every 30 days" },
    { label: "60 days", value: "Every 60 days" },
    { label: "90 days", value: "Every 90 days" },
    { label: "120 days", value: "Every 120 days" },
];
const ProductTipsDetails = (props) => {
    const { width } = useWindowDimensions();

    const [showmodal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [productDetail, setProductDetail] = useState({});
    const [selectedDuration, setSelectedDuration] = useState("30days");
    const [isShowTechnologyDescription, setShowTechnologyDescription] = useState(false);
    const [isShowKeyIngredientDescription, setShowKeyIngredientDescription] = useState(false);
    const [isShowHowItWorksDescription, setShowHowItWorkDescription] = useState(false);
    const [isShowHowToUseDescription, setShowHowToUseDescription] = useState(false);
    const source = props.route.params.source;
    const deviceInfo = props.route.params.device;

    const toggleShowTechnologyDesc = () => setShowTechnologyDescription(isShowTechnologyDescription => !isShowTechnologyDescription);
    const toggleShowKeyIngredientDesc = () => setShowKeyIngredientDescription(isShowKeyIngredientDescription => !isShowKeyIngredientDescription);
    const toggleShowHowItWorkDesc = () => setShowHowItWorkDescription(isShowHowItWorksDescription => !isShowHowItWorksDescription);
    const toggleShowHowToUseDesc = () => setShowHowToUseDescription(isShowHowToUseDescription => !isShowHowToUseDescription);
    // console.warn("props.route.params", props.route.params);

    const fetchProductData = (id) => {
        getProductById(id)
            .then((response) => {
                console.log("FETCH_PRODUCT_BY_ID : ", JSON.stringify(response[0]))
                mockDataFrom(response[0])
            })
            .catch((e) => {
                setProductDetail({});
            });
    };

    const mockDataFrom = (response) => {
        let modResponse = "";

        if (response != null) {
            if (props.route.params.source === 'skincare') {
                modResponse = {
                    ...response,
                    newDescription: "A revolutionary full-body LED device that offers a range of features to make at-home LED treatments more efficient and effective than ever before. With its patented foldable and portable design, it is easy to take with you wherever you go, allowing you to experience the benefits of LED light therapy no matter where you are. With 360 LED and infrared points, and a width of 23 inches, Cosmo is the most potent and efficient full-body LED device to be used on any area of the body",
                    keyIngredients: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    hiworks: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
                    howToUse: `Spa-Like Rejuvenation
                    Escape the need for costly treatments and immerse yourself in the opulence of spa-like rejuvenation within the tranquility of your own home. Now you can treat  and pamper your friends and family members with your own medical device.
                    Treatment Variety &amp; Customization
                    Tailor your skincare experience to your unique needs with our fully customizable device, allowing you to create personalized treatments and set session times that align perfectly with your schedule and preferences. From targeted rejuvenation to relaxation, empower yourself to curate a beauty regimen that suits your individual requirements, providing a truly personalized and indulgent skincare journey.`,
                    tips: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

                }
            } else {
                modResponse = {
                    ...response,
                    newDescription: "A revolutionary full-body LED device that offers a range of features to make at-home LED treatments more efficient and effective than ever before. With its patented foldable and portable design, it is easy to take with you wherever you go, allowing you to experience the benefits of LED light therapy no matter where you are. With 360 LED and infrared points, and a width of 23 inches, Cosmo is the most potent and efficient full-body LED device to be used on any area of the body",
                    howToUse: `Spa-Like Rejuvenation
                    Escape the need for costly treatments and immerse yourself in the opulence of spa-like rejuvenation within the tranquility of your own home. Now you can treat  and pamper your friends and family members with your own medical device.
                    Treatment Variety &amp; Customization
                    Tailor your skincare experience to your unique needs with our fully customizable device, allowing you to create personalized treatments and set session times that align perfectly with your schedule and preferences. From targeted rejuvenation to relaxation, empower yourself to curate a beauty regimen that suits your individual requirements, providing a truly personalized and indulgent skincare journey.`,
                    tips: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

                }
            }

        }

        setProductDetail(modResponse);
        console.log("FETCH_PRODUCT_BY_ID MOD : ", JSON.stringify(modResponse))

    }

    useEffect(() => {
        let id = props.route.params.device.product_id
            ? props.route.params.device.product_id
            : props.route.params.device.id;
        fetchProductData(id);
    }, [props.route.params.device.id, props.route.params.device.product_id]);

    const showModal = (val) => {
        if (val) {
            setShowSuccessModal(true);
        }
        setShowModal(!showmodal);
    };
    const handleDurationChange = (value) => {
        setSelectedDuration(value);
        // You can handle logic based on the selected duration if needed
    };
    const navigation = useNavigation();
    const onRemoveDevice = () => {
        Alert.alert("Success", "Successfully Removed Device", [{ text: "OK" }])
    }

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={globalStyles.droidSafeArea}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            // style={{ width: 20 }}
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >

                            <Image
                                source={require("../../assets/left.png")}
                                style={styles.left}
                            />
                        </TouchableOpacity>
                        <Text style={styles.text}>{props.route.params.source === 'skincare' ? "Tips" : productDetail.title}</Text>
                    </View>
                </SafeAreaView>

                <ScrollView style={{ flex: 1, paddingHorizontal: 18 }} overScrollMode="never" showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                        width: '100%',
                        flexDirection: 'row',
                    }}>
                        <View>
                            <Image source={{ uri: productDetail.image }} style={styles.productImage} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 16 }}>
                            {productDetail.volumn && productDetail.volumn.length > 0 && <Text style={styles.smallText}>{productDetail.volumn}</Text>}
                            {/* <HTMLView
                                source={{
                                    html: productDetail.description ?  productDetail.description : `<p></p>`,
                                }}
                                contentWidth={width}
                            // tagsStyles={theme === "light" ? HTMLStyles : HTMLStylesDark}
                            /> */}
                            {productDetail.title && productDetail.title.length > 0 && <Text numberOfLines={2} style={styles.productName}>{productDetail.title}</Text>}
                            {productDetail.title && productDetail.title.length > 0 && <Text numberOfLines={4} style={styles.productDetail}>{productDetail.newDescription}</Text>}
                        </View>
                    </View>

                    {props.route.params.source === 'device' && <View
                        style={{
                            flex: 1,
                            borderBottomWidth: 1,
                            borderBottomColor: "#F4E9DD",
                            paddingVertical: 20,
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                flex: 1,
                                justifyContent: "space-between",
                            }}>
                            <Text style={{ fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), color: ColorsApp.APP_PRIMARY, fontWeight: "bold" }}>
                                Routine
                            </Text>
                            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate("dailyroutine", { from: 'PRODUCT_DETAIL' })}>
                                <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), color: "#75695A" }}>Edit</Text>
                                <Image
                                    source={require("../../assets/right.png")}
                                    style={{
                                        height: height > 700 ? responsiveHeight(2.2) : responsiveHeight(3.2),
                                        width: height > 700 ? responsiveWidth(5.4) : responsiveWidth(6.4),
                                        resizeMode: "contain"
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>}
                    {props.route.params.source === 'device' && <View
                        style={{
                            flex: 1,
                            borderBottomWidth: 1,
                            borderBottomColor: "#F4E9DD",
                            paddingVertical: 20,
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                flex: 1,
                                justifyContent: "space-between",
                            }}>

                            <Text style={{ fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), color: ColorsApp.APP_PRIMARY, fontWeight: "bold" }}>
                                Warranty Claim
                            </Text>
                            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.navigation.navigate("warrantyClaim")}>
                                {/* <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), color: "#75695A" }}>Edit</Text> */}
                                <Image
                                    source={require("../../assets/right.png")}
                                    style={{
                                        height: height > 700 ? responsiveHeight(2.2) : responsiveHeight(3.2),
                                        width: height > 700 ? responsiveWidth(5.4) : responsiveWidth(6.4),
                                        resizeMode: "contain"
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>}
                    {props.route.params.source === 'device' && <Text style={{ fontSize: responsiveFontSize(2.6), color: ColorsApp.APP_PRIMARY, fontWeight: "bold", marginTop: 32 }}>
                        Product information
                    </Text>}

                    {productDetail.hasOwnProperty("technology") && productDetail.technology.length > 0 && <View>
                        <TouchableOpacity
                            onPress={() => toggleShowTechnologyDesc()}
                            activeOpacity={1}
                            style={{
                                flexDirection: "row",
                                flex: 1,
                                marginTop: 32,
                                justifyContent: "space-between",
                            }}>
                            <Text style={{ fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), color: '#75695A', fontWeight: "bold" }}>
                                Technology
                            </Text>
                            <TouchableOpacity style={{ flexDirection: "row" }} >
                                <Image
                                    source={require("../../assets/down.png")}
                                    style={{
                                        height: height > 700 ? responsiveHeight(2.4) : responsiveHeight(3.2),
                                        width: height > 700 ? responsiveWidth(5.8) : responsiveWidth(6.4),
                                        resizeMode: "contain"
                                    }}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        {isShowTechnologyDescription &&
                            <View style={{ marginTop: 8 }}>
                                <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), fontWeight: '400' }}>
                                    {productDetail.technology}
                                </Text>
                            </View>
                        }
                    </View>}

                    {productDetail.hasOwnProperty("keyIngredients") && productDetail.keyIngredients.length > 0 && <View>
                        <TouchableOpacity
                            onPress={() => toggleShowKeyIngredientDesc()}
                            activeOpacity={1}
                            style={{
                                flexDirection: "row",
                                flex: 1,
                                marginTop: 22,
                                justifyContent: "space-between",
                            }}>
                            <Text style={{ fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), color: '#75695A', fontWeight: "bold" }}>
                                Key ingredients
                            </Text>
                            <View style={{ flexDirection: "row" }} >
                                {/* <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), color: "#75695A" }}>Edit</Text> */}
                                <Image
                                    source={require("../../assets/down.png")}
                                    style={{
                                        height: height > 700 ? responsiveHeight(2.4) : responsiveHeight(3.2),
                                        width: height > 700 ? responsiveWidth(5.8) : responsiveWidth(6.4),
                                        resizeMode: "contain"
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        {isShowKeyIngredientDescription &&
                            <View style={{ marginTop: 8 }}>
                                <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), fontWeight: '400' }}>
                                    {productDetail.keyIngredients}
                                </Text>
                            </View>
                        }
                    </View>}

                    {productDetail.hasOwnProperty("hiworks") && productDetail.hiworks.length > 0 && <View>
                        <TouchableOpacity
                            onPress={() => toggleShowHowItWorkDesc()}
                            activeOpacity={1}
                            style={{
                                flexDirection: "row",
                                flex: 1,
                                marginTop: 22,
                                justifyContent: "space-between",
                            }}>
                            <Text style={{ fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), color: '#75695A', fontWeight: "bold" }}>
                                How it works
                            </Text>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                {/* <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), color: "#75695A" }}>Edit</Text> */}
                                <Image
                                    source={require("../../assets/down.png")}
                                    style={{
                                        height: height > 700 ? responsiveHeight(2.4) : responsiveHeight(3.2),
                                        width: height > 700 ? responsiveWidth(5.8) : responsiveWidth(6.4),
                                        resizeMode: "contain"
                                    }}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        {isShowHowItWorksDescription &&
                            <View style={{ marginTop: 8 }}>
                                <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), fontWeight: '400' }}>
                                    {productDetail.hiworks}
                                </Text>
                            </View>
                        }
                    </View>}

                    {productDetail.hasOwnProperty("howToUse") && productDetail.howToUse.length > 0 && <View>
                        <TouchableOpacity
                            onPress={() => toggleShowHowToUseDesc()}
                            activeOpacity={1}
                            style={{
                                flexDirection: "row",
                                flex: 1,
                                marginTop: 22,
                                justifyContent: "space-between",
                            }}>
                            <Text style={{ fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), color: '#75695A', fontWeight: "bold" }}>
                                How to use
                            </Text>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                {/* <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), color: "#75695A" }}>Edit</Text> */}
                                <Image
                                    source={require("../../assets/down.png")}
                                    style={{
                                        height: height > 700 ? responsiveHeight(2.4) : responsiveHeight(3.2),
                                        width: height > 700 ? responsiveWidth(5.8) : responsiveWidth(6.4),
                                        resizeMode: "contain"
                                    }}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        {isShowHowToUseDescription &&
                            <View style={{ marginTop: 8 }}>
                                <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), fontWeight: '400' }}>
                                    {productDetail.howToUse}
                                </Text>
                            </View>
                        }
                    </View>}

                    <View style={{ height: height > 700 ? responsiveHeight(38) : responsiveHeight(38), backgroundColor: ColorsApp.BLACK, borderRadius: 12, marginTop: 32, alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            source={require("../../assets/play.png")}
                            style={{
                                height: responsiveHeight(9),
                                width: responsiveWidth(18),
                            }}
                        />
                    </View>

                    <Text style={{ fontSize: height > 700 ? responsiveFontSize(2) : responsiveFontSize(2.2), color: ColorsApp.APP_PRIMARY, fontWeight: "bold", marginTop: 32 }}>
                        Tips
                    </Text>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2), fontWeight: '400', marginBottom: props.route.params.source === 'device' ? 0 : 42 }}>
                            {productDetail.tips}
                        </Text>
                    </View>


                    {props.route.params.source === 'device' && <TouchableOpacity onPress={() => onRemoveDevice()}>
                        <Text style={{ textDecorationLine: 'underline', alignSelf: 'center', marginVertical: 42, color: 'red', fontSize: height > 700 ? responsiveFontSize(1.8) : responsiveFontSize(2) }}>
                            Remove device
                        </Text>

                    </TouchableOpacity>}

                </ScrollView >
            </View >
            <SubscriptionSnoozeModal visibility={showmodal} onPress={showModal} />
            <SubscriptionSnoozSuccessModal
                visibility={showSuccessModal}
                onPress={() => setShowSuccessModal(false)}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAF9F7",
    },
    detailsContainer: {
        justifyContent: "center",
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    optionCard: {
        flex: 1,
        backgroundColor: "white",
        height: 110,
        // marginHorizontal: 10,
        borderRadius: 12,
        padding: 10,
    },
    optionContainer: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 25,
    },
    // dropdownPicker: {
    //   // height: 30,
    //   // width: 140,
    //   padding: 8,
    //   borderRadius: 12,
    //   borderWidth: 1,
    //   color: "#41392F",
    //   borderColor: "#CBCBCB",
    //   backgroundColor: "#FAF9F7",
    // },
    // pickerItem: {
    //   color: "#41392F",
    // },
    //  container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    dropdownContainer: {
        width: 250,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    dropdownPicker: {
        paddingVertical: 10,
        fontSize: 16,
    },
    header: {
        height: responsiveHeight(11),
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        marginHorizontal: 12
    },

    left: {
        height: 80,
        width: 70,
        // resizeMode: "contain",
    },

    text: {
        flex: 1,
        fontSize: responsiveFontSize(2.3),
        color: "#000000",
        fontWeight: "700",
        textAlign: 'center',
        marginRight: responsiveWidth(16),
    },

    productImage: {
        height: 125,
        width: 125,
        borderWidth: 1,
        borderColor: '#00000000',
        borderRadius: 12,
        backgroundColor: '#fff',
        resizeMode: 'cover'

    },

    row: {
        flexDirection: "row"
    },
    smallText: {
        color: '#000',
        fontSize: 12,
        fontWeight: '400'
    },
    productName: {
        color: '#41392F',
        fontSize: 18,
        fontWeight: '600',
    },
    productDetail: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '400',
        color: '#000'
    },
});

export default ProductTipsDetails;
