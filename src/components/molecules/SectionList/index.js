import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { s } from "react-native-wind";

const SectionListWrapper = ({
  children,
  title,
  iconName,
  visible,
  event,
}) => {
  const onPress = () => {
    event(visible);
  };

  return (
    <>
      <TouchableOpacity
        disabled={!event ? true : false}
        onPress={onPress}
        style={s`h-12 w-full bg-white items-center pl-5 pr-5 flex-row justify-between mb-1`}
      >
        <Text style={s`font-bold text-base`}>{title}</Text>
        {iconName && <Icon name={iconName} size={35} color="black" />}
      </TouchableOpacity>
      {visible && <View style={s`flex`}>{children}</View>}
    </>
  );
};

export default SectionListWrapper;
