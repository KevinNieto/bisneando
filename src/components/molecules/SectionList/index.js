import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { s } from "react-native-wind";

const SectionListWrapper = ({
  children,
  title,
  iconName,
  visible = true,
  event,
}) => {
  return (
    <>
      <TouchableOpacity
        disabled={!event ? true : false}
        onPress={() => {
          event(visible);
        }}
        style={s`h-8 w-full bg-gray-200 items-center pl-5 pr-5 flex-row justify-between`}
      >
        <Text style={s`font-bold text-base`}>{title}</Text>
        {iconName && <Icon name={iconName} size={35} color="black" />}
      </TouchableOpacity>
      {visible && <View style={s`flex`}>{children}</View>}
    </>
  );
};

export default SectionListWrapper;
