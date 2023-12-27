import React, {useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Video } from "expo-av";
import { VideoPlayer } from "expo-video-player";
import AuthenticationBtn from "../components/AuthenticationBtn";

const Welcome = ({ navigation }) => {
  const videoRef = useRef(null);

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish && videoRef.current) {
      videoRef.current.replayAsync();
    }
  };
  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/intro-video.mp4")}
        style={styles.backgroundVideo}
        isMuted={true}
        shouldPlay={true}
        resizeMode="cover"
        useNativeControls={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
      <View style={styles.overlay}>
        <Image source={require("../../assets/welcomeframe.png")} style={{ width: 300, height: 200 }} />
        <AuthenticationBtn
          onPress={() => navigation.navigate("register")}
          textColor={{ color: "#F7F1E7" }}
          title={"Sign Up"}
          btnstyle={{ borderColor: "black" }}
        />
        <AuthenticationBtn
          onPress={() => navigation.navigate("login")}
          title={"I have an account"}
          btnstyle={{
            backgroundColor: "#F4E9DD",
            borderColor: "black",
          }}
          textColor={{ color: "#75695A" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Welcome;
