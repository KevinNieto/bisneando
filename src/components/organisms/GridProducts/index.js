import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import {  ItemProduct } from "../../organisms";

const GridProducts = ({
}) => {
 

  return (

     <View style={s`flex-row grid grid-cols-3 gap-3 justify-center `}>
           <ItemProduct />
           <ItemProduct  isFavorite={true} />
           <ItemProduct antojito={true}/>
      </View>

  )
};

export default GridProducts;
