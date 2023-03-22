import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";

const RowInfo = ({ title, info, event }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        event(info);
      }}
      disabled={!event ? true : false}
      style={s`flex py-3 flex-row`}
    >
      <View style={s`w-2/4 pl-5`}>
        <Text style={s`font-bold text-sm text-info`}>{title}</Text>
      </View>
      <View style={s`w-2/4 pr-5`}>
        <Text style={s`text-sm text-info`}>{info}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RowInfo;
