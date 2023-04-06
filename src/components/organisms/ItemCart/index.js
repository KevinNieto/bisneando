import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import box from "../../../imgs/products/coca.jpeg";
import basura from "../../../imgs/icons/basura.png";
import clock from "../../../imgs/icons/clock.png";
import corazon from "../../../imgs/icons/corazon.png";
import corazonAamarillo from "../../../imgs/icons/corazon-amarillo.png";
import { Actions } from "react-native-router-flux";
import moment from "moment";
import { ActionButtons, Counter } from "../../molecules";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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

          <View style={s` w-full pt-4  mr-10 `}>
            

            <View style={s` w-full    mr-10  flex flex-row  `}>
              <View style={s` w-48 `}>
                <View style={s`col-1  `} >
                  <Text style={s`pl-1 text-black font-bold  text-sm truncate  leading-none`}>
                    Coca Cola Lata 355ml con nombre super larguisimo
                  </Text>
                </View>  


                <View style={s`col-1  pl-1.5 `} >
                  <Text style={s` text-black  text-gray-400`}>
                    L15.00
                  </Text>
                </View>
              </View>
              

              <View style={s`flex justify-center pl-9 pb-6 w-20 justify-end rounded-full  `}>
                <TouchableOpacity 
                    style={s`rounded-xl`}
                >
                   <Image
                    style={s`h-8 w-8`}
                    source={basura}
                  />
                </TouchableOpacity>
              </View>
            </View>



            <View style={s`pt-1   w-full flex flex-row   `} >
              
              <View style={s`pb-3 w-24 mx-2`} >
                <Text style={s` text-black font-bold text-xl text-amber-400`}>
                  L15.00
                </Text>
              </View>
              <Counter/>
            </View>
            

          </View>

    </View>
  )
};

export default ItemCart;
