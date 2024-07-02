import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import StyledButton from "../components/StyledButton";
import StyledTitle from "../components/StyledTitle";
import * as Device from "react-native"
import { Vibration } from "react-native";

export default function DeviceScreen() {
  const navigation = useNavigation()

  const navigateBack = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <StyledTitle>Consumindo APIs</StyledTitle>
      <StyledButton onPress={navigateBack}>Voltar</StyledButton>
	    <StyledButton onPress={() => Vibration.vibrate()}>Vibrar</StyledButton>
    </Container>
  )
}