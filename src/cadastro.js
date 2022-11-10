
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import firebase from './firebaseConfig';
import styles from '../styles/styles';

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [ra, setRa] = useState('');
  const [password, setPassword] = useState('');
  const [botao, setBotao] = useState(true);
  const focusComp = useRef()
  const [camposEmBranco, setCamposEmBranco] = useState("");
  const [errorCadastro, setErrorCadastro] = useState("");
  const [key, setKey] = useState('');


  const register = async () => {

   await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
      
        let user = userCredential.user;
        setKey(user.uid);
        alert(user.uid);
        //cadastrarDados();
        //alert('Cadastro realizado com Sucesso!')
        //navigation.navigate("Login");

      let usuariosRef = firebase.database().ref('usuarios');
      usuariosRef.child(user.uid).set({
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      ra: ra,
      password: password

    });
    
      })
      .catch((error) => {
        setErrorCadastro(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      
      });
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

  }, [password, nome, email])

  function validaCampos() {
    if (nome == '' || sobrenome == '' || email == '' || ra == '' || password == '') {
      setCamposEmBranco(true)
    } else {
      register();
    }
  }


  // inserindo os dados ao banco
  //async function cadastrarDados() {
    //let usuariosRef = await firebase.database().ref('usuarios');
    //let key = usuariosRef.push().key;
    //usuariosRef.child(key).set({
      //nome: nome,
      // sobrenome: sobrenome,
      // email: email,
      // ra: ra,
      // password: password

   // });
    //return;


 // }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}>
      <Text style={styles.cadastro}>Informe os dados do cadastro</Text>
      <TextInput style={styles.input} value={nome} placeholder='Nome' onChangeText={setNome} />
      <TextInput style={styles.input} value={sobrenome} placeholder='Sobrenome' onChangeText={setSobrenome} />
      <TextInput style={styles.input} value={email} placeholder='E-mail' onChangeText={setEmail} />
      <TextInput style={styles.input} value={ra} placeholder='RA' onChangeText={setRa} />
      <TextInput style={styles.input} value={password} placeholder='Senha' onChangeText={setPassword} ref={focusComp} secureTextEntry />
      
        {camposEmBranco === true
          ?
          <View style={styles.contentAlert}>
            <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
            <Text style={styles.warningAlert}>Preencha todos os dados!</Text>
          </View>
          :
          <View />
        }
        {errorCadastro === true
          ?
          <View style={styles.contentAlert}>
            <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
            <Text style={styles.warningAlert}></Text>
          </View>
          :
          <TouchableOpacity onPress={validaCampos} disabled={botao} style={styles.botaoRegister}>
          <Text styles={styles.textBotaoRegister}>Cadastrar</Text>
        </TouchableOpacity>
        }
        <Text style={styles.login}>
            Já possui cadastro? 
          <Text style={styles.linkLogin} onPress={()=> navigation.navigate("Login")} >
            Login
          </Text>
        </Text>
        <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}


