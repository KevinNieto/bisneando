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

const ActionButtons = ({
  antojito, isFavorite
}) => {
  return (
          
              
              antojito ?
              (
                <View style={s`pt-3 grid-col-1 w-24`}>
                <Button
                  style={[
                          s`h-8  pl-6 bg-amber-400 justify-center rounded-md `,
                  
                  ]}
                  labelStyles={
                          s` font-bold text-center text-xs`}
                  
                        title="Agregar"
                  
                />
              </View>
              ) : 
              (
                <View style={s`pt-3 mr-1 col-2 flex-row w-24`}>
                  <Button
                  style={[
                    s`h-8 pl-4 pr-4 bg-amber-400  justify-center rounded-md  fill-white`,
                  ]}
                  labelStyles={
                    s` font-bold color-white text-center text-xs`}
                  iconName={"plus"}
                  />
                  {isFavorite ?(
                     <Button
                     style={[
                       s`h-8 w-8 pr-1 pl-2 ml-1.5  bg-red-500 justify-center rounded-full  mr-1`,
                    
                     ]}
                     labelStyles={
                       s` font-bold text-center text-xs`}
                     source={corazon}
                   /> 
                  ):(  <Button
                    style={[
                      s`h-8 w-8   ml-1.5 pl-1.5 justify-center rounded-full  mr-1 border-2  border-amber-400  `,
                    ]}
                    labelStyles={
                      s` font-bold text-center text-xs`}
                    source={corazonAamarillo}
                   /> )
                   }
                </View>
                 
              
            
                
              )
              
       
           
            
            

  
  )
};

export default ActionButtons;



