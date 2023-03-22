import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import loupe from "../../../imgs/icons/loupe.png";

const PlaceholderList = ({ title, subtitle, isFilters, icon }) => {
  const message = isFilters ? "No se encontraron resultados" : title ;

  const description = isFilters
    ? "Ningún registro coincide con los criterios de búsqueda."
    : subtitle;

  return (
    <View
      style={s`flex-1 w-full justify-center items-center  px-2`}
    >
      <View
        style={s`h-40 w-40 items-center justify-center border-black border-2 rounded-full bg-gray-200`}
      >
        <Image style={s`w-24 h-24`} source={ isFilters ? loupe : icon} />
      </View>
      <View>
        <Text
          style={s`text-center font-bold text-primary text-lg my-4 py-1`}
        >
          {message}
        </Text>
        <Text style={s`text-center text-base text-gray-800`}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default PlaceholderList;
