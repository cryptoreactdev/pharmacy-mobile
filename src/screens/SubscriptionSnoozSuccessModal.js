import React from "react";
import { Image, Text, View } from "react-native";
import { Modal } from "react-native-paper";
import AuthenticationBtn from "../components/AuthenticationBtn";

const SubscriptionSnoozSuccessModal = (props) => {
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
            height: 400,
            paddingVertical: 20,
            borderRadius: 20,
            width: "100%",
          }}
        >
          <Image
            source={require("../../assets/check-circle.png")}
            height={100}
            width={100}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000" }}>
            Subscription was snoozed
          </Text>
          <Text style={{ color: "#757575" }}>
            Next delivery date : [dynamicDate]{" "}
          </Text>
          <AuthenticationBtn
            onPress={() => props.onPress(false)}
            title={"Close"}
            textColor={{ color: "#F7F1E7" }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SubscriptionSnoozSuccessModal;
