import React, { useState } from "react";
//import DialogInput from "react-native-dialog-input";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import wrappedView from "./../../../WrappedView";
import { SignInForm } from "./../../molecules";
// import auth from "@react-native-firebase/auth";
// import { savePhoneToken } from "./../../../commons/services";
// import {
//   setCurrentUser,
//   getPhoneToken,
//   getOneSignalToken,
// } from "./../../../commons/user";
// import { Actions } from "react-native-router-flux";

import { s } from "react-native-wind";

const SignIn = ({ navigation, showAlert, event }) => {
  //const { params } = navigation.state;
  //const [loading, setLoading] = useState(false);
  //const [isDialogVisible, setIsDialogVisble] = useState(false);
  //const [isCodeVisible, setIsCodeVisble] = useState(false);
  //const [email, setEmail] = useState(null);
  //const [password, setPassword] = useState(null);
  //const [confirm, setConfirm] = useState();

  // const showErrorMessage = (title, message) => {
  //   setLoading(false);
  //   setTimeout(() => {
  //     showAlert(title, message);
  //   }, 300);
  // };

  // const recoverPassword = async (userEmail) => {
  //   if (!userEmail) {
  //     showAlert("Importante", "Su correo es requerido\n");
  //   } else {
  //     try {
  //       setIsDialogVisble(false);
  //       const email = userEmail.trim();
  //       await auth().sendPasswordResetEmail(email);
  //       Alert.alert(
  //         "Se envió un correo a la dirección que usted ingresó",
  //         `${userEmail}`,
  //         [{ text: "Aceptar", onPress: () => openDialog(false) }],
  //         { cancelable: false }
  //       );
  //       setEmail(null);
  //     } catch (error) {
  //       if (error.code === 'auth/user-not-found') {
  //         setTimeout( 
  //           () => showAlert('Error: ', 'El correo no está registrado'),
  //          200);
  //       } else {
  //         setTimeout(
  //           () => showAlert('Error: ', 'Ocurrió un error inesperado, por favor inténtelo nuevamente'),
  //          200)
  //       }
  //       setEmail(userEmail);
  //     }
  //   }
  // };

  // const openDialog = (isShow) => {
  //   setIsDialogVisble(isShow);
  // };

  // const signIn = async (email, password, phoneNumber) => {
  //   setEmail(email);
  //   setPassword(password);
  //   setLoading(true);
  //   if (email) {
  //     try {
  //       const { user } = await auth().signInWithEmailAndPassword(
  //         email,
  //         password
  //       );
  //       setCurrentUser(user);
  //       Actions.placeholder();
  //       if (params.callback) {
  //         params.callback();
  //       }
  //       setTimeout(() => {
  //         if (event) event();
  //       }, 600);
  //     } catch (error) {
  //       if (error === "The email addrress is badly formated") {
  //         showErrorMessage("Error", "El correo eletrónico es inválido");
  //       } else if (
  //         error ==
  //         "Error: [auth/user-disabled] The user account has been disabled by an administrator."
  //       ) {
  //         showErrorMessage(
  //           "Advertencia",
  //           "Esta cuenta ha sido deshabilitada por un administrador"
  //         );
  //       } else {
  //         showErrorMessage(
  //           "Error",
  //           "El correo o su contraseña son incorrectos"
  //         );
  //       }
  //     } finally {
  //       setLoading(false);
  //       await savePhoneToken(getOneSignalToken());
  //     }
  //   } else {
  //     await signInWithPhone(phoneNumber, password);
  //   }
  // };

  // const signInWithPhone = async (phoneNumber, password) => {
  //   setLoading(true);
  //   try {
  //     const conf = await auth().signInWithPhoneNumber(`+504 ${phoneNumber}`);
  //     const dataUser = await auth().currentUser;
  //     if (dataUser) {
  //       await verificationUser(dataUser, password);
  //     } else {
  //       setConfirm(conf);
  //       setIsCodeVisble(true);
  //     }
  //   } catch (error) {
  //     if (error.code === "auth/invalid-phone-number") {
  //       showErrorMessage("Error", "El número es inválido");
  //     } else {
  //       showErrorMessage("Error", "El número o su contraseña son incorrectos");
  //     }
  //   }
  //   setLoading(false);
  // };

  // const verificationUser = async (user, password) => {
  //   try {
  //     if (user.email) {
  //       const data = await auth().signInWithEmailAndPassword(
  //         user.email,
  //         password
  //       );
  //       setCurrentUser(data.user);
  //       Actions.placeholder();
  //       if (params.callback) {
  //         params.callback();
  //       }
  //       setTimeout(() => {
  //         if (event) event();
  //       }, 600);
  //       setIsCodeVisble(false);
  //     } else {
  //       await auth().signOut();
  //       showErrorMessage("Error", "El número o su contraseña son incorrectos");
  //     }
  //   } catch (error) {
  //     showErrorMessage("Error", "El número o su contraseña son incorrectos");

  //     await auth().signOut();
  //   }
  // };

  // const confirmCode = async (value) => {
  //   setLoading(true);
  //   try {
  //     const { user } = await confirm?.confirm(value);
  //     if (user.email) {
  //       try {
  //         const data = await auth().signInWithEmailAndPassword(
  //           user.email,
  //           password
  //         );

  //         setCurrentUser(data.user);
  //         Actions.placeholder();
  //         if (params.callback) {
  //           params.callback();
  //         }
  //         setTimeout(() => {
  //           if (event) event();
  //         }, 600);
  //         setIsCodeVisble(false);
  //       } catch (error) {
  //         showErrorMessage(
  //           "Error",
  //           "El número o su contraseña son incorrectos"
  //         );

  //         await auth().signOut();
  //       }
  //     } else {
  //       await auth().signOut();
  //       showErrorMessage("Error", "El número o su contraseña son incorrectos");
  //     }
  //   } catch (error) {
  //     showErrorMessage("Error", "El código es invalido.");
  //     await auth().signOut();
  //   }
  //   setIsCodeVisble(false);
  //   setLoading(false);
  // };

  return (
    // Login
    <View style={s`w-full max-w-xs shadow-md`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s`justify-center`}
      >
        {/* <DialogInput
          isDialogVisible={isDialogVisible}
          title="Restablecer su contraseña"
          initValueTextInput={email}
          submitText="Restablecer"
          message="Ingrese la dirección de correo electrónico de su cuenta."
          hintInput="Ingrese su correo"
          //submitInput={recoverPassword}
          cancelText="Cancelar"
          closeDialog={() => {
            openDialog(false);
          }}
        />
        <DialogInput
          isDialogVisible={isCodeVisible}
          title="Ingrese Código"
          submitText="Continuar"
          message="Ingrese el código que se envió a su número telefónico."
          hintInput="Ingrese su codigo"
          submitInput={(text) => {
            confirmCode(text);
          }}
          cancelText="Cancelar"
          closeDialog={() => {
            setIsCodeVisble(false);
          }}
        /> */}
        <View style={s`bg-white rounded px-8 pt-8 pb-8`}>
          <Image
            style={s`w-11/12 h-24 mb-12 self-center`}
            source={require("./../../../imgs/bisneando-cuadrado-trasnparente.png")}
            resizeMode="contain"
          />
          <View>
            <Text
              style={s`text-blue-800 font-bold text-base text-center mb-6`}
            >
              ¡Bienvenido a la app de Afiliados!
            </Text>
          </View>
          <SignInForm
            //submit={signIn}
            // loading={loading}
            // openDialog={openDialog}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const signInConfigView = {
  isForm: true,
};

export default wrappedView(SignIn, signInConfigView);
