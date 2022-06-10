import React, { useContext } from 'react'
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import { AuthContext } from '../../contexts/auth';

import Turmas from '../../components/TurmasList'

import Feather from 'react-native-vector-icons/Feather';

import TabNavigator from '../../navigation/TabNavigator';

import { useNavigation } from '@react-navigation/native'

export default function HomeProfessor() {

    const navigation = useNavigation()

    const { nome } = useContext(AuthContext)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Roboto' }}>Olá, {nome}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('PerfilProfessor')}>
                        <ImageBackground
                            source={require('../../assets/profile/pp.png')}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#C6C6C6',
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 8
                    }}>
                    <Feather name="search" size={20} color="#C6C6C6" style={{ marginRight: 5 }} />
                    <TextInput placeholder='Pesquisar' />
                </View>

                <View
                    style={{
                        marginVertical: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontFamily: 'Roboto'
                        }}>Turmas</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: '#803031' }}>Ver todas</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Turmas>

                    </Turmas>
                </View>


            </ScrollView>
        </SafeAreaView>

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
