import React from "react";
import { Actions } from "react-native-router-flux";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ShoppingCartButton } from "./../../atoms";
import { THEME } from "../../../styles";
const LogoImage = require("../../../imgs/bisneando-transparente.png");
import styles from "./styles";
import { s } from "react-native-wind";

// import { NavBarContext } from "../../../contexts/NavBarProvider";

const NavBar = ({ showSideMenu, hideRightButton }) => {
  // const { setShowModal, showModal } = useContext(NavBarContext);

  // const goToBack = () => {
  //   Actions.pop();
  // };

  const openDrawer = () => {
    Actions.drawerOpen();
  };

  const openCart = () => {
    Actions.cart();
  };

  return (
    <View style={s`flex bg-amber-400 flex-row  h-16`}>
        
        <TouchableOpacity
          onPress={openDrawer}
          style={s`flex justify-center px-5`}
        >
          <Icon style={s`text-4xl text-primary`} name="menu" />

        </TouchableOpacity>
      

        <View style={s`flex-1 justify-center items-center`}>
          <Image
            style={s`w-8/12 h-11 self-center`}
            source={LogoImage}
            resizeMode="contain"
          />
        </View>


        <View style={s`flex justify-center pt-2 pl-5 pr-5`}>
          <TouchableOpacity 
            onPress={openCart}
          >
            <Icon
              name="cart"
              style={s`text-4xl text-primary`}
            />
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

export default NavBar;
