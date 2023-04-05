import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import {  ItemProduct } from "../../organisms";

const GridProducts = ({
  isFavorite,
  antojito
}) => {
 

  return (

     <View style={s`flex-row grid grid-cols-3 gap-3 justify-center `}>
           <ItemProduct antojito={antojito} isFavorite={isFavorite}/>
           <ItemProduct  antojito={antojito} isFavorite={isFavorite} />
           <ItemProduct antojito={antojito} isFavorite={isFavorite} />
      </View>

  )
};

export default GridProducts;
