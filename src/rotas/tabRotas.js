import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../paginas/home'
import Sobre from '../paginas/sobre'
import Contato from '../paginas/contato'
import StackRotas from './stackRotas'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons'; 



const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
        initialRouteName='Home Stack'
        screenOptions={{
          headerShown:false,
          tabBarActiveTintColor:'yellow',
          tabBarStyle:{
            backgroundColor: 'black'
          }
        }}
      >
        <Tab.Screen name = 'Home Stack' 
        component = {StackRotas}
        options = {{
          tabBarIcon: ({color, size}) => {
            return <Entypo name="home" size={size} color={color} />
          }
        }}
        ></Tab.Screen>
        <Tab.Screen name = 'CONTATO' 
        component = {Contato}
        options = {{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="contact-page" size={size} color={color} />
          }
        }}
        ></Tab.Screen>
        <Tab.Screen name = 'SOBRE' 
        component = {Sobre}
        options = {{
          tabBarIcon: ({color, size}) => {
            return <Entypo name="info-with-circle" size={size} color={color} />
          }
        }}
        ></Tab.Screen>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
