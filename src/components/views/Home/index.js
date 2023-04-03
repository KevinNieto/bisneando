import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";
import { GridProducts } from "../../organisms";

const Home = () => {


  return (
    <View style={s`flex-1 px-6`}>
      <GridProducts/>
      <GridProducts/>
      <GridProducts/>

    </View>
  );
};

const homeConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Bienvenido a Bisneando!",
  hideRightButton: true,
};

export default wrappedView(Home, homeConfigView);
