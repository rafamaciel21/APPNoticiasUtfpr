import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/logos/user_image.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//yrdyr

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>

/*
<View style={styles.container}>
<StatusBar style='auto' />
<Image source={logo} style={styles.imagem} />
<Text style={styles.texto}>Olá, Faça seu login</Text>
<TextInput style={styles.input} value={nome} placeholder='usuario' onChangeText={setNome} />
<TextInput style={styles.input} value={password} placeholder='senha' onChangeText={setPassword} ref={focusComp} secureTextEntry />
<Button title='Entrar' onPress={validaCampos} color='blue' disabled={botao} />
<Button title='Cadastrar-se' onPress={cadastro} color='blue'  />
<StatusBar style="auto" />
</View*/
    );
}

function Perfil({ navigation }) {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={logo} style={styles.imagem} />
      <Button title='Alterar Imagem' color='blue'/>
      </View>
  );
}

function Menu({ navigation }) {
  const logout = () => {
    navigation.navigate("Login")
  }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title='Logout' onPress={logout}  color='blue'/>
    </View>
  );
}
        
  
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={Perfil} options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Home" component={HomeScreen}options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ballot-outline" color={color} size={size} />
          ),
        }}
        />
      <Tab.Screen name="Menu" component={Menu}options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
        />
    </Tab.Navigator>
  );
}

export default function Home() {
  return (
      <MyTabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,

  },
  input: {
    borderColor: '#2E2E2E',
    borderWidth: 2,
    width: 240,
    margin: 20,
    padding: 10,
    backgroundColor: 'white',

  },
  imagem: {
    width: '100%',
    height: 210,
    position: "relative",
    resizeMode: 'contain',
    margintop: 5,
  },

});