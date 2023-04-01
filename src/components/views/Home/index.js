import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";

const Home = () => {


  return (
    <View style={s`flex-1 px-6`}>
      <ItemList type={"shipments"}/>

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
