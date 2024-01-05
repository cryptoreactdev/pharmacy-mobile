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
import ColorsApp from "../../config/ColorsApp";
const { width, height } = Dimensions.get("window");


export default function RoutineCard(props) {
    const { item } = props;
    return (
        <View style={styles.cardContainer}>
            <View style={styles.container}>
                <Image source={require("../../../assets/soap.png")} style={styles.ivProduct} />
                <View style={styles.productDetailContainer}>
                    <Text numberOfLines={2} style={styles.txtProductName}>{item.productName}</Text>
                    <Image
                        source={require("../../../assets/right.png")}
                        style={styles.btnOpen} />

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 18,
        marginVertical: 3,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: responsiveWidth(0.8),
        borderRadius: 10,
        // marginBottom: responsiveHeight(1),
        backgroundColor: ColorsApp.WHITE,
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },

    btnOpen: {
        width: 26,
        height: 26,
        marginRight: 12
        // /resizeMode: "contain",
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
    },

    productDetailContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: responsiveWidth(2)
    },
    ivProduct: {
        height: responsiveHeight(8),
        width: responsiveWidth(16),
        resizeMode: "contain",
        marginRight: responsiveWidth(2),
        marginLeft: responsiveWidth(1),
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'white',
        backgroundColor: 'white'
    },
    txtProductName: {
        flex: 1,
        fontSize: responsiveFontSize(2),
        color: "black",
        fontWeight: "600",
        marginVertical: 2,
    },
    txtQuantity: {
        alignItems: "center",
        flexDirection: "row",
    }

})