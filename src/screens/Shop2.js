import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { globalStyles } from "../stylesheet";
import {
  getLatestProducts,
  getPackages,
  getProductsByType,
  getProductTypes,
} from "../config/DataApp";
import Card1 from "../components/homescreencards/card1";
import Card2 from "../components/homescreencards/card2";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import Card3 from "../components/homescreencards/card3";
import Card4 from "../components/homescreencards/card4";
import Card5 from "../components/homescreencards/card5";
import { LinearGradient } from "expo-linear-gradient";
import ReminderBottomSheet from "../components/reminderBottomSheet";
import { useCommonView } from "../components/common/CommonViewShow";
const { width, height } = Dimensions.get("window");

export default function Shop2(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [packages, setPackages] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredLatestPosts, setFilteredLatestPosts] = useState([]);
  const [allTypeProducts, setAllTypesProducts] = useState({});
  const [selectedType, setSelectedType] = useState([]);
  const productTypes = [
    "Skin Care",
    "Devices",
    "Accessories",
    "Accidental Warranty",
  ];

  const { isVisible, showView, hideView } = useCommonView();
  const bottomSheetRef = React.useRef(null);
  let timerRef = React.useRef(null);

  useEffect(() => {
    getPackages().then((response) => {
      // TODO add multiple image for packages. It should come from a query to the database
      const modifiedPackages = response.map((product) => {
        const imageArray = product.image.split(",");
        product.allImages = product.image;
        product.image = imageArray.length > 0 ? imageArray[0].trim() : "";
        return product;
      });
      setPackages(modifiedPackages);
      setIsLoaded(true);
    });

    getLatestProducts().then((response) => {
      const modifiedProducts = response.map((product) => {
        const imageArray = product.image.split(",");
        product.allImages = product.image;
        product.image = imageArray.length > 0 ? imageArray[0].trim() : "";
        return product;
      });
      const separatedData = {};

      // Iterate through each product
      modifiedProducts.forEach((product) => {
        const productType = product.type;

        // Check if the type exists in the separatedData object
        if (!separatedData[productType]) {
          // If not, create an array for that type
          separatedData[productType] = [];
        }

        // Add the product to the array of its type
        separatedData[productType].push(product);
      });
      setAllTypesProducts(separatedData);

      setProducts(modifiedProducts);
      setIsLoaded(true);
    });
  }, []);
  console.log("products", products);
  const onChangeScreenProduct = async (product) => {
    // props.navigation.navigate("productdetails", { id, title });
    props.navigation.navigate("checkout1", product);
  };


  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0); // Open the bottom sheet to a snap point to change the height.
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  useEffect(() => {
    if (isVisible) {
      openBottomSheet();
    } else {
      closeBottomSheet();
    }
  }, [isVisible]);

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
    <View style={globalStyles.cont}>
      <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.scroll}>
        <Header {...props} />
        {/* {isVisible && <Pressable
          style={{ backgroundColor: 'gray', width: 40, height: 40 }}
          onPress={hideView} >
        </Pressable>} */}
        <Text style={globalStyles.bigtext}>Shop</Text>
        <Text style={globalStyles.text1}>Get our best products</Text>

        <View style={styles.smallcont}>
          <Text style={globalStyles.bigtext2}>Packages</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.cont2} horizontal={true}>
          {packages.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onChangeScreenProduct(item)}
            >
              <Card5 item={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.smallcont}>
          <Text style={globalStyles.bigtext2}>Products</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text style={globalStyles.text2}>Filter</Text>
            <Image
              source={require("../../assets/filter.png")}
              style={globalStyles.right}
            />
          </TouchableOpacity>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.filters}>

            {productTypes?.map((type, index) => (
              <TouchableOpacity
                style={selectedType.includes(type) ? styles.selectedViewContainer : styles.unselectedViewContainer}
                onPress={() => handleTypeClick(type)}
              >
                <Text style={globalStyles.txtType}>{type}</Text>
              </TouchableOpacity>
            ))}


            {/* <TouchableOpacity
              style={styles.btn}
            // onPress={() => onChangeScreenProduct(product, "skincare")}
            >
              <Text style={globalStyles.text3}>Skin care</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
            // onPress={() => onChangeScreenProduct(product, "skincare")}
            >
              <Text style={globalStyles.text3}>Devices</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
            // onPress={() => onChangeScreenProduct(product, "skincare")}
            >
              <Text style={globalStyles.text3}>Accessories</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
            // onPress={() => onChangeScreenProduct(product, "skincare")}
            >
              <Text style={globalStyles.text3}>Warranty</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>

        {productTypes.map((type) => (
          <>
            <View style={styles.smallcont}>
              <Text style={globalStyles.bigtext2}>{type}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.cont3}>
              {allTypeProducts[type]?.map((item, index) => (
                <TouchableOpacity
                  style={styles.cardContainer2}
                  key={index}
                  onPress={() => onChangeScreenProduct(item)}
                >
                  <Card5 item={item} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        ))}

        {/* Skin Care Devices Accidental Warranty Accesories */}
        {/* <ScrollView style={styles.cont2} horizontal={true}>
          {products?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onChangeScreenProduct(item)}
            >
              <Card5 item={item} />
            </TouchableOpacity>
          ))}
        </ScrollView> */}
      </ScrollView>
      <ReminderBottomSheet refBottomSheet={bottomSheetRef} onClose={hideView} />
    </View>
  );
}



const styles = StyleSheet.create({
  discover: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: responsiveHeight(5),
    alignSelf: "center",
    borderRadius: 10,
  },
  smallcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cont2: {
    flexDirection: "row",
    //justifyContent: "space-between",
    // alignItems: "flex-start",
    paddingLeft: 4,
    flexWrap: "wrap",
    alignContent: 'center',
    marginBottom: responsiveHeight(5),
  },
  cont3: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 4,
    // justifyContent: "flex-start",
    // alignContent: 'center',
    alignContent: 'center',
    marginBottom: responsiveHeight(5),
    // padding: 10, // Adjust padding as needed
  },
  btn: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(25),
    marginRight: 5,
    backgroundColor: "#ECDDC6",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn4: {
    flexWrap: "wrap",
  },
  cardContainer: {
    marginBottom: responsiveHeight(5),
    alignSelf: "center",
  },
  cardContainer2: {
    alignSelf: "center",
    // marginRight: responsiveWidth(3),
    // width: "30%",
    marginBottom: responsiveHeight(1),
  },
  discover: {
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    resizeMode: "contain",
    borderRadius: 10,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  blogTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  filters: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },

  selectedViewContainer: {
    height: height > 700 ? responsiveHeight(4.2) : responsiveHeight(4.4),
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
    height: height > 700 ? responsiveHeight(4.2) : responsiveHeight(4.4),
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
});
