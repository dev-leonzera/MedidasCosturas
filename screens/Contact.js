import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../assets/css/css'

export default function Contact(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Olá, meu nome é Daiany. Sou a criadora do aplicativo Medidas e Costuras

                Dúvidas, sugestões e reclamações podem ser enviadas através do email
                suporte@medidasecosturas@hotmail.com
            </Text>
        </View>
    )
}