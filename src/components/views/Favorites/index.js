import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { ItemList } from "../../molecules";

const Favorites = () => {


  return (
    <View style={s`flex-1 px-6`}>
      <Text>Componente Favoritos</Text>
    </View>
  );
};

const favoritesConfigView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Favoritos",
  hideRightButton: true,
};

export default wrappedView(Favorites, favoritesConfigView);
