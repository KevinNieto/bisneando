import React from "react";
import { View, Text } from "react-native";
import { s } from "react-native-wind";
import CheckBox from "@react-native-community/checkbox";
import { TextInput } from "../../atoms";

const CheckBoxWrapper = ({ title, item, value, object, onValueChange, index }) => {

  return (
    <>
      <View style={s`flex-row w-1/2 mb-4 px-2`}>
        <CheckBox
          value={value}
          onValueChange={(newValue) => {
            onValueChange(item, newValue, index, object, null)}}
          key={index}
          tintColors={{true: "#0E0E64"}}
        />
        <Text style={s`self-center`}>{title}</Text>
      </View>
    </>
  );
};

export default CheckBoxWrapper;
