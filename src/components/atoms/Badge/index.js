import React from "react";
import { View, Text } from "react-native";
import { s } from "react-native-wind";

const Badge = ({ status, type }) => {
  const configBadge =
     {
        ...(status == "process" && {
          styles: s`bg-blue-200`,
          text: "En proceso",
        }),
        ...(status == "done" && {
          styles: s`bg-done`,
          text: "Terminada",
        }),
        ...(status == "pending" && {
          styles: s`bg-pending`,
          text: "Pendiente",
        }),
        ...(status == false && {
          styles: s`bg-enable`,
          text: "Habilitado",
        }),
        ...(status == true && {
          styles: s`bg-disabled`,
          text: "Bloqueado",
        }),
      };

  return (
    <View
      style={[
        s`rounded-lg justify-center items-center w-40 h-8 mb-2`,
        configBadge.styles,
      ]}
    >
      <Text style={s`text-black text-base`}>{configBadge.text}</Text>
    </View>
  );
};

export default Badge;
