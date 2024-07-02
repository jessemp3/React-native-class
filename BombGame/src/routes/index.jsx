import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Routes() {

    const navigation = useNavigation();

    function handleNavToStart() {
      navigation.navigate("Start");
    }

    function handleNavToRules() {
      navigation.navigate("Rules");
    }


    return (
        <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Start" component={handleNavToStart} />
          <Stack.Screen name="Rules" component={handleNavToRules} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }