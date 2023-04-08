import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { s } from "react-native-wind";



const BlockButtonWrapper = ({ title, event }) => {
  

  return (
    <TouchableOpacity
      onPress={event}
      style={s`mt-2 ml-6 mr-6 h-12 w-full bg-amber-400 justify-center items-center rounded-lg  `}
    >
     
        <Text style={s` font-bold`}>{title}</Text>
     
    </TouchableOpacity>
  );
};

export default BlockButtonWrapper;
