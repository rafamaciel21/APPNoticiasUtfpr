import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';




import logo from './assets/logos/logo-curso-fundo-transp.png';

///import {Login} from './screns/login';


// home 
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>home!</Text>
    </View>
  );
}


function Perfil({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil</Text>

    </View>
  );
}

function Login({ navigation }) {

  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [botao, setBotao] = useState(true);

  const focusComp = useRef()



  useEffect(() => {
    setNome('')
    focusComp.current.focus()
  }, [])

  useEffect(() => {
    if (password !== '') {
      setBotao(false)
    } else {
      setBotao(true)
    }

  }, [password, nome])

  function validaCampos() {
    if (nome == '' || password == '') {
      alert('Preencha todos os campos')
    } else {
      return navigation.navigate('Inicio');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Image source={logo} style={styles.imagem} />
      <TextInput style={styles.input} value={nome} placeholder='usuario' onChangeText={setNome} />
      <TextInput style={styles.input} value={password} placeholder='senha' onChangeText={setPassword} ref={focusComp} secureTextEntry />
      <Text style={styles.texto}>Olá Faça seu login</Text>
      <Button title='Entrar' onPress={validaCampos} color='blue' disabled={botao} />
      <StatusBar style="auto" />
    </View>
  );

}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Sair" component={Login} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
    height: 200,
    position: "relative",
    resizeMode: 'contain',
  }
 
});
