import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Login from './src/login';
import Home from './src/home';
import Cadastro from './src/cadastro';
import Menu from './src/menu';
import Perfil from './src/perfil';
import Feed from './src/feed';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cadastro" component={Cadastro}  />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

