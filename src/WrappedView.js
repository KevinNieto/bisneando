import React, { useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  ImageBackground,
} from "react-native";
//import { NavigationEvents } from "react-navigation";

import NavBar from "./components/molecules/NavBar";
//import { showAlert } from "./commons/notifications";
//import { getCartLength } from "./commons/localstorage";

import { s } from "react-native-wind";

//import { Button } from "./components/atoms";

const wrappedView = (WrappedComponent, config) => ({ children, ...props }) => {
  const [productsNumber, setProductsNumber] = useState(0);
  const {
    isForm,
    heading,
    showHeader,
    showShoppingCart,
    showSideMenu,
    showModal,
    showAdd,
    showDelete,
    hideRightButton,
  } = config;
  //const { title } = props.navigation.state.params;

  // const onWillFocus = async () => {
  //   setProductsNumber(await getCartLength());
  // };

    return (
      <SafeAreaView style={s`h-full bg-amber-200`}>
      <View style={s`bg-gray-200 flex-1 `}>
        <NavBar
          // showShoppingCart={showShoppingCart}
          // showSideMenu={showSideMenu}
          // showModal={showModal}
          // productsNumber={productsNumber}
          // hideRightButton={hideRightButton}
        />
 {/* aqui modificar */}
        <View style={s`flex flex-row justify-between px-6 py-3`}>
            <Text style={s`text-2xl text-primary font-bold`}>
                {heading}
            </Text>
          {/* {showAdd && (
            <Button
              title="Agregar"
              labelStyles={tailwind("text-primary font-bold")}
              containerStyles={tailwind(
                "border-primary border justify-center items-center px-2 py-2"
              )}
            />
          )} */}
          {/* {showDelete && (
            <Button
              title="Bloquear"
              labelStyles={tailwind("text-block font-bold")}
              containerStyles={tailwind(
                "border-block border justify-center items-center px-2 py-2"
              )}
            />
          )} */}
        </View>

        <WrappedComponent
          {...props}
          // showAlert={showAlert}
          // productsNumber={productsNumber}
          // onWillFocus={onWillFocus}
        />
        {/* <NavigationEvents onWillFocus={onWillFocus} /> */}
      </View>
    </SafeAreaView>
    );
  }

export default wrappedView;
