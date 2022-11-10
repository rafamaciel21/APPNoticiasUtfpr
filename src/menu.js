import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Linking,Text,TouchableOpacity, KeyboardAvoidingView } from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default function Menu({ navigation }) {
  const logout = () => {
    navigation.navigate("Login")
  }
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}>
    <TouchableOpacity  onPress={logout} style={styles.botaoLogout}>
            <Text style={styles.textBotaoLogout}>Logout</Text>
        </TouchableOpacity>
    <TouchableOpacity  onPress={ () => {Linking.openURL('https://sei.utfpr.edu.br/sei/publicacoes/controlador_publicacoes.php?acao=publicacao_visualizar&id_documento=2735584&id_orgao_publicacao=0')}} style={styles.botaoGenerico}>
            <Text style={styles.textBotaoGenerico}>Calendario Universitario</Text>
        </TouchableOpacity>
    <TouchableOpacity  style={styles.botaoGenerico}>
            <Text style={styles.textBotaoGenerico}>Cardápio RU</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.botaoGenerico}>
            <Text style={styles.textBotaoGenerico}>Mapas das Salas</Text>
        </TouchableOpacity>
        
    </KeyboardAvoidingView>
  );
}