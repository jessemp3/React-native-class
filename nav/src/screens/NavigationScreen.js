import { useNavigation } from "@react-navigation/native";
import NavButton from "../components/NavButton";
import Container from "../components/Container";
import Title from "../components/Title";

export default function NavigationScreen() {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Title>Aula de Navegação</Title>
      <NavButton text="Voltar" onPress={navigateBack} />
    </Container>
  );
}

