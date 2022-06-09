import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const Desenvolvedores = () => {
  return (
    <View style={styles.container}>
        <ImageBackground
            style={{ width: 85, height: 85 }}
            imageStyle={{ borderRadius: 100 }} 
            source={require('../../assets/profile/pp.png')}
          />
      <Text style={styles.nome}>Matheus Telles</Text>
      <Text style={styles.matricula}>201910992 </Text>
      <ImageBackground
            style={{ width: 85, height: 85 }}
            imageStyle={{ borderRadius: 100 }} 
            source={require('../../assets/profile/joao.png')}
          />
      <Text style={styles.nome}>João Vitor </Text>
      <Text style={styles.matricula}>201810330 </Text>
      <ImageBackground
            style={{ width: 85, height: 85 }}
            imageStyle={{ borderRadius: 100 }} 
            source={require('../../assets/profile/kelvyn.png')}
          />
      <Text style={styles.nome}>Kelvyn Telles</Text>
      <Text style={styles.matricula}>201910827 </Text>
    </View>
  )
}

export default Desenvolvedores

const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nome: {
        padding: 5,
        fontSize: 20,
    },
    matricula: {
        fontSize: 14,
        paddingBottom: 40,
    },
})