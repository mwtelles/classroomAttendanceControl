import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

import TabNavigator from '../../../navigation/TabNavigator'

export default function Relatorio() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#803031" barStyle='light-content' />
            <TabNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})
