import React from 'react';
import {styles} from '../assets/css/css'
import { Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';

export default function Home({ navigation }){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Bem vindo ao Medidas e Costuras</Text>
            </View>
            <View style={styles.menu}>
                <View style={styles.menuOption}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Clientes')}>
                        <Text style={styles.buttonText}>Clientes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuOption}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Encomendas')}>
                        <Text style={styles.buttonText}>Encomendas</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.menu}>
                <View style={styles.menuOption}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                        <Text style={styles.buttonText}>Sobre o App</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuOption}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
                        <Text style={styles.buttonText}>Contato</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="light" />
        </View>
    )
}