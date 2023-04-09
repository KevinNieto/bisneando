import React from "react";
import { View, Text } from "react-native";
import { s } from "react-native-wind";

const Badge = ({ status, type }) => {
  const configBadge =
     {
        ...(status == "process" && {
          styles: s`bg-green-200`,
          text: "EN PROCESO",
        }),
        ...(status == "done" && {
          styles: s`bg-gray-200`,
          text: "ENTREGADO",
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
        s`rounded-lg justify-center items-center w-full px-2 h-7 mb-2`,
        configBadge.styles,
      ]}
    >
      <Text style={s`text-black text-sm`}>{configBadge.text}</Text>
    </View>
  );
};

export default Badge;
