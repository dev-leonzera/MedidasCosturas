import React from 'react';
import { styles } from '../../assets/css/css'
import { Text, View, Button, TouchableOpacity } from 'react-native';

export default function MenuEncomenda({ navigation }){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Encomendas</Text>
            </View>
            <View style={styles.menu}>
                <View style={styles.menuOption}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Nova Encomenda')}>
                        <Text style={styles.buttonText}>Nova Encomenda</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuOption}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lista de Encomenda')}>
                        <Text style={styles.buttonText}>Lista de Encomendas</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
    )
}