import React  from "react";
import { View} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { AddButton, CreditCard,  } from "../../atoms";

import { CreditCardForm } from "../../molecules";

const AddEditCreditView = () => {


  return (
    <View style={s`flex-1 px-5`}>
      <CreditCard isExample={true} cardType={"visa"}/>
      <CreditCardForm/>
      <AddButton doing={true} isEditing={true} />
    </View>
  );
};

const addEditCreditViewConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Agregar Tarjeta",
  hideRightButton: true,
};

export default wrappedView(AddEditCreditView, addEditCreditViewConfigView);
