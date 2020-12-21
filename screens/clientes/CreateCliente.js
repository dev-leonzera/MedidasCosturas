import React, {useState} from 'react'
import {Text, View, TextInput, TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import { styles } from '../../assets/css/css'
import api from '../../services/useApi'

export default function CreateCliente(){
    
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')

    const handleButton = async () => {

        const res = await api.post('cliente', {
            name: nome,
            phone: telefone
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
                        placeholder="Telefone" 
                        keyboardType={'numeric'}
                        onChangeText={text => setTelefone(text)}
                        clearButtonMode="always" 
                    />
                    <TouchableOpacity style={styles.button} onPress={handleButton}>
                        <Text style={styles.buttonText}>Salvar</Text> 
                    </TouchableOpacity> 
                </View>
                <StatusBar style="light" />
            </View>
        </ScrollView>
    )
}