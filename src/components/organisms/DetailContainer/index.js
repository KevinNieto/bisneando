import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import box from "../../../imgs/products/coca.jpeg";
import basura from "../../../imgs/icons/basura.png";

import { ActionButtons, Counter } from "../../molecules";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DetailContainer = ({


}) => {

  return (
    <View style={s` h-70 pl-6 pr-6 rounded-xl  bg-white   mt-2 w-full mx-1 divide-y`} >
      <View >
        <Text style={s`pt-1.5  text-black text-sm text-gray-500`}>
          Tipo de entrega:
        </Text>
        <Text style={s`text-gray-700  text-base`}>
          Delivery
        </Text>
      </View>

      <View style={s`mt-3 pt-2 border-t border-gray-500 `}>
        <Text style={s`pt-1.5  text-black text-sm text-gray-500`}>
          Dirección: 
        </Text>
        <Text style={s`text-gray-700  text-base`}>
          Calle Policarpo Paz, Centro Comercial La Joya, texto de relleno para saber que pedos
        </Text>
      </View>
      

    </View>
  )
};

export default DetailContainer;
