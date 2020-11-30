import React from 'react'
import {Text, View, TextInput, Button, TouchableOpacity, StyleSheet, StatusBar} from 'react-native'

export default function CadastroUser(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Faça o login</Text>
            <View style={styles.inputContainer}> 
                <TextInput
                style={styles.input} 
                placeholder="Digite o Email"
                keyboardType={'email-address'}
                clearButtonMode="always" /> 
                <TextInput 
                style={styles.input}  
                placeholder="Digite a Senha"
                clearButtonMode="always" /> 
                <TouchableOpacity style={styles.button}> 
                <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity> 
            </View>
            <StatusBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D93600',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
    },
    inputContainer: {
      flex: 1,
      marginTop: 30,
      width: '90%',
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
    input: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'stretch'
    },
    button: {
      marginTop: 10,
      height: 60,
      backgroundColor: 'blue',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#ccc',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    }
  });