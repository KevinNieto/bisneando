import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button } from "./../../atoms";
import coupon from "../../../imgs/coupon.png";
import basura from "../../../imgs/icons/basura.png";

const ItemCoupon = ({


}) => {

  return (
    <View style={s` h-70  rounded-xl  bg-white flex flex-row  mt-2 w-full mx-1`} >

          <View style={s`flex mx-3 mt-3 mb-3`}>
            <Image
              style={s`h-20 w-20 rounded-xl`}
              source={coupon}
            />
          </View>

          <View style={s` w-full pt-2  mr-10 `}>
            

            <View style={s` w-full    mr-10  flex flex-row  `}>
              <View style={s` w-48 `}>
                <View style={s`col-1  `} >
                  <Text style={s`pl-1 text-black font-bold  text-sm truncate  leading-none`}>
                    Te damos la bienvenida a Bisneando!
                  </Text>
                </View>  
                <View style={s` w-44 mx-2`} >
                  <Text style={s` text-black font-bold text-xl text-amber-400`}>
                    L100.00 FREE
                  </Text>
                </View>

                <View style={s`col-1  pl-1.5 flex flex-row`} >
                  <Text style={s` text-black  text-gray-400`}>
                    Vence el 9 de septiembre 
                  </Text>
                </View>
                
             
         


              </View>
              

              <View style={s`flex justify-center pl-6 pb-8 w-20 justify-end rounded-full  `}>
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



          
            

          </View>

    </View>
  )
};

export default ItemCoupon;
