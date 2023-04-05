import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
const background = require("../../../imgs/gradient-button.png");


const BlockButtonWrapper = ({ title, event }) => {
  const onPress = () => {
    event();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={s`mt-2 ml-6 mr-6 h-12 w-full bg-amber-400 justify-center items-center rounded-lg  `}
    >
     
        <Text style={s` font-bold`}>{title}</Text>
     
    </TouchableOpacity>
  );
};

export default BlockButtonWrapper;
