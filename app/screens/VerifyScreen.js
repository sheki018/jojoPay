import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function VerifySelfieScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="#2B2D53" />
                <Text style={styles.heading}>
                    KYC Verification
                </Text>
            </View>
            
            <View style={styles.RectangleShape} />  
            
            <TouchableOpacity style={styles.retakeButtonContainer}>
                <Entypo name="picasa" size={50} color="white" />
            </TouchableOpacity>
            <Text style={{color:"#f9677a", marginLeft:165, marginBottom:20}}>Retake?</Text>
            <TouchableOpacity style={styles.uploadButtonContainer}>
            <Entypo name="upload" size={50} color="white" />
            </TouchableOpacity>
            <Text style={{color:"#65c39b", marginLeft:165}}>Upload</Text>
      
        </View>
    );

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 70,
    },
    header:{
        flexDirection:"row",
        marginLeft:30,
    },
    heading:{
        fontWeight:"bold",
        color: "#2B2D53",
        fontSize:25,
        marginLeft:60,
    },
    RectangleShape:{
        marginTop: 50,
        marginLeft:40,
        marginBottom:30,
        width: 330,
        height: 400,
        borderWidth:2,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    retakeButtonContainer: {
        alignItems: 'center',
        backgroundColor: '#f9677a',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 100,
        height: 80,
        width: 80,
        marginLeft:150,
    },
    uploadButtonContainer: {
        alignItems: 'center',
        backgroundColor: '#65c39b',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 100,
        height: 80,
        width: 80,
        marginLeft:150,
    },
})
export default VerifySelfieScreen;