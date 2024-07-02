import { StyleSheet, Text } from "react-native";

export default function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

const style = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "#f64348",
  },
});
