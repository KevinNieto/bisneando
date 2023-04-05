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

const IncrementButton = ({
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

  return  (
    <TouchableOpacity
      disabled={disabled || loading || !event}
      onPress={onPress}
      style={style}
    > 
      <View style={[s`flex-row`, containerStyles]}>
        
          <Icon
            name={iconName}
            style={s` text-lg text-icon-input`}
          />
        <Text style={labelStyles}>{title}</Text>
      </View>
      
    </TouchableOpacity>
  );
};

export default IncrementButton;
