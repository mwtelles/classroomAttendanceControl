import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
      <Text style={styles.title}>Matricula</Text>
      <TextInput 
        placeholder="Digite sua matricula..."
        style={styles.input}
      />

      <Text style={styles.title}>Senha</Text>
      <TextInput 
        placeholder="Senha..."
        autoComplete='password'
        style={styles.input}
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={ () => navigation.navigate('HomeProfessor')}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#803031'
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  containerForm: {
    backgroundColor: 'white',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#803031',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})