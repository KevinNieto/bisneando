import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";

const Coupons = () => {


  return (
    <View style={s`flex-1 px-6`}>
      <Text>Componente Cupones</Text>
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
