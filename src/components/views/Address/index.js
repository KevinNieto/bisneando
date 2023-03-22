import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";

const Address = () => {


  return (
    <View style={s`flex-1 px-6`}>
      <Text>Componente Direcciones</Text>
    </View>
  );
};

const addressConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Direcciones",
  hideRightButton: true,
};

export default wrappedView(Address, addressConfigView);
