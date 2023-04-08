import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";
import { AddButton } from "../../atoms";
import { ItemCoupon } from "../../organisms";
import { Actions } from "react-native-router-flux";

const Coupons = () => {
  const onPress = () => {
    Actions.addCoupon()
  };


  return (
    <View style={s`flex-1 px-6`}>
      <ItemCoupon/>
      <AddButton 
        title={"Agregar un nuevo cupón"}
        event={onPress}
      />
    </View>
  );
};

const couponsConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Tus Cupones",
  hideRightButton: true,
};

export default wrappedView(Coupons, couponsConfigView);
