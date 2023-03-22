import React, { useContext, useState, useEffect } from "react";
import { View, ScrollView, Image, SafeAreaView } from "react-native";
import { getMenuDrawer } from "./../../../static/drawer";
// import styles from "./styles";
// import { AuthUserContext } from "../../../contexts/authUserProvider";
// import { globalStyles } from "../../../styles";
import { s } from "react-native-wind";
import { DrawerMenuItem } from "../../atoms";

const DrawerContent = () => {
  const MENU = getMenuDrawer();
  console.log("MENU:" , MENU);
  // const AuthUser = useContext(AuthUserContext);
  // const { isAuthenticated, email, fullName, role } = AuthUser;
  //PROVISIONAL
  const role  = "all"; 
  
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={s`h-full bg-white`}>
      <ScrollView
        style={s`h-full flex-1`}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={s`w-8/12 h-20 my-6 self-center`}
          resizeMode="contain"
          source={require("./../../../imgs/bisneando-cuadrado-trasnparente.png")}
        />
        {MENU.map((menuItem) => {
         if (role === "all") {
           return (
             (menuItem.role == "all" ) && (
               <DrawerMenuItem {...menuItem} />
             )
           );
         } 
        })}

       

      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;
