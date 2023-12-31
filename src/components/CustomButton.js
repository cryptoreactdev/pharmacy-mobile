import React from "react";
import { View, I18nManager } from "react-native";
import Styles from "../config/Styles";
import { Text } from "react-native-paper";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import TouchableScale from "react-native-touchable-scale";
import { globalStyles } from "../stylesheet";
import ColorsApp from "../config/ColorsApp";

export default function CustomButton(props) {
  const { Icon, Label, Click } = props;

  return (
    <TouchableScale
      activeOpacity={1}
      activeScale={0.98}
      tension={100}
      friction={10}
      onPress={Click}
    >
      <View style={{ alignItems: 'center', flexDirection: 'row', paddingVertical: 10 }}>
        <Icons name={Icon} style={{
          color: ColorsApp.APP_PRIMARY,
          // position: "absolute",
          // left: 20,
          fontSize: 25,
          marginRight: 12
        }} />
        <Text style={{ flex: 2, fontSize: 16, fontWeight: '600' }}>{Label}</Text>
        <Icons
          name={I18nManager.isRTL ? "chevron-left" : "chevron-right"}
          style={{
            color: ColorsApp.APP_PRIMARY,
            // position: "absolute",
            fontSize: 20,
          }}
        />
      </View>
    </TouchableScale>
  );
}
