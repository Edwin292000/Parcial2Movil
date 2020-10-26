import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView} from 'react-native';
import * as DATA from './Data.js';
const Personas=DATA.personas


export default function Listado() {
    const mycard=({item})=>{
        return(
            <View style={styles.mycard}>
                <Text style={[styles.text,{color:'white'}]} >Nombre: {item.Nombre}</Text>
                <Text style={[styles.text,{color:'white'}]}>Edad: {item.Edad}</Text>
            </View>
        );
      }
    if (Personas.length>0) {
        return (
        <View style={{marginTop:30, marginBottom:30}}>
          <View style={{alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Listado de personas</Text>
          </View>
          <FlatList
            data={Personas}
            renderItem={mycard}
            keyExtractor={item => item.Id}
          /> 
        </View>  
        );
      }
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Listado vacio</Text>
    </View>  
    );
    
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    mycard:{
        margin:5,
        borderColor:'#044BD9',
        borderWidth:3,
        borderRadius:10,
        padding:8,
        backgroundColor:'#2B76D9'

    }
});
  