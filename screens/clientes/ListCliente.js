import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { styles } from '../../assets/css/css'
import api from '../../services/useApi';

export default function ListCliente(){

    const [cliente, setCliente] = useState([])

    async function getCliente(){
        const response = await api.get('cliente')
        .then( response => {
            setCliente(response.data)
        })
    }

    useEffect(() => {
        getCliente()
    }, [])

    function ItemShow(item){
        const { 
            name, 
            phone,
        } = item.item
    
        return(
            <View style={styles.listItem}>
                <Text style={styles.titleList}>Dados do Cliente</Text>
                <Text>Cliente: {name}</Text>
                <Text>Telefone: {phone}</Text>
            </View>
        )
    }

    return(
        <View style={styles.listContainer}>
            <FlatList
                data={cliente}
                keyExtractor={(cliente) => cliente._id}
                renderItem={ItemShow}
            />
        </View>
    )
}

