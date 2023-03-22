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
      style={s`h-12 w-full bg-primary justify-center items-center`}
    >
      <ImageBackground source={background} resizeMode="stretch" 
          style={s`flex-1 justify-center items-center w-full`}>
        <Text style={s`text-white font-bold`}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BlockButtonWrapper;
