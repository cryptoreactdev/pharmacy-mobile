import React, { useState, useEffect, useRef, } from "react";
import {
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity, Image
} from "react-native";
import Styles from "../config/Styles";
import Languages from "../languages";
import LanguageContext from "../languages/LanguageContext";
import { getPostById } from "../config/DataApp";
import AppLoading from "../components/InnerLoading";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native-paper";
import { HTMLStyles } from "../config/HTMLStyles";
import { HTMLStylesDark } from "../config/HTMLStylesDark";
import HTMLView from "react-native-render-html";
import usePreferences from "../hooks/usePreferences";
import moment from "moment";
// import { useNavigation } from "@react-navigation/native";


export default function PostDetails(props, { navigation }) {
  const { width } = useWindowDimensions();
  const { route } = props;
  //const { navigation } = props;
  // const navigation = useNavigation();

  const { id } = route.params;

  const { theme } = usePreferences();

  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  useEffect(() => {
    getPostById(id).then((response) => {
      console.log("RESPONSE IS : " + JSON.stringify(response))
      setItem(response[0]);
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return (
      <View style={{ marginTop: 50 }}>
        <AppLoading />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView>
            <View>
              <ImageBackground
                source={{ uri: item.image }}
                style={Styles.Header2Image}
                resizeMode={"cover"}
              >


                <LinearGradient
                  colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.5)"]}
                  style={Styles.Header2Gradient}>

                  <View style={{ flex: 1, width: 44, alignItems: 'center', }}>
                    <TouchableOpacity style={{ marginTop: 16, paddingVertical: 12, paddingRight: 16, marginLeft: -12 }}
                      onPress={() => props.navigation.goBack()}>
                      <Image
                        source={require("../../assets/left-arrow-white.png")}
                        style={Styles.img2}
                      />
                    </TouchableOpacity>
                  </View>

                  {/* <Text style={[Styles.Header2SubTitle, { fontSize: 14 }]}>
                    {moment(item.date).fromNow()}
                  </Text> */}
                  <Text
                    numberOfLines={3}
                    style={{
                      fontWeight: "bold",
                      color: "#F7F1E7",
                      fontSize: 20,
                      marginVertical: 8,
                      marginLeft: 2
                    }}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: '#F4E9DD',
                      backgroundColor: '#F4E9DD',
                      alignContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 2,
                      paddingHorizontal: 6
                    }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontWeight: "bold",
                        color: '#75695A',
                        fontSize: 14,
                        textAlign: 'center'
                      }}>
                      {item.tag}
                    </Text>
                  </View>

                </LinearGradient>
              </ImageBackground>

              <View style={{ marginTop: 15, marginHorizontal: 15 }}>
                <HTMLView
                  source={{
                    html: item.description ? item.description : `<p></p>`,
                  }}
                  contentWidth={width}
                  tagsStyles={theme === "light" ? HTMLStyles : HTMLStylesDark}
                />
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}
