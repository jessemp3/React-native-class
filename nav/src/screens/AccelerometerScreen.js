import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import StyledButton from "../components/StyledButton";
import StyledTitle from "../components/StyledTitle";
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import { Accelerometer } from 'expo-sensors';

export default function UsingApisScreen() {
  const navigation = useNavigation()
	const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 })
	const [subscription, setSubscription] = useState(null)

	const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setAccelerometerData));
  };

  const _unsubscribe = () => {
    if (subscription) subscription.remove();
    setSubscription(null);
  };

	useEffect(() => {
		_subscribe();
		return () => _unsubscribe(); // o return do useEffect serve para "limpeza"
	}, []); // um array de dependências vazio para que ele só seja executado uma vez

  const navigateBack = () => navigation.goBack()

// ...

return (
  <Container>
    <StyledTitle>Periféricos</StyledTitle>
    <StyledButton onPress={navigateBack}>Voltar</StyledButton>
    <View style={accelerometerData.x < 1 ? styles.container : styles.altContainer}>
      <Text style={styles.text}>Acelerômetro</Text>
      <Text>(em g's sendo 1g = 9.81 m/s²)</Text>
      <Text style={styles.text}>x: {accelerometerData.x}</Text>
      <Text style={styles.text}>y: {accelerometerData.y}</Text>
      <Text style={styles.text}>z: {accelerometerData.z}</Text>
      <StyledButton onPress={subscription ? _unsubscribe : _subscribe}>
        {subscription ? 'Ativado' : 'Desativado'}
      </StyledButton>
    </View>
  </Container>
)
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},
altContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f64348'
},
text: {
  fontSize: 20
}
})