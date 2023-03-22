import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";

const Historicals = () => {


  return (
    <View style={s`flex-1 px-6`}>
      <Text>Componente Historial</Text>
    </View>
  );
};

const historicalsConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Historial",
  hideRightButton: true,
};

export default wrappedView(Historicals, historicalsConfigView);
