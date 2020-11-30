import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Login, Create, List, About, Contact, CadastroUser, CadastroCliente } from './views'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Create" options={{headerShown:false}} component={Create} />
        <Stack.Screen name="Encomendas" options={{headerShown:false}} component={List} />
        <Stack.Screen name="About" options={{headerShown:false}} component={About} />
        <Stack.Screen name="Contact" options={{headerShown:false}} component={Contact} />
        <Stack.Screen name="Cadastro de Usuário" options={{headerShown:false}} component={CadastroUser} />
        <Stack.Screen name="Cadastro de Cliente" options={{headerShown:false}} component={CadastroCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}