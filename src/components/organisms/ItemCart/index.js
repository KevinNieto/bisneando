import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import box from "../../../imgs/products/coca.jpeg";
import clock from "../../../imgs/icons/clock.png";
import corazon from "../../../imgs/icons/corazon.png";
import corazonAamarillo from "../../../imgs/icons/corazon-amarillo.png";
import { Actions } from "react-native-router-flux";
import moment from "moment";
import { ActionButtons } from "../../molecules";

const ItemCart = ({


}) => {

  return (
    <View style={s` h-70  rounded-xl  bg-white   mt-2 w-full mx-1`} >

          <View style={s` `}>
            <Image
              style={s`h-24 w-24`}
              source={box}
            />
          </View>

    </View>
  )
};

export default ItemCart;
