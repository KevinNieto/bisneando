import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { THEME } from "./../../../styles";
import { s } from "react-native-wind";

const ButtonWrapper = ({
  title,
  loading,
  disabled,
  event,
  style,
  labelStyles,
  iconName,
  source,
  containerStyles,
}) => {
  onPress = () => {
    event();
  };

  return loading ? (
    <View style={s`w-full h-12 flex-row justify-center`}>
      <ActivityIndicator size="large" color={THEME.bisneando.blue} />
      <Text
        style={s`text-gray-800 self-center font-bold text-sm ml-3`}
      >
        Espere un momento...
      </Text>
    </View>
  ) : (
    <TouchableOpacity
      disabled={disabled || loading || !event}
      onPress={onPress}
      style={style}
    >
      {source ? (
        <ImageBackground
          source={source}
          style={s`h-4 w-4`}
          imageStyle={s`rounded-md`}
          resizeMode="stretch"
        >
          <Text style={labelStyles}>{title}</Text>
          {iconName && (
            <Icon
              name={iconName}
              style={styles.icon}
              size={height * 0.8}
              color={THEME.whiteColor}
            />
          )}
        </ImageBackground>
      ) : (
        <View style={[s`rounded-md flex-row`, containerStyles]}>
          {iconName && (
            <Icon
              name={iconName}
              style={s`self-center pl-1 text-xl text-icon-input`}
            />
          )}
          <Text style={labelStyles}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonWrapper;
