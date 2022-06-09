import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';


import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfileScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require('../../assets/profile/pp.png')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Matheus Telles</Title>
            <Caption style={styles.caption}>@mwtelles</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Campus: Vassouras</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Matricula: 201910992</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>140</Title>
            <Caption>Alunos</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Turmas</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate('Alunos')}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#803031" size={25}/>
            <Text style={styles.menuItemText}>Seus Alunos</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="group" color="#803031" size={25}/>
            <Text style={styles.menuItemText}>Suas Turmas</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Desenvolvedores')}>
          <View style={styles.menuItem}>
            <Icon name="account" color="#803031" size={25}/>
            <Text style={styles.menuItemText}>Time de Desenvolvimento</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="cog" color="#803031" size={25}/>
            <Text style={styles.menuItemText}>Configurações</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});