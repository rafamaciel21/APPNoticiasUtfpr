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
          <Tab.Navigator>
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Perfil" component={Perfil} />
          </Tab.Navigator>
        );
      }

    return (
        <MyTabs />
    );
  }
  
  