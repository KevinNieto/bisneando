import React, { useState, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { TextInput, Button } from "./../../atoms";
import { s } from "react-native-wind";


const ChangePassForm = () => {

  return (
    <View style={s`w-full max-w-xs px-2 mt-5`}>
      <View style={s`mb-4`}>
        <Text style={s`font-bold text-base`}>Cambiar contraseña</Text>
      </View>
      <View style={s`mb-4`}>
        <TextInput
          
          placeholder="Nueva contraseña"
          icon="lock"
          autoCapitalize="none"
      
          autoCompleteType="password"
          messageError="Ingrese una contraseña válida"
          textContentType="password"
          secureTextEntry={true}
        />
      </View>

      <View style={s`mb-4`}>
        <TextInput
          placeholder="Repetir contraseña"
          icon="lock"
          autoCapitalize="none"
          autoCompleteType="password"
          messageError="Ingrese una contraseña válida"
          textContentType="password"
          secureTextEntry={true}
        />
      </View>

      <View style={s`mb-4`}>
        <Button
          style={[
            s`h-12 justify-center rounded-md`,
            
          ]}
        
          labelStyles={[
            s`font-bold text-center text-sm`,
            s`text-white`
          ]}
          title="Cambiar contraseña"
  
       
        />
      </View>
    </View>
  );
};

export default ChangePassForm;
