import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform ,Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/styles';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function Feed({ navigation }) {
    return (
        <KeyboardAvoidingView  
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
                <Text>
                    Aqui irá as noticias
                </Text>
        </KeyboardAvoidingView>
    );
}



