import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";
import { AddButton, TextInput } from "../../atoms";
import { ItemCoupon } from "../../organisms";
import { Actions } from "react-native-router-flux";

const AddCoupon = () => {
  const onPress = () => {
    Actions.coupons()
  };

  return (
    <View style={s`flex-1 px-6`}>
      <View style={s`pt-2`}>
        
          <TextInput
            containerStyles={ s`border border-transparent border-b-gray-300 bg-white text-black` }
            placeholder="Ingresa el código con los guiones."
            autoCapitalize="none"
            autoCompleteType="password"
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
      <AddButton 
        title={"Agregar cupón"}
        event={onPress}
      />
    </View>
  );
};

const addCouponsConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "¿Quieres agregar un cupón?",
  hideRightButton: true,
};

export default wrappedView(AddCoupon, addCouponsConfigView);
