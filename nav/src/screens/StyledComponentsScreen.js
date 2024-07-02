import StyledContainer from "../components/StyledContaine";
import StyledTitle from "../components/StyledTitle";
import StyledButton from "../components/StyledButton";
import { useNavigation } from "@react-navigation/native";

export default function StyledComponentsScreen() {

  const navigation = useNavigation()

  const navigateBack = () => {
    navigation.goBack()
  }

  return (
    <StyledContainer color="#f64348">
      <StyledTitle color="#1c1a1d">Styled Components</StyledTitle>
      <StyledButton bgColor="#fff" color="#1c1a1d" onPress={navigateBack}>
        Voltar
      </StyledButton>
    </StyledContainer>
  )
}