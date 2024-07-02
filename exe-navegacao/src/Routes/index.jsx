import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import HomeScreen from '../pages/home/index'
import SettingsScreen from '../pages/settings/index';
import MessageScreen from '../pages/messages';

const Tab = createBottomTabNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
        <Tab.Navigator
        //  FORMA DE MUDAR OS ICONS
        // FONTE PARA OS ICONS SUPORTADOR > IONIC.IO
           screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              // SE ROTA FOR IFUAL A HOME , ICONE HOME SENÃO , ICONE HOME
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings';
              }else if(route.name === 'Messages'){
                iconName = focused ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses-outline'
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            // COMO MUDAR A COR DOS ICONS DEPENDENDO DO SEU ESTADOD DE CLICADO OU NÃO
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          {/* FORMA DE ADICONAR UM NOTIFICAÇÃO AO ICONS options={{tabBarBadge:1}} */}
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Messages" component={MessageScreen} options={{tabBarBadge:6}}/>
          <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });