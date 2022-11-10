
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import logo from '../assets/logos/logo-curso-fundo-transp.png';
import styles from '../styles/styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from './firebaseConfig';



export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = async () => {

   await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
         navigation.navigate("Home")
      })
      .catch((error) => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });

  }

  const focusComp = useRef()

  const cadastro = () => {
    navigation.navigate("Cadastro")
  }
  
  // essa parte valida o ultimo login se tem o token e loga automaticamente o usuario.
  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          navigation.navigate("Home")    
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

