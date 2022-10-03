
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

    const cadastro = () => {
      navigation.navigate("Cadastro")
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
        <Text style={styles.texto}>Faça o Login</Text>
        <TextInput style={styles.input} value={nome} placeholder='Usuario' onChangeText={setNome} />
        <TextInput style={styles.input} value={password} placeholder='Senha' onChangeText={setPassword} ref={focusComp} secureTextEntry />
        <View style={styles.row}>
        <Button title='Entrar' onPress={validaCampos} color='blue' disabled={botao}/>
        <Button title='Cadastrar-se' onPress={cadastro} color='blue'  />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff8282',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'#fcf2f4',
    },
    input: {
      borderColor: '#2E2E2E',
      borderWidth: 2,
      fontWeight: 'bold',
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
      margintop: 10,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap", 
      margin: 20,
      padding: 10,
    }, 
   
  });
  