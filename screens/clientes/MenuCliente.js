import React from 'react';
import {styles} from '../../assets/css/css'
import { Text, View, Button, TouchableOpacity } from 'react-native';

export default function MenuCliente({ navigation }){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Clientes</Text>
            </View>
            <View style={styles.menu}>
                <View style={styles.menuOption}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Novo Cliente')}>
                        <Text style={styles.buttonText}>Cadastrar novo Cliente</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuOption}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lista de Clientes')}>
                        <Text style={styles.buttonText}>Lista de Clientes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}