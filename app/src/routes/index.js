import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'

import HomeProfessor from '../pages/Professor/HomeProfessor'
import PerfilProfessor from '../pages/Professor/PerfilProfessor'
import TabNavigator from '../navigation/TabNavigator';
import Alunos from '../pages/Professor/Alunos';

import Desenvolvedores from '../pages/Devs';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="HomeProfessor"
                component={TabNavigator}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PerfilProfessor"
                component={PerfilProfessor}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Alunos"
                component={Alunos}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Desenvolvedores"
                component={Desenvolvedores}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
