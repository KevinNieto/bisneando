import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import box from "../../../imgs/products/coca.jpeg";
import basura from "../../../imgs/icons/basura.png";

import { ActionButtons, Counter } from "../../molecules";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PaymentReviewContainer = ({


}) => {

  return (
    <View style={s` h-70 pl-6 pt-6 pr-6 rounded-xl  bg-white   mt-2 w-full mx-1 divide-y`} >
      <View style={s`flex flex-row`} >

        <Text style={s`text-gray-700 w-60  text-base`}>
          Productos
        </Text>
        <Text style={s`text-gray-700  pl-2 text-base`}>
          L.1440.00
        </Text>
      </View>

      <View style={s`  flex flex-row`}>
        
        <Text style={s`text-gray-700 w-60 text-base`}>
          Envio
        </Text>
        <Text style={s`text-gray-700 w-20 text-right text-base`}>
          L.60.00
        </Text>
      </View>
      

    </View>
  )
};

export default PaymentReviewContainer;
