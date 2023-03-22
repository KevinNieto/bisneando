import React from "react";
import { View, Text } from "react-native";
import { s } from "react-native-wind";

const RowInputWrapper = ({ children, title }) => {
  return (
    <View style={s`w-full max-w-xs items-start pb-5`}>
      <View style={s`h-6 w-full`}>
        <Text style={s`font-bold text-base`}>{title}</Text>
      </View>
      <View style={s`flex flex-row justify-start flex-wrap`}>{children}</View>
    </View>
  );
};

export default RowInputWrapper;
