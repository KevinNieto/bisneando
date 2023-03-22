import React from "react";
import { View, Text, Switch } from "react-native";
import { s } from "react-native-wind";

const RowConfig = ({ title, setOnToggle, value }) => {
  const toggleSwitch = () => {
    setOnToggle(!value);
  };

  return (
    <View style={s`w-full max-w-xs px-2 flex-row`}>
      <View style={s`w-3/5 mb-6`}>
        <Text style={s`font-bold text-base`}>{title}</Text>
      </View>
      <View style={s`w-2/5`}>
        <Switch
          trackColor={{ false: "#767577", true: "#0E0E64" }}
          thumbColor={value ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch()}
          value={value}
        />
      </View>
    </View>
  );
};

export default RowConfig;
