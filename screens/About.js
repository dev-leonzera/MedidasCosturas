import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../assets/css/css'

export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                O aplicativo Medidas e Costuras tem como objetivo agilizar o atendimento
                das costureiras e automatizar o trabalho delas
            </Text>
        </View>
    )
}