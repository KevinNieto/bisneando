import React from "react";
import { TextInput, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { s } from "react-native-wind";

const TextInputWrapper = ({
  placeholder,
  value,
  icon,
  messageError,
  onChange,
  maxLength,
  keyboardType,
  editable = true,
  error = false,
  secureTextEntry = false,
  autoCapitalize = autoCapitalize ? autoCapitalize : "characters",
  containerStyles,
  ...othersTextInputProps
}) => {
  const textInput = (
    <TextInput
      style={s`flex-1 h-12 bg-input pl-3 rounded-md`}
      value={value}
      onChangeText={onChange}
      maxLength={maxLength}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      editable={editable}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      {...othersTextInputProps}
    />
  );

  return (
    <>
      <View style={[s`rounded-md bg-input flex-row`, containerStyles]}>
        {icon ? (
          <Icon
            style={s`self-center pl-3 text-xl text-icon-input`}
            name={icon}
          />
        ) : null}
        {textInput}
      </View>
      {error ? (
        <Text style={s`text-red-500 text-xs italic`}>
          {messageError}
        </Text>
      ) : null}
    </>
  );
};

export default TextInputWrapper;
