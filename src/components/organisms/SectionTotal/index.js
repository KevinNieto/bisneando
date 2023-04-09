import React, {  useState }  from "react";
import { View, Text, ScrollView} from "react-native";
import { s } from "react-native-wind";

const SectionTotal = ({total}) => {

  return (
  
    <View
     style={s`h-12 w-full bg-white items-center pl-6 pr-5 flex-row justify-between mb-1`}
    >
       <Text style={s`font-bold text-base`}>Total</Text>
       <Text style={s`font-bold text-base`}>L.{total}.00</Text>
    </View>
  
  );
};



export default SectionTotal;