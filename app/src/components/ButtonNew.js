import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons'

export default function ButtonNew( { size, color, focused}) {
    return (
        <View style={[styles.container, { backgroundColor: focused ? '#fff' : '#803031' }]}>
            <Entypo name="plus" color={color} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#803031',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    }
})