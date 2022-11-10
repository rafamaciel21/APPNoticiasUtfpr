import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import Perfil from './perfil';
import Menu from './menu';
import Feed from './feed';

const Tab = createBottomTabNavigator();


export default function HomeScreen({ navigation }) {

    return (
      
      <Tab.Navigator>
          <Tab.Screen name="Feed" component={Feed} options={{
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="news" color={color} size={size} />
            ),
          }}
          />
          <Tab.Screen name="Perfil" component={Perfil} options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}/> 
         <Tab.Screen name="Menu" component={Menu}options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" color={color} size={size} />
          ),
        }}
        />
        
      </Tab.Navigator>

    );
}
