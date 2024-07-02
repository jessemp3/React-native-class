import { useNavigation } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import NavButton from "../Components/NavButton";
import Container from "../Components/Container";
import Title from "../Components/Title";

export default function ScrollViewScreen() {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Title>ScrollView</Title>
      <NavButton text="Voltar" onPress={navigateBack} />
      <ScrollView>
        <Text style={styles.item}>
          1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consectetur corporis debitis natus rerum? Facere magni enim non hic
          optio aliquid corporis modi repellat quod quos vero ut adipisci
          exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
          inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
          aliquam.
        </Text>
        <Text style={styles.item}>
          2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consectetur corporis debitis natus rerum? Facere magni enim non hic
          optio aliquid corporis modi repellat quod quos vero ut adipisci
          exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
          inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
          aliquam.
        </Text>
        <Text style={styles.item}>
          3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consectetur corporis debitis natus rerum? Facere magni enim non hic
          optio aliquid corporis modi repellat quod quos vero ut adipisci
          exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
          inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
          aliquam.
        </Text>
        <Text style={styles.item}>
          4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consectetur corporis debitis natus rerum? Facere magni enim non hic
          optio aliquid corporis modi repellat quod quos vero ut adipisci
          exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
          inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
          aliquam.
        </Text>
        <Text style={styles.item}>
          5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consectetur corporis debitis natus rerum? Facere magni enim non hic
          optio aliquid corporis modi repellat quod quos vero ut adipisci
          exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
          inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
          aliquam.
        </Text>
        <Text style={styles.item}>
          6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consectetur corporis debitis natus rerum? Facere magni enim non hic
          optio aliquid corporis modi repellat quod quos vero ut adipisci
          exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
          inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
          aliquam.
        </Text>
        <Text style={styles.item}>
          7 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consectetur corporis debitis natus rerum? Facere magni enim non hic
          optio aliquid corporis modi repellat quod quos vero ut adipisci
          exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
          inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
          aliquam.
        </Text>
        <Text style={styles.item}>
          8 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consectetur corporis debitis natus rerum? Facere magni enim non hic
          optio aliquid corporis modi repellat quod quos vero ut adipisci
          exercitationem iure sed molestiae totam, maxime voluptatum ipsam a ad
          inventore quae quis! Soluta quisquam odio magnam veniam, quae dicta
          aliquam.
        </Text>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    marginTop: 16,
  },
});
