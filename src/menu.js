import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    <TouchableOpacity  style={styles.botaoGenerico}>
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