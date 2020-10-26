import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Listado from './Listado'
import Nuevo from './Nuevo';

const Tab = createBottomTabNavigator();

export default function Home({ route, navigation }) {
    return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color}) => {
              let iconName;
              if (route.name === 'Listado') {
                  iconName = focused ? 'ios-list-box' : 'ios-list'
              } else if (route.name === 'Nuevo') {
                iconName = focused
                  ? 'ios-add-circle'
                  : 'ios-add-circle-outline';
              }
              return <Ionicons name={iconName} size={32} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#F2AC29',
            inactiveTintColor: '#F2F2F2',
            labelStyle:{
                fontSize:18,
            },
            style:{
                backgroundColor:'#044BD9',
            }
          }}
          
        >
          <Tab.Screen name="Listado" component={Listado} />
          <Tab.Screen name="Nuevo" component={Nuevo} />
        </Tab.Navigator>
    )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});
  