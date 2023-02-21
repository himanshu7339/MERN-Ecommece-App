import { StyleSheet, Platform, StatusBar } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const color = {
  color1: "#c70049",
  color1_light: "rgba(277,25,99)",
  color1_light2: "rgba(199,0,73,0.8)",
  color2: "white",
  color3: "rgb(45,45,45)",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
};

export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: color.color2,
});

export const inputStyling = StyleSheet.create({
  marginVertical: 10,
  marginHorizontal: 20,
  height: 50,
  backgroundColor: Colors.color2,
});
