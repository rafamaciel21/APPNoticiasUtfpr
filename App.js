import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import Login from './src/login';
import Home from './src/home';
import Cadastro from './src/cadastro';
import Menu from './src/menu';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MyStack() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}

/*
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false }}>
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Sair" component={Login} />
    </Tab.Navigator>
  );
}
*/
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

