import React from "react";
import {  View } from "react-native";
import { s } from "react-native-wind";
import { BlockButton } from "../../atoms";


const AddButton = ({ title, event }) => {
  const onPress = () => {
    event();
  };

  return (
    <View
      style={s`flex flex-wrap   mb-2  w-full justify-center items-center rounded-lg    inset-x-0 bottom-0 absolute  `}
    >
        
        <BlockButton
                 title={"Agregar"}

        />
     
    </View>
  );
};

export default AddButton;
