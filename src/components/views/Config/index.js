import React  from "react";
import { View, Text} from "react-native";
import wrappedView from "../../../WrappedView";
import { s } from "react-native-wind";
import { RowConfig } from "../../atoms";
import { ChangePassForm } from "../../molecules";

const Config = () => {


  return (
    <View style={s`w-full items-center mt-10`}>
      <RowConfig
        title="Rastreo"
      />
      <ChangePassForm />
    </View>
  );
};

const configView = {
  showHeader: true,
  showSideMenu: true,
  heading: "Configuración",
  hideRightButton: true,
};

export default wrappedView(Config, configView);
