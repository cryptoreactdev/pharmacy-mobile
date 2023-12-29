import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { IconButton } from "react-native-paper";
import AuthenticationBtn from "../components/AuthenticationBtn";
import { getFeaturedProducts } from "../config/DataApp";

const RegisterPharmacyProduct = ({ navigation }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getFeaturedProducts()
      .then((response) => {
        console.warn("all products", response);
        setProducts(response);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, []);

  const handleProductSelection = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);

    if (selectedProduct) {
      if (selectedProducts.some((p) => p.id === selectedProduct.id)) {
        const updatedProducts = selectedProducts.filter(
          (product) => product.id !== selectedProduct.id
        );
        setSelectedProducts(updatedProducts);
      } else {
        setSelectedProducts([...selectedProducts, selectedProduct]);
      }
    }
  };

  const filteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    .filter((product) => product.type === "Devices");

  const navigateToNextScreen = () => {
    if (selectedProducts.length > 0) {
      navigation.navigate("registerNotifications");
    }
  };

  const skipnavigateToNextScreen = () => {
    navigation.navigate("registerNotifications");
  };

  return (
    <ScrollView
      style={{ flexGrow: 1, backgroundColor: "#FAF9F7" }}
      contentContainerStyle={styles.container}
    >
      <View style={{ marginTop: 30, flex: 6 }}>
        <Text style={[styles.title, { fontFamily: "Bricolage Grotesque" }]}>
          Register your product
        </Text>
        <Text style={{ color: "#545454", fontSize: 16 }}>
          AppName is proud to offer a limited lifetime warranty on all of its devices. Please select the devices you would like to register.
        </Text>
        <View style={{ marginTop: 10 }}>
          <TextInput
            style={styles.input}
            placeholder="Search Products"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.productContainer}>
          {filteredProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={[
                styles.productButton,
                selectedProducts.includes(product) && styles.selectedButton,
              ]}
              onPress={() => handleProductSelection(product.id)}
            >
              <View style={styles.productImageContainer}>
                <IconButton
                  icon={"check-circle-outline"}
                  style={{
                    backgroundColor: `${selectedProducts.includes(product) && "#75695A"
                      }`,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={14}
                />
                <Image
                  source={{ uri: product.image }}
                  style={{ width: 60, height: 60, marginBottom: 10 }}
                />
              </View>
              <Text>{product.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.buttonContainer}>
          <AuthenticationBtn
            title={"Skip"}
            textColor={{ color: "#41392F" }}
            btnstyle={{
              width: 150,
              backgroundColor: "white",
              borderWidth: 1,
              height: 40,
            }}
            onPress={skipnavigateToNextScreen}
          />
          <AuthenticationBtn
            title={"Continue"}
            btnstyle={{ width: 150, height: 40 }}
            onPress={navigateToNextScreen}
            disabled={selectedProducts.length === 0}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
    color: "#41392F",
  },
  input: {
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
  },
  productButton: {
    backgroundColor: "transparent",
    borderColor: "#000",
    paddingHorizontal: 0,
    marginHorizontal: 5,
    marginVertical: 5,
    width: "30%",
  },
  selectedButton: {},
  productImageContainer: {
    backgroundColor: "white",
    paddingLeft: 0,
    alignItems: "center",
  },
});

export default RegisterPharmacyProduct;
