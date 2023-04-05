import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { s } from "react-native-wind";
import { BlockButton } from "../../atoms";
import GridProducts from "../GridProducts";
const background = require("../../../imgs/gradient-button.png");


const ActionTools = ({ title, event }) => {
  const onPress = () => {
    event();
  };

  return (
    <View
      style={s`flex flex-wrap   mb-2  w-full justify-center items-center rounded-lg    inset-x-0 bottom-0 absolute  `}
    >
        <Text style={s`font-bold`}>Deseas agregar algo mas?</Text>
        <GridProducts/>
        <BlockButton
                 title={"Confirmar"}

        />
     
    </View>
  );
};

export default ActionTools;
