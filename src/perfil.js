import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//yrdyr

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>home!</Text>
      </View>
    );
  }
        
function Perfil({ navigation }) {
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Perfil</Text>

    </View>
);
}
  
export default function Home() {
    
    function MyTabs() {
        return (
          <Tab.Navigator screenOptions={{headerShown: false }}>
            <Tab.Screen name="Perfil" component={Perfil} />
            <Tab.Screen name="Inicio" component={HomeScreen} />
          </Tab.Navigator>
        );
      }

    return (
        <MyTabs />
    );
  }
  
  