import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class SearchScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Pantalla de búsqueda</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#F0FDFB"
    },
    text:{
        fontSize:30,
        color:"black"
    }
})
