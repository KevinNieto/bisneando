import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import { ItemList } from "../../molecules";

const GridProducts = ({
}) => {
 

  return (

     <View style={s`flex-row grid grid-cols-3 gap-3 justify-center `}>
           <ItemList/>
           <ItemList/>
           <ItemList/>
      </View>

  )
};

export default GridProducts;
