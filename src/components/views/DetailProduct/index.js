import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";

const DetailProduct = () => {


  return (
    <View style={s`flex-1 px-6`}>
     <Text>Vista detalle del producto</Text>

    </View>
  );
};

const DetailProductConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Detalle del Producto",
  hideRightButton: true,
};

export default wrappedView(DetailProduct, DetailProductConfigView);
