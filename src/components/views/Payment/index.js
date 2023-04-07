import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { AddButton,  } from "../../atoms";
import { CreditCardContainer } from "../../organisms";

const Payment = () => {


  return (
    <View style={s`flex-1 px-5`}>
      <CreditCardContainer/>
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
