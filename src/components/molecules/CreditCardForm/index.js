import React from "react";

import { Text, View} from "react-native";

import { s } from "react-native-wind";
import { Input, TextInput } from "../../atoms";

// import { NavBarContext } from "../../../contexts/NavBarProvider";

const CreditCardForm = ({ }) => {


  return (
    <View style={s`px-4 pt-2`}>
        <View>
          <Text style={s`pb-1`} >NOMBRE DEL TITULAR </Text>
          <TextInput
            containerStyles={ s`bg-white ` }
            placeholder="Nombre del titular"
            autoCapitalize="none"
            autoCompleteType="password"
            textContentType="password"
            secureTextEntry={true}
          />
        </View>

        <View style={s`mt-8`}>
          <Text style={s`pb-1`} >NUMERO DE LA TARJETA </Text>
          <TextInput
            containerStyles={ s`bg-white ` }
            placeholder="Numero de la tarjeta"
            autoCapitalize="none"
            autoCompleteType="password"
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View>
          <View style={s`mt-6 `}>
            <View style={s`flex flex-row pb-1`}>
                <Text style={s` w-56 `} >FECHA DE EXPIRACION: </Text>
                <Text style={s`pl-12 text-right`} >CVC-CVV: </Text>
            </View>
            <View style={s`flex flex-row`}>
                <TextInput
                  containerStyles={ s`bg-white  w-16 pl-2 ` }
                  placeholder="MM"
                  autoCapitalize="none"
                  autoCompleteType="password"
                  textContentType="password"
                  secureTextEntry={true}
                />
                <Text style={s`pt-1 text-3xl`} > / </Text>
                <TextInput
                  containerStyles={ s`bg-white w-16 text-center justify-center items-center pl-3` }
                  placeholder="YY"
                  autoCapitalize="none"
                  autoCompleteType="password"
                  textContentType="password"
                  secureTextEntry={true}
                />

                <TextInput
                  containerStyles={ s`bg-white w-16 ml-32 pl-1.5 ` }
                  placeholder="CVV"
                  autoCapitalize="none"
                  autoCompleteType="password"
                  textContentType="password"
                  secureTextEntry={true}
                />
            </View>
           
          </View>

        </View>
        <View style={s`mt-2 w-full`}>
          <Text style={s`text-right  underline decoration-1 `} >Politcas de Seguridad </Text>
        </View>
          


    </View>
  );
};

export default CreditCardForm;
