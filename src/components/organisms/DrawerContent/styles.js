import { StyleSheet, Platform } from "react-native";
import { THEME } from "./../../../styles";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.blackColor,
  },
  brandContainer: {
    backgroundColor: THEME.whiteColor,
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 10 : 0,
  },
  countryName: { fontWeight: "bold", fontSize: 10, color: "white" },
  scrollViewContainer: { backgroundColor: THEME.whiteColor, flex: 5.2 },
  menuContainer: {
    flex: 1,
  },
  col2: {
    flex: 4,
    justifyContent: "center",
    borderBottomWidth: 2,
    paddingHorizontal: 10,
  },
  icon: {
    alignSelf: "flex-start",
    fontSize: 22,
    color: "white",
  },
  IconAccount: {
    fontSize: 30,
    color: "white",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subTitle: {
    fontSize: 12.5,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  miProfileLabel: {
    color: "#FFFFFF",
  },
  header: {
    backgroundColor: THEME.greenColor,
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  textInformation: {
    fontSize: 20,
    color: THEME.whiteColor,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  rootLogin: {
    flexDirection: "row",
  },
  col1Login: {
    width: 25,
  },
  col2Login: {
    flex: 1,
  },
  selectView: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectCountryButton: {
    height: 40,
    marginTop: 5,
  },
  buttonBorder: {
    padding: 0,
    borderColor: "#393939",
  },
  root: {
    flexDirection: "row",
    height: 60,
  },
  col1: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  col2: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
    fontSize: 28,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
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
