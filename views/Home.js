import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({ navigation }){
    return(
        <View>
            <Text>Página Home</Text>
            <Button title='Ir para Login' onPress={() => navigation.navigate('Login')}/>
            <Button title='Ir para Lista de encomendaas' onPress={() => navigation.navigate('Encomendas')}/>
            <Button title='Ir para Criação de Encomendas' onPress={() => navigation.navigate('Create')}/>
            <Button title='Ir para Sobre o App' onPress={() => navigation.navigate('About')}/>
            <Button title='Ir para Contato' onPress={() => navigation.navigate('Contact')}/>
            <Button title='Ir para Cadastro de Cliente' onPress={() => navigation.navigate('Cadastro de Cliente')}/>
            <Button title='Ir para Cadastro de Usuário' onPress={() => navigation.navigate('Cadastro de Usuário')}/>
        </View>
    )
}
/**
 * Páginas restantes:
 * 
 *  
 */