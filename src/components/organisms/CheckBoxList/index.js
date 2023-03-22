// Utilities
import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "native-base";
import { CheckBox } from "../../molecules";
import { TextInput } from "../../atoms";
import { s } from "react-native-wind";

const CheckBoxList = ({ data, handleChangeCheckBox, setReasonsData }) => {

  const finalIndex = data.length - 1;

  const renderCheckBox = () =>
    data.map((item, key) => (
      <CheckBox
        key={key}
        id={key}
        title={item.label}
        index={key}
        value={item.value == undefined ? false : item.value}
        onValueChange={handleChangeCheckBox}
        object={data}
        item={item}
      />
    ));

  return (
    <View style={s`flex-1 mt-3 items-center`}>
      <View style={s`flex-1 flex-row justify-between flex-wrap`}>{renderCheckBox()}</View>
      {data[finalIndex].value == true && (
          <TextInput
            id={finalIndex}
            placeholder="Otros"
            onChange={(text) => handleChangeCheckBox(null, true, 12, data, text)}
            containerStyles={s`w-full mt-2`}
          />
      )}
    </View>
  );
};

export default CheckBoxList;

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    marginTop: 10,
    paddingLeft: "2%",
    alignItems: "center",
    backgroundColor: "red"
  },
  containerContent: {
    flex: 1,
    width: "85%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  titleStyle: {
    color: "rgba(56, 73, 186,0.7)",
    fontWeight: "bold",
    alignSelf: "flex-start",
    textAlign: "left",
    paddingBottom: 9,
  },
});
