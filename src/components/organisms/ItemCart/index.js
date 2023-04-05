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
import { ActionButtons, Counter } from "../../molecules";

const ItemCart = ({


}) => {

  return (
    <View style={s` h-70  rounded-xl  bg-white flex flex-row  mt-2 w-full mx-1`} >

          <View style={s`flex `}>
            <Image
              style={s`h-24 w-24`}
              source={box}
            />
          </View>

          <View style={s`flex pt-4`}>

            <View style={s`col-1  w-full`} >
              <Text style={s`text-black font-bold  text-sm truncate  leading-none`}>
                Coca Cola Lata 355ml
              </Text>
            </View>  


            <View style={s`col-1 w-full  `} >
              <Text style={s` text-black  text-gray-400`}>
                L15.00
              </Text>
            </View>
            <View style={s`pt-1  w-full flex flex-row   `} >
            
              <Text style={s` text-black font-bold text-2xl text-amber-400`}>
                L15.00
              </Text>
              <Counter/>
            </View>
            

          </View>

    </View>
  )
};

export default ItemCart;
