import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "./../../atoms";
import { showAlert } from "./../../../commons/notifications";
import { s } from "react-native-wind";
import { Actions } from "react-native-router-flux";

const SignInForm = ({ submit, loading = false, openDialog }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // const onSubmit = () => {
  //   if (email) {
  //     if (password) {
  //       if (/^\d+$/.test(email)) {
  //         submit(null, password, email);
  //       } else {
  //         submit(email, password);
  //       }
  //     } else {
  //       showAlert("Importante", "La contraseña es requerida");
  //     }
  //   } else {
  //     showAlert("Importante", "El correo o numero es requerido");
  //   }
  // };

  return (
    <>
      <View style={s`mb-4`}>
        <TextInput
          value={null}
          onChange={setEmail}
          placeholder="Correo electrónico o numero"
          icon="email-outline"
          autoCapitalize="none"
          editable={!loading}
          autoCompleteType="email"
          messageError="Ingrese una dirección de correo válida"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </View>
      <View style={s`mb-4`}>
        <TextInput
          value={null}
          onChange={setPassword}
          placeholder="Contraseña"
          icon="lock-outline"
          autoCapitalize="none"
          editable={!loading}
          autoCompleteType="password"
          messageError="Ingrese una contraseña válida"
          textContentType="password"
          secureTextEntry={true}
        />
      </View>
      <View style={s`mb-12`}>
        <Button
          style={s`self-end`}
          labelStyles={s`text-right text-gray-700 font-semibold text-sm`}
          title="¿Olvidaste tu contraseña?"
          // event={() => {
          //   openDialog(true);
          // }}
        />
      </View>
      <View style={s`mb-4`}>
        <Button
          style={s`h-12 justify-center rounded-md`}
          disabled={loading}
          labelStyles={s`text-center text-white font-semibold text-sm`}
          source={require("../../../imgs/gradient-button.png")}
          title="Iniciar sesión"
          event={Actions.shipmentsView()}
          loading={loading}
        />
      </View>
    </>
  );
};

export default SignInForm;
