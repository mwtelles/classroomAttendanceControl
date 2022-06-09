import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Turmas() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Pagina Lista de Turmas</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})
