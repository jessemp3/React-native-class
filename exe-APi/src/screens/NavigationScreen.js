import { useNavigation } from "@react-navigation/native";
import NavButton from "../Components/NavButton";
import Container from "../Components/Container";
import Title from "../Components/Title";

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

