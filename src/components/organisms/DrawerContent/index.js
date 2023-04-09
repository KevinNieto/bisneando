import React, { useContext, useState, useEffect } from "react";
import { View, ScrollView, Image, SafeAreaView } from "react-native";
import { getMenuDrawer } from "./../../../static/drawer";
// import styles from "./styles";
// import { AuthUserContext } from "../../../contexts/authUserProvider";
// import { globalStyles } from "../../../styles";
import { s } from "react-native-wind";
import { DrawerMenuItem, DrawerTop } from "../../atoms";

const DrawerContent = () => {
  const MENU = getMenuDrawer();
  // const AuthUser = useContext(AuthUserContext);
  // const { isAuthenticated, email, fullName, role } = AuthUser;
  //PROVISIONAL
  const role  = "all"; 
  
  useEffect(() => {}, []);

  return (
    <View style={s`h-full bg-white`}>
      <ScrollView
        style={s`h-full flex-1`}
        showsVerticalScrollIndicator={false}
      >
        <DrawerTop/>
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
    </View>
  );
};

export default DrawerContent;
