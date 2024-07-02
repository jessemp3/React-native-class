import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import NavButton from '../Components/NavButton';
import Container from '../Components/Container';
import Title from '../Components/Title';
import StyledTitle from '../Components/StyledTitle';

export default function HomeScreen() {
    const navigation = useNavigation()

  const ToNavigationScreen = () => {
    navigation.navigate('Navigation')
  }

  const toScrollViewScreen = () => {
    navigation.navigate('ScrollView')
  }

  const toFlatListScree = () => {
    navigation.navigate('FlatList')
  }

  const toStyledComponentsScreen = () => {
    navigation.navigate('Styled')
  }

  const toApiScreen = () => {
    navigation.navigate('API')
  }
  
  return (
      <Container>
      <StyledTitle>Olá , Mundo !</StyledTitle>
      <StatusBar style="auto" />
      <NavButton text='Aula de Navegação' onPress={ToNavigationScreen}/>
      <NavButton text='Aula de ScrollView' onPress={toScrollViewScreen}/>
      <NavButton text='Aula de FlatList' onPress={toFlatListScree}/>
      <NavButton text="Aula de Styled Components" onPress={toStyledComponentsScreen} />
      <NavButton text="Aula de Consumo de APIs" onPress={toApiScreen} />
      </Container>
  )
}
