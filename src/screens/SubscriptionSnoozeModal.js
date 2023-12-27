import React from "react";
import { Image, Text, View } from "react-native";
import { Modal } from "react-native-paper";
import AuthenticationBtn from "../components/AuthenticationBtn";

const SubscriptionSnoozeModal = (props) => {
  return (
    <Modal visible={props.visibility}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "white",
            height: 550,
            paddingVertical: 20,
            borderRadius: 20,
            width: "100%",
          }}
        >
          <Image
            source={require("../../assets/snooze.png")}
            width={100}
            height={100}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000" }}>
            Are you sure you want to snooze?
          </Text>
          <Text
            style={{
              color: "#757575",
              textAlign: "center",
              paddingHorizontal: 35,
            }}
          >
            By snoozing the subscription you delay the receiving product day,
            and the subscription end date in one month
          </Text>
          <AuthenticationBtn
            onPress={() => props.onPress(true)}
            title={"Snooze"}
            textColor={{ color: "#F7F1E7" }}
            btnstyle={{ height: 60 }}
          />
          <AuthenticationBtn
            onPress={() => props.onPress(false)}
            title={"Cancel"}
            textColor={{ color: "#75695A" }}
            btnstyle={{
              backgroundColor: "transparent",
              borderWidth: 1,
              height: 60,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SubscriptionSnoozeModal;
