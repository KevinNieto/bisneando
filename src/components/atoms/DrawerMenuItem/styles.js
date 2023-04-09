import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    height: 60,
  },
  col1: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  col2: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
    fontSize: 35,
  },
  title: {
    fontSize: 15,
    fontWeight: "300",
    color: "#000000",
  },
  subTitle: {
    fontSize: 10,
    color: "#f4f4f4",
  },
  iconImg: {
    width: 23,
    height: 23,
  },
});

export default styles;
