import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Dimensions
} from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
import { globalStyles } from "../stylesheet";
import AllProductCard from "../components/homescreencards/allProductCard";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function AddSchedule(props) {
    const { route } = props;
    console.log("route", route);
    const { params } = route;
    const [selectedType, setSelectedType] = useState([]);
    const productType = ['Skin care', 'Devices', 'Accessories'];


    const navigation = useNavigation();

    const dummyProductData = [
        {
            productName: "Estrella Clay Cream",
            productImage: "Image"
        },
        {
            productName: "Full body",
            productImage: "Image"
        },
        {
            productName: "Vitamin C Serum",
            productImage: "Image"
        },
    ]

    const handleTypeClick = (type) => {
        if (selectedType.includes(type)) {
            // If selected, remove it
            setSelectedType((prevSelectedTypes) =>
                prevSelectedTypes.filter((selectedType) => selectedType !== type)
            );
        } else {
            // If not selected, add it
            setSelectedType((prevSelectedTypes) => [...prevSelectedTypes, type]);
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={globalStyles.droidSafeArea}>
                <View style={{ height: '100%' }}>
                    <ScrollView
                        style={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}
                        overScrollMode="never">
                        <View>
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
                                <Text style={styles.txtHeader}>Add To My Routine</Text>
                            </View>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                                <View style={styles.typeContainer}>
                                    {productType?.map((type, index) => (
                                        <TouchableOpacity
                                            style={selectedType.includes(type) ? styles.selectedViewContainer : styles.unselectedViewContainer}
                                            onPress={() => handleTypeClick(type)}
                                        >
                                            <Text style={globalStyles.txtType}>{type}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </ScrollView>

                            <View style={{ paddingHorizontal: 18, marginTop: 12 }}>
                                <Text style={styles.txtSubHeading}>All Products</Text>
                            </View>

                            {dummyProductData.map((item, index) => (
                                <TouchableOpacity
                                    style={{ marginVertical: 2 }}
                                    key={index}
                                // onPress={() => onChangeScreenProduct(item)}
                                >
                                    <AllProductCard item={item} />
                                </TouchableOpacity>
                            ))}
                        </View>



                    </ScrollView>
                    <TouchableOpacity style={styles.btnContainer} >
                        <Text style={styles.txtButton}>Shop Products</Text>
                        <Image
                            source={require("../../assets/img_new_add.png")}
                            style={styles.btnAdd} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#FAF9F7', },

    typeContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
        paddingHorizontal: responsiveWidth(6),
        marginTop: 12
    },

    scrollContainer: {
        backgroundColor: '#FAF9F7',
        marginBottom: responsiveHeight(2),
    },

    txtType: {
        fontSize: responsiveFontSize(1.6),
        marginTop: responsiveHeight(1),
        marginBottom: responsiveHeight(1),
        color: "#75695A",
    },

    selectedViewContainer: {
        height: responsiveHeight(4.2),
        paddingHorizontal: responsiveWidth(3),
        borderWidth: responsiveWidth(.34),
        borderColor: "#ECDDC6",
        marginRight: 5,
        backgroundColor: "#ECDDC6",
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    unselectedViewContainer: {
        height: responsiveHeight(4.2),
        paddingHorizontal: responsiveWidth(3),
        marginRight: 5,
        borderWidth: responsiveWidth(.34),
        borderColor: "#ECDDC6",
        backgroundColor: "#ECDDC600",
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    left: {
        height: responsiveHeight(8),
        width: responsiveWidth(8),
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: responsiveWidth(4),
    },

    txtHeader: {
        flex: 1,
        fontSize: height > 700 ? responsiveFontSize(2.1) : responsiveFontSize(2.4),
        color: "#000000",
        marginRight: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    txtSubHeading: {
        fontSize: responsiveFontSize(2.6),
        fontWeight: "bold",
        marginTop: responsiveHeight(1),
        marginBottom: responsiveHeight(1),
        color: "#41392F",
    },

    btnContainer: {
        backgroundColor: "#41392F",
        width: "90%",
        height: 50,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 12,
        marginBottom: 22
    },

    txtButton: {
        color: '#F7F1E7',
        fontWeight: '700',
        fontSize: responsiveFontSize(2.2),
        marginLeft: 12
    },

    btnAdd: {
        width: 46,
        height: 46,
        marginRight: 12
    },
});
