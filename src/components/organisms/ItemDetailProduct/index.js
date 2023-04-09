import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import box from "../../../imgs/products/coca.jpeg";
import basura from "../../../imgs/icons/basura.png";

import { ActionButtons, Counter } from "../../molecules";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ItemDetailProduct = ({


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
                
              </View>
              <View>
                     
        
              </View>

             
            </View>



            <View style={s`  text-right  w-full flex flex-row   `} >
               <Text style={s`pt-1.5 text-right text-black font-bold text-base text-gray-300`}>
                  x20
                </Text> 
                <Text style={s`ml-28   text-right text-black font-bold text-2xl text-amber-400`}>
                  L1500.00
                </Text>
         
          
            </View>
            

          </View>

    </View>
  )
};

export default ItemDetailProduct;
