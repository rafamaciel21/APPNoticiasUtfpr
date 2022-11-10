import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList,ActivityIndicator,Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useEffect, useRef, useState } from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import logo from '../assets/logos/user_image.png';
import styles from '../styles/styles';
import firebase from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

    

  
export default function Perfil({}) {
 //const {idUser} = route.params; 
  //alert(JSON.stringify(route.params?.idUser));
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [ra, setRa] = useState('');
  const user = firebase.auth().currentUser;
  
useEffect(() => {
  
  carregaDados();


   function carregaDados(){
  
  // const userId = firebase.database().ref();

   // esse de baixo funciona
    // Leitura de dados
   firebase.database().ref('/usuarios/'+user.uid).on('value', (snapshot) => {
   //firebase.database().ref(`usuarios/-NEYv99bO8fJy9lrtMJ3`).on('value', (snapshot) => {
          setNome(snapshot.val().nome);
          setSobrenome(snapshot.val().sobrenome);
          setEmail(snapshot.val().email)
          setRa(snapshot.val().ra)

      
      
      })
    }

    
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

   
