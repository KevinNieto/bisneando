import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";
import { AddButton } from "../../atoms";

const Payment = () => {


  return (
    <View style={s`flex-1 px-6`}>
      
      <AddButton/>
    </View>
  );
};

const paymentConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Metodos de Pago",
  hideRightButton: true,
};

export default wrappedView(Payment, paymentConfigView);
