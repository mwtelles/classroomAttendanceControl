import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeProfessor from '../pages/Professor/HomeProfessor'
import PerfilProfessor from '../pages/Professor/PerfilProfessor'
import CadastrarAluno from '../pages/Professor/CadastrarAluno'

import ButtonNew from '../components/ButtonNew'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Perfil: 'account',
          };
    
          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
        tabBarStyle: {
            backgroundColor: '#121212',
            borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: '#803031',
        tabBarInactiveTintColor: '#fff',
        tabBarItemStyle: {
            paddingBottom:5,
            paddingTop:5,
        }
      })}>
        <Tab.Screen name='Home' component={HomeProfessor}  options={{ headerShown: false }}/>
        <Tab.Screen name='CadastrarAluno' component={CadastrarAluno} options={{ 
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => (<ButtonNew size={size} color={color} focused={focused} />) }}/>
        <Tab.Screen name='Perfil' component={PerfilProfessor} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator