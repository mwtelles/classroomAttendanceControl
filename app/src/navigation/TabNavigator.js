import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeProfessor from '../pages/Professor/HomeProfessor'
import PerfilProfessor from '../pages/Professor/PerfilProfessor'
import CadastrarAluno from '../pages/Professor/CadastrarAluno'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            Perfil: 'account',
            CadastrarAluno: 'account',
          };
    
          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })}>
        <Tab.Screen name='Home' component={HomeProfessor} options={{ headerShown: false }}/>
        <Tab.Screen name='Perfil' component={PerfilProfessor} options={{ headerShown: false }}/>
        <Tab.Screen name='CadastrarAluno' component={CadastrarAluno} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator