import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Login, About, Contact, CadastroUser} from './screens'
import { CreateEncomenda, ListEncomenda, MenuEncomenda } from './screens/encomendas'
import { CreateCliente, ListCliente, MenuCliente } from './screens/clientes'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="Login" options={{headerShown:true}} component={Login} />
        <Stack.Screen name="Encomendas" options={{headerShown:true}} component={MenuEncomenda} />
        <Stack.Screen name="Clientes" options={{headerShown:true}} component={MenuCliente} />
        <Stack.Screen name="Nova Encomenda" options={{headerShown:true}} component={CreateEncomenda} />
        <Stack.Screen name="Lista de Encomenda" options={{headerShown:true}} component={ListEncomenda} />
        <Stack.Screen name="Novo Cliente" options={{headerShown:true}} component={CreateCliente} />
        <Stack.Screen name="Lista de Clientes" options={{headerShown:true}} component={ListCliente} />
        <Stack.Screen name="About" options={{headerShown:true}} component={About} />
        <Stack.Screen name="Contact" options={{headerShown:true}} component={Contact} />
        <Stack.Screen name="Novo Usuário" options={{headerShown:true}} component={CadastroUser} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}