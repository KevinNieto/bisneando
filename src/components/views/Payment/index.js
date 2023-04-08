import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { AddButton,  } from "../../atoms";
import { CreditCardContainer } from "../../organisms";
import { Actions } from "react-native-router-flux";

const Payment = () => {
  const onPress = () => {
    Actions.addEditCreditCard()
  };

  return (
    <View style={s`flex-1 px-5`}>
      <CreditCardContainer/>
      <AddButton 
        title={"Agregar una nueva tarjeta"}
        event={onPress}  
      />
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
