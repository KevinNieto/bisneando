import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";

const Cart = () => {


  return (
    <View style={s`flex-1 px-6`}>
      <Text>Componente Cart</Text>
    </View>
  );
};

const cartConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Carrito de Compras!",
  hideRightButton: true,
};

export default wrappedView(Cart, cartConfigView);
