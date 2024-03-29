import React from "react";
import { View, Text, Switch, TouchableOpacity, ImageBackground, Platform } from "react-native";
import { Actions } from "react-native-router-flux";
import { s } from "react-native-wind";



const CreditCard = ({ isExample, cardType}) => {
  let card= require("../../../imgs/cards/visa.png");
  const onPress = () => {
    Actions.addEditCreditCard()
  };


  if (cardType==="visa") {
     card = require("../../../imgs/cards/visa.png");
  }
  
  if (cardType==="master") {
    card = require("../../../imgs/cards/master.png");
  }
  if  (cardType==="american"){
     card = require("../../../imgs/cards/american.png");
  }

  return isExample ? (
    <TouchableOpacity style={s`p-1 mb-1 w-full`}>
        <View style={s`text-white `}>
        <ImageBackground style={s`w-full h-52 pb-2`} source={card}>
          <View style={s`pl-7 flex flex-row mt-20`}>
            <Text style={s`text-white  text-lg pt-1.5`}>4321 9876 3210 </Text>
            <Text style={s`text-white  text-3xl `}>1234</Text>
          </View>

          <View style={s`flex flex-row pt-3 ml-32 `}>
            <Text style={s`text-white  text-sm `}>GOOD{'\n'}THRU</Text>
            <Text style={s`pt-1 pl-1 text-white text-xl `}>
              12/24
            </Text>
          </View>
          { Platform.OS === 'ios' ? 
            (
              <View style={s` pl-7 pt-3 `}>
                <Text style={s`pt-0.5  text-white `}>ALEJANDRO FERNANDO VALLADARES </Text>
              </View>
            ):
            (
              <View style={s` pl-7 pt-1 `}>
                <Text style={s`w-86 h-6 pt-0.5 text-sm text-white text-clip overflow-hidden`}>ALEJANDRO FERNANDO VALLADARES MARTINEZ</Text>
              </View>
            )
          }
        </ImageBackground>
        </View>
    </TouchableOpacity>
  ):( 
    <TouchableOpacity style={s`p-1 mb-1 w-full`} onPress={onPress} >
      <View style={s`text-white `}>
        <ImageBackground style={s`w-full h-52 pb-2`} source={card}>
          <View style={s`pl-7 flex flex-row mt-20`}>
            <Text style={s`text-white  text-lg pt-1.5`}>XXXX XXXX XXXX </Text>
            <Text style={s`text-white  text-3xl `}>1234</Text>
          </View>

          <View style={s`flex flex-row pt-3 ml-32 `}>
            <Text style={s`text-white  text-sm `}>GOOD{'\n'}THRU</Text>
            <Text style={s`pt-1 pl-1 text-white text-xl `}>
              12/24
            </Text>
          </View>
          { Platform.OS === 'ios' ? 
            (
            <View style={s` pl-7 pt-3 `}>
              <Text style={s`pt-0.5  text-white `}>ALEJANDRO FERNANDO VALLADARES MARTINEZ</Text>
            </View> 
            ):
            (
              <View style={s` pl-7 pt-1 `}>
                <Text style={s`w-86 h-6 pt-0.5 text-sm text-white text-clip overflow-hidden`}>ALEJANDRO FERNANDO VALLADARES MARTINEZ</Text>
              </View>
            )
          }
        </ImageBackground>
      </View>
    </TouchableOpacity> 
  )
};

export default CreditCard;
