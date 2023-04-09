import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { s } from "react-native-wind";

const DrawerTop = ({ title, subTitle, img, icon, event, color }) => {
 
  return (
    <View  style={s`bg-amber-400 pt-16 pb-16 w-full  h-60`}>
      <View  style={s`h-20 w-20 rounded-full self-center`}>
        <ImageBackground
          style={s`w-24 h-24  self-center  rounded-full`}
          resizeMode="contain"
          source={require("./../../../imgs/bisneando-cuadrado-trasnparente.png")}

          />
      </View>
      <View  style={s`pt-6 pl-6 `}>
        <Text style={s`text-xl text-gray-900  font-bold`}>Kevin Nieto</Text>
        <Text style={s`text-sm  text-gray-700 `}>prueba@gmail.com</Text>

      </View>
    </View>
  );
};

export default DrawerTop;
