
import React from 'react';
import {useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScreenStack } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import home from './home';
import logo from '../assets/logos/logo-curso-fundo-transp.png';

export default function Login({ navigation }) {

    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [botao, setBotao] = useState(true);
  
    const focusComp = useRef()
  
    const logar = () => {
      navigation.navigate("Home")
    }
  
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
        alert('passou pelo login');
        logar();
      }
    }
 
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <Image source={logo} style={styles.imagem} />
        <Text style={styles.texto}>Olá, Faça seu login</Text>
        <TextInput style={styles.input} value={nome} placeholder='usuario' onChangeText={setNome} />
        <TextInput style={styles.input} value={password} placeholder='senha' onChangeText={setPassword} ref={focusComp} secureTextEntry />
        <Button title='Entrar' onPress={validaCampos} color='blue' disabled={botao} />
        <Button title='Cadastrar-se' onPress={validaCampos} color='blue' disabled={botao} />
        <StatusBar style="auto" />
      </View>
    );
  r
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
      height: 250,
      position: "relative",
      resizeMode: 'contain',
      margintop: 20,
    }
   
  });
  