import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import * as LocalAuthentication from 'expo-local-authentication';
import HomeProfessor from '../Professor/HomeProfessor';
import Welcome from './Welcome';
import PerfilProfessor from '../Professor/PerfilProfessor';

export default function Index() {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter Password',
    });
    auth.then(result => {
      setIsAuthenticated(result.success);
      console.log(result);
    }
    );
  }

  return (
    <View style={styles.container}>
      { isAuthenticated
        ? <HomeProfessor />
        : <Welcome onAuthenticate={onAuthenticate}/>
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#803031'
  }
})