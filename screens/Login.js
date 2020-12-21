import React, { useState } from 'react'
import { styles } from '../assets/css/css'
import useApi from '../services/useApi'
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'

export default function Login({ navigation }){

    const api = useApi();
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () =>{
        
        const res = await useApi.post('user/login', {email: login, password: password})
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Faça o login</Text>
            <View style={styles.inputContainer}> 
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite o Email" 
                    keyboardType={'email-address'} 
                    autoCapitalize="none"
                    onChangeText={text => setLogin(text)}
                    clearButtonMode="always" 
                /> 
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite a Senha"
                    autoCapitalize="none"
                    onChangeText={text => setPassword(text)}
                    clearButtonMode="always" /> 
                <TouchableOpacity style={styles.button} onPress={handleLogin}> 
                  <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Novo Usuário')}>
                  <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    )
}