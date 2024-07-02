import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import Container from "../components/Container";
import StyledButton from "../components/StyledButton";
import StyledTitle from "../components/StyledTitle";

export default function UsingApisScreen() {
  const [user, setUser] = useState({})

  const navigation = useNavigation()

  const navigateBack = () => {
    navigation.goBack()
  }

  const fetchGithubUser = async () => {
    const res = await axios.get('https://api.github.com/users/jessemp3')
    setUser(res.data)
  }

  useEffect(() => {
    fetchGithubUser()
  }, [])

  return (
    <Container>
      <StyledButton onPress={navigateBack}>Voltar</StyledButton>
      <StyledTitle>Consumindo APIs</StyledTitle>
      <Text style={styles.text}>{user.name}</Text>
			<Text>{user.bio}</Text>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
    </Container>
  )
}

const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'center',
    borderRadius: 999,
    height: 200,
    width: 200,
    marginVertical: 20
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center'
  }
})