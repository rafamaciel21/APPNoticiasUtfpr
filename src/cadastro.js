
import React from 'react';
import {useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScreenStack } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import home from './home';
import logo from '../assets/logos/logo-curso-fundo-transp.png';

export default function Cadastro({ navigation }) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [ra, setRa] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [botao, setBotao] = useState(true);
  
    const focusComp = useRef()
  
    const cancelar = () => {
        navigation.navigate("Login")
    }

    const telalogin = () => {
        navigation.navigate("Login")
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
      if (nome == '' || sobrenome == '' || email == '' || ra == '' || login == '' || password == '') {
        alert('É Obrigatório que todos os campos sejam informados!');
      } else {
        alert('Usuário cadastro com sucesso.');
        telalogin();
      }
    }
 
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <Text style={styles.texto}>Cadastre-se</Text>
        <Text style={styles.cadastro}>Nome</Text>
        <TextInput style={styles.input} value={nome} placeholder='Nome' onChangeText={setNome} />
        <TextInput style={styles.input} value={sobrenome} placeholder='Sobrenome' onChangeText={setSobrenome} />
        <TextInput style={styles.input} value={email} placeholder='E-mail' onChangeText={setEmail} />
        <TextInput style={styles.input} value={ra} placeholder='RA' onChangeText={setRa} />
        <TextInput style={styles.input} value={login} placeholder='Login' onChangeText={setLogin} />
        <TextInput style={styles.input} value={password} placeholder='senha' onChangeText={setPassword} ref={focusComp} secureTextEntry />
        <Button title='Cadastrar' onPress={validaCampos} color='blue' disabled={botao} />
        <Button title='Cancelar' onPress={cancelar} color='blue' />
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
      fontSize: 20
    },
    cadastro:{
        fontSize: 12,
    },
    input: {
      borderColor: '#2E2E2E',
      borderWidth: 2,
      width: 250,
      height: 40,
      margin: 10,
      padding: 10,
      backgroundColor: 'white',
  
    },
    imagem: {
      width: '100%',
      height: 250,
      position: "relative",
      resizeMode: 'contain',
      margintop: 10,
    }
   
  });
  