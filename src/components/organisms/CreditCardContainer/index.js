import React  from "react";
import { View, Text, ScrollView} from "react-native";
import { s } from "react-native-wind";
import { AddButton, CreditCard } from "../../atoms";

const CreditCardContainer = () => {


  return (
    <ScrollView style={s``}>
      <CreditCard cardType={"visa"}/>
      <CreditCard cardType={"master"}/>
      <CreditCard cardType={"american"}/>
    </ScrollView>
  );
};


export default CreditCardContainer;