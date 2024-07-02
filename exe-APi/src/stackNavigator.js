import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import NavigationScreen from "./screens/NavigationScreen"
import ScrollViewScreen from "./screens/ScrollView"
import FlatListScreen from "./screens/FlatListScreen"
import StyledComponentsScreen from "./screens/StyledComponentsScreen"
import UsingApisScreen from "./screens/UsingApisScreen"

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Navigation" component={NavigationScreen} />
                <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
                <Stack.Screen name="FlatList" component={FlatListScreen} />
                <Stack.Screen name='Styled' component={StyledComponentsScreen}/>
                <Stack.Screen name="API" component={UsingApisScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}