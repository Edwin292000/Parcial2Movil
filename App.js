import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'
import Home from './Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none" >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicio" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

