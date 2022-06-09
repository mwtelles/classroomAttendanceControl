import React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'

import Feather from 'react-native-vector-icons/Feather';

export default function HomeProfessor() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Roboto'}}>Hello John Doe</Text>
                    <ImageBackground 
                    source={require('../../assets/profile/pp.png')} 
                    style={{ width: 35, height: 35 }} 
                    imageStyle={{ borderRadius: 25 }} 
                    />
                </View>

                <View 
                style={{
                    flexDirection: 'row', 
                    borderColor: '#C6C6C6', 
                    borderWidth:1, 
                    borderRadius: 8, 
                    paddingHorizontal: 10, 
                    paddingVertical: 8
                    }}>
                    <Feather name="search" size={20} color="#C6C6C6" style={{marginRight: 5}} />
                    <TextInput placeholder='Pesquisar'/>
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
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{color: '#803031'}}>Ver todas</Text>
                    </TouchableOpacity>
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
