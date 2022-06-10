import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class Turmas extends Component {

    constructor(props){
        super(props);
        this.state = {
            turmas: [
                
            ]
        }
    }



    render(){
        return(
            <View>
                
            <FlatList 
            data={this.state.turmas}
            keyExtractor={(item) => item.id}
            navigation={'Alunos'}
            renderItem={({item}) =>
            <TouchableOpacity> 
                <View style={styles.containerTurmas}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <View style={styles.infoArea}>
                        <Text>Semestre: {item.ano}.{item.semestre}</Text>
                        <Text>Alunos: {item.qntAlunos}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            }
            />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTurmas: {
        backgroundColor: 'orange',
        height: 80,
        marginTop: 15,
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    infoArea: {
        flexDirection: 'row',
        paddingTop: '8%',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
    }
})