import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-wind";
import { Badge, Button, IncrementButton } from "./../../atoms";
import box from "../../../imgs/products/coca.jpeg";
import clock from "../../../imgs/icons/clock.png";
import corazon from "../../../imgs/icons/corazon.png";
import corazonAamarillo from "../../../imgs/icons/corazon-amarillo.png";
import { Actions } from "react-native-router-flux";
import moment from "moment";

const Counter = ({
}) => {
  return (
        <View style={s`mr-1 col-2 flex-row w-24 pt-0.5 `}>
          <IncrementButton
            style={[
              s`h-7 w-7  pb-1 pl-1.5  bg-amber-400   rounded-full  fill-white`,
            ]}
            labelStyles={
              s` font-bold color-white `}
            iconName={"minus"}
            />
          <View style={s`pt-1  w-20 mx-1`} >
            <Text style={s` text-black text-sm text-center text-amber-400`}>
              Cantidad: 1
            </Text>
          </View>
         
            <IncrementButton
            style={[
              s`h-7 w-7  pb-1 pl-1.5  bg-amber-400   rounded-full  fill-white`,
            ]}
            labelStyles={
              s` font-bold color-white `}
            iconName={"plus"}
            />
      
        
        </View>
                 
              
            
            
              
       
           
            
            

  
  )
};

export default Counter;



