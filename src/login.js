
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import logo from '../assets/logos/logo-curso-fundo-transp.png';
import styles from '../styles/styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { circle } from 'react-native/Libraries/Animated/Easing';
import firebase from './firebaseConfig';


export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
      
        let user = userCredential.user;
        navigation.navigate("Home", { idUser: user.uid }) // aqui vai passar o usuario que vamos estar conectando, sera usado mais pra frente 
        ///navigation.navigate("Home")
      })
      .catch((error) => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });

  }

  const focusComp = useRef()

  const logar = () => {
    navigation.navigate("Home")
  }

  const cadastro = () => {
    navigation.navigate("Cadastro")
  }

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        navigation.navigate("Home", {idUser: user.uid})
      } else {
        setEmail('')
        setPassword('')
        focusComp.current.focus()
      }
    });

    
  }, [])


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}>
      <StatusBar style='auto' />
      <Image source={logo} style={styles.imagemLogin} />
      <Text style={styles.title}>
        Faça seu Login
      </Text>
      <TextInput style={styles.input} value={email} placeholder='E-mail' onChangeText={(text) => setEmail(text)} />
      <TextInput style={styles.input} value={password} placeholder='Senha' onChangeText={(text) => setPassword(text)} ref={focusComp} secureTextEntry={true} />
      {errorLogin === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
          <Text style={styles.warningAlert}>E-mail ou Senha inválidos!</Text>
        </View>
        :
        <View />
      }
      {email === "" || password === ""
        ?
        <TouchableOpacity disabled={true} style={styles.botaoLogin}>
          <Text style={styles.textBotaoLogin}>Login</Text>
        </TouchableOpacity>
        :
        <View>
          <TouchableOpacity style={styles.botaoLogin}
            onPress={loginFirebase}>
            <Text style={styles.textBotaoLogin}>Login</Text>
          </TouchableOpacity>

        </View>
      }

      <Text style={styles.textCadastroLogin}>Ainda não tem cadastro?
        <Text style={styles.linkCadastro} onPress={cadastro}>
          Clique aqui!
        </Text>
      </Text>
      <View style={{ height: 100 }} />
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );

}

