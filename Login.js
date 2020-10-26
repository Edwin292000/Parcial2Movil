import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const usuarios=[
  {Usuario:'Edwin', Contra:'ed2020'}
];

export default function Login({route,navigation}){
  const [usuario, setUsuario]=useState('');
  const [contra, setContra]=useState('');
    return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text}>Login Parcial 2</Text>
            <Text style={styles.text}>Edwin Cotom 201708004</Text>
          </View>
          <View style={styles.body}>
            <TextInput  style={styles.input} 
                        onChangeText={(text)=>{setUsuario(text)}}
                        placeholder="Usuario"
            >{usuario}</TextInput>
            <TextInput  style={styles.input} 
                        onChangeText={(text)=>{setContra(text)}} 
                        secureTextEntry={true}
                        placeholder="Contraseña"
            >{contra}</TextInput>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => {
                if(usuario==usuarios[0].Usuario && contra==usuarios[0].Contra){
                  setUsuario('');
                  setContra('');
                  navigation.push('Inicio');
                }
                else{
                    Alert.alert("Error", "Ingrese usuario o contraseña validos");
                }
              }} >
                <View style={{alignItems:'center'}}>
                  <Text style={{fontSize:20,fontWeight: 'bold', color:'white',}}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:30,
      backgroundColor:'#044BD9'
    },
    header:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    body:{
      flex: 4,
      backgroundColor:'#F2AC29',
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      alignItems: 'center',
      paddingTop:100,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color:'white'
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