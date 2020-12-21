import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { styles } from '../../assets/css/css'
import api from '../../services/useApi';

export default function ListEncomenda(){

    const [encomenda, setEncomenda] = useState([])

    async function getEncomenda(){
        const response = await api.get('encomendas')
        .then( response => {
            setEncomenda(response.data)
        })
    }

    useEffect(() => {
        getEncomenda()
    }, [])

    function ItemShow(item){
        const { 
            medidas, 
            nome_cliente,
            tipo_encomenda,
            valor_encomenda
        } = item.item
    
        return(
            <View style={styles.listItem}>
                <Text style={styles.titleList}>Dados da Encomenda</Text>
                <Text>Cliente: {nome_cliente}</Text>
                <Text>Valor da Encomenda: R$ {valor_encomenda}</Text>
                <Text>Tipo da Encomenda: {tipo_encomenda}</Text>
                <Text style={styles.titleList}>Medidas</Text>
                <Text>Busto: {medidas.busto}</Text>
                <Text>Cintura: {medidas.cintura}</Text>
                <Text>Ombro: {medidas.ombro}</Text>
                <Text>Quadril: {medidas.quadril}</Text>
                <Text>Tamanho: {medidas.tamanho}</Text>
            </View>
        )
    }

    return(
        <View style={styles.listContainer}>
            <FlatList
                data={encomenda}
                keyExtractor={(encomenda) => encomenda._id}
                renderItem={ItemShow}
            />
        </View>
    )
}

