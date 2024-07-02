import { StyleSheet, View } from "react-native";

export default function Container({children}) {
  return (
      <View style={style.container}>{children}</View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginHorizontal: 3,
    marginVertical: 32,
  },
});
