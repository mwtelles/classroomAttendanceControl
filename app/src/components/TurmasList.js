import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Turmas extends Component {

    constructor(props){
        super(props);
        this.state = {
            turmas: [
                {id: '1', nome: 'Lab de Aplicativos', ano: '2022', semestre: '1', qntAlunos: '58'},
                {id: '2', nome: 'Lab de Interfaces', ano: '2022', semestre: '1', qntAlunos: '58'},
                {id: '3', nome: 'Lab de Padrões de Projetos', ano: '2022', semestre: '1', qntAlunos: '58'},
                {id: '4', nome: 'Lab de Padrões de Projetos', ano: '2022', semestre: '1', qntAlunos: '58'},
                {id: '5', nome: 'Lab de Padrões de Projetos', ano: '2022', semestre: '1', qntAlunos: '58'},
                {id: '6', nome: 'Lab de Padrões de Projetos', ano: '2022', semestre: '1', qntAlunos: '58'},
                {id: '7', nome: 'Lab de Padrões de Projetos', ano: '2022', semestre: '1', qntAlunos: '58'},
                {id: '8', nome: 'Lab de Padrões de Projetos', ano: '2022', semestre: '1', qntAlunos: '58'}
            ]
        }
    }



    render(){
        return(
            <View>
                
            <FlatList 
            data={this.state.turmas}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => 
            <View style={styles.containerTurmas}>
                <Text style={styles.title}>{item.nome}</Text>
                <View style={styles.infoArea}>
                    <Text>Semestre: {item.ano}.{item.semestre}</Text>
                    <Text>Alunos: {item.qntAlunos}</Text>
                </View>
            </View>
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