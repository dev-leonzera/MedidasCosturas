import React, {useState} from 'react'
import {Text, View, TextInput, TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import { styles } from '../../assets/css/css'
import api from '../../services/useApi'

export default function CreateEncomenda(){
    
    const [cliente, setCliente] = useState('')
    const [tipo, setTipo] = useState('')
    const [valor, setValor] = useState('')
    const [busto, setBusto] = useState('')
    const [cintura, setCintura] = useState('')
    const [quadril, setQuadril] = useState('')
    const [ombro, setOmbro] = useState('')
    const [tamanho, setTamanho] = useState('')

    const handleButton = async () => {

        const res = await api.post('encomendas', {
            nome_cliente: cliente,
            tipo_encomenda: tipo,
            valor_encomenda: valor,
            medidas: {
                busto: busto,
                cintura: cintura,
                ombro: ombro,
                quadril: quadril,
                tamanho: tamanho
            }
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
                        onChangeText={text => setCliente(text)}
                        clearButtonMode="always" 
                    /> 
                    <TextInput 
                        style={styles.input} 
                        placeholder="Tipo da Encomenda"
                        onChangeText={text => setTipo(text)}
                        clearButtonMode="always" 
                    /> 
                    <TextInput 
                        style={styles.input} 
                        placeholder="Valor da Encomenda" 
                        keyboardType={'numeric'}
                        onChangeText={text => setValor(text)}
                        clearButtonMode="always" 
                    /> 
                    <Text style={styles.titleForm}>Medidas</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Busto" 
                        keyboardType={'numeric'}
                        onChangeText={text => setBusto(text)}
                        clearButtonMode="always" 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Cintura" 
                        keyboardType={'numeric'}
                        onChangeText={text => setCintura(text)}
                        clearButtonMode="always" 
                    /> 
                    <TextInput 
                        style={styles.input} 
                        placeholder="Ombro" 
                        keyboardType={'numeric'}
                        onChangeText={text => setOmbro(text)}
                        clearButtonMode="always" 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Quadril" 
                        keyboardType={'numeric'}
                        onChangeText={text => setQuadril(text)}
                        clearButtonMode="always" 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Tamanho"
                        onChangeText={text => setTamanho(text)}
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