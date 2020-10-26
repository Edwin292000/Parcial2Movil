import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as DATA from './Data.js';
const Personas=DATA.personas


export default function Nuevo({ route, navigation }) {
    const [nombre, setNombre]=useState('');
    const [edad, setEdad]=useState();
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30,fontWeight: 'bold',}}>Nueva Persona</Text>
        <TextInput style={styles.input} onChangeText={(text)=>{setNombre(text)}} placeholder='Nombre'>{nombre}</TextInput>
        <TextInput style={styles.input} onChangeText={(text)=>{setEdad(text)}} keyboardType="number-pad" placeholder='Edad'>{edad}</TextInput>
        <View style={styles.button}>
            <TouchableOpacity onPress={() => {
              Personas.push({Id:String(Personas.length),Nombre:nombre, Edad:edad});
              setNombre('');
              setEdad();
              navigation.navigate('Listado',{});
            }} >
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight: 'bold', color:'white',}}>Agregar</Text>
            </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    input:{
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 100,
        padding:10,
        width: '75%',
        margin:15,
        fontSize:18,
        borderColor:'#044BD9'
      },
    button:{
        width:'75%',
        backgroundColor:'#044BD9',
        justifyContent: 'center',
        padding:10,
        borderRadius:50,
    },
});
  