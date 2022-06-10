import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'

export default function Welcome({ onAuthenticate }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo-branca.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Controle de Presença</Text>
                <Text style={styles.text}></Text>
                <View style={styles.acess}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.bioID}
                    onPress={onAuthenticate}>
                        <Image
                            source={require('../../assets/face-id.png')}
                            style={{ width: '15%' }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#803031'
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#803031'
    },
    containerForm: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        alignSelf: 'center'
    },
    text: {
        color: '#a1a1a1',
        marginBottom: 35,
    },
    button: {
        backgroundColor: '#803031',
        borderRadius: 50,
        paddingVertical: 8,
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bioID: {
        width: '70%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    acess: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
})