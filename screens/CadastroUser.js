import React, {useState} from 'react'
import {Text, View, TextInput, TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import { styles } from '../assets/css/css'
import useApi from '../services/useApi'

export default function CadastroUser(){
    
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [password, setPassword] = useState('')

    const handleCadastro = async () => {
        
        const res = await useApi.post('user/register', {
            name: nome,
            email: email,
            phone: telefone,
            password: password
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputContainer}> 
                    <TextInput 
                        style={styles.input} 
                        placeholder="Nome do Cliente"
                        onChangeText={text => setNome(text)}
                        clearButtonMode="always" 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email"
                        onChangeText={text => setEmail(text)}
                        clearButtonMode="always" 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Telefone" 
                        keyboardType={'numeric'}
                        onChangeText={text => setTelefone(text)}
                        clearButtonMode="always" 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Senha"
                        onChangeText={text => setPassword(text)}
                        clearButtonMode="always" 
                    />
                    <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                        <Text style={styles.buttonText}>Salvar</Text> 
                    </TouchableOpacity> 
                </View>
                <StatusBar style="light" />
            </View>
        </ScrollView>
    )
}