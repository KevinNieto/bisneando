import React from "react";
import {  View } from "react-native";
import { s } from "react-native-wind";
import { BlockButton, Button } from "../../atoms";


const AddButton = ({ title, event, doing, isEditing }) => {
  const onPress = () => {
    event();
  };

  return doing ? (
    <View
      style={s`flex flex-wrap   mb-2  w-full justify-center items-center rounded-lg    inset-x-0 bottom-0 absolute  `}
    >
        {
          isEditing && (
            <View  style={s`w-full  `} >

              <BlockButton
                title={"Favorita"}
              /> 
              <View  style={s`flex flex-row pt-1 ml-6`} >
                  <Button
                    style={[
                      s`h-12 w-44  pl-20 pr-4 bg-amber-400  justify-center rounded-md  fill-white`,
                    ]}
                    labelStyles={
                      s` font-bold color-white text-center text-xs`}
                    iconName={"pencil"}
                  />
                  <Button
                    style={[
                      s`h-12 w-44 ml-5 pl-20 pr-4 bg-amber-400  justify-center rounded-md  fill-white`,
                    ]}
                    labelStyles={
                      s` font-bold color-white text-center text-lg`}
                    iconName={"delete"}
                  />
                  
              </View>

            </View>
            
          )
        }

        {
          !isEditing && (
            <BlockButton
              title={"Guardar tarjeta"}
            /> 
          )
        }
       
     
    </View>
  ): (
    <View
    style={s`flex flex-wrap   mb-2  w-full justify-center items-center rounded-lg    inset-x-0 bottom-0 absolute  `}
  >
      
      <BlockButton
               title={"Agregar una nueva tarjeta"}

      />
   
  </View>

  );
};

export default AddButton;
