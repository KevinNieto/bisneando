import { StyleSheet, Platform, Dimensions } from "react-native";
import { THEME } from "../../../styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {},
  centerItems: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  col1: {
    flexDirection: "row",
    flex: 1,
  },
  col2: {
    width: 70,
  },
  title: { textAlign: "center" },
  icon: {
    marginLeft: 20,
  },
});

export default styles;
