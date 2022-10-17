import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { FlatList,ActivityIndicator,Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/logos/user_image.png';
import styles from '../styles/styles';
import firebase from './firebaseConfig';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


  
export default function Perfil({navigation}) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [ra, setRa] = useState('');



useEffect(() => {

  async function carregaDados(){
    // Leitura de dados
    await firebase.database().ref('usuarios').on('value', (snapshot) => {
          setNome(snapshot.val().nome);
          setSobrenome(snapshot.val().sobrenome);
          setEmail(snapshot.val().email)
          setRa(snapshot.val().ra)
      
      })
    }

  carregaDados();

}, []);

return (
  <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Image source={logo} style={styles.imagemPerfil} />
  <TouchableOpacity style={styles.botaoGenerico}>
          <Text style={styles.textBotaoGenerico}>Alterar Imagem</Text>
        </TouchableOpacity>
  <Text style={styles.input}>Nome: {nome}</Text>
  <Text style={styles.input}>Sobrenome: {sobrenome}</Text>
  <Text style={styles.input}>E-mail: {email}</Text>
  <Text style={styles.input}>RA: {ra}</Text>

  </KeyboardAvoidingView>
);

}

   
