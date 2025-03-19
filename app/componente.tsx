import {Text, View, Button, TextInput,StyleSheet} from 'react-native';
import React, { Component } from 'react';

export default function Componente(){

    return(
        <View style={styles.caixa}>
            
            <Text style={styles.ctitle}>Valor:</Text>
            <TextInput style ={styles.cinput}
            keyboardType='numeric'
            />
            <Button title='Converter'/>

        </View>
    )
        




    

}

const styles = StyleSheet.create({
    caixa:{
        backgroundColor:'white',
        width:'70%',
        padding: 20,
        borderRadius: 15,
        marginTop: 20,
        alignItems: 'center',
        justifyContent:'center'
    },

    ctitle:{
        fontSize:20,
        fontWeight:'bold',
        color: 'pink',
    },

    cinput:{
        width: '100%',
        borderWidth: 1,
        borderColor: 'pink',
        margin: 15,
        marginTop: 5,
    },



})
