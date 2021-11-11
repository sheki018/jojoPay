import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function SelfieScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="#2B2D53" />
                <Text style={styles.heading}>
                    KYC Verification
                </Text>
            </View>
            <Text style={styles.paragraphContainer}>
                Take a selfie
            </Text>
            <Text style={styles.paragraphContainer}>
                Make sure there is proper lighting
            </Text>

            <View style={styles.RectangleShape} />  
            <Text style={styles.textContainer}>
                Position your face inside this box
            </Text>
            
            <Card borderRadius={20} height={160} elevation={5} marginBottom = {20} marginTop= {60}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Entypo name="picasa" size={50} color="white" />
            </TouchableOpacity>
            </Card>
      
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
    paragraphContainer:{
        textAlign:'center',
        paddingTop: 30,
        fontSize:15,
        color: "#2B2D53",
    },
    RectangleShape:{
        marginTop: 20,
        marginLeft:40,
        width: 330,
        height: 400,
        borderWidth:2,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    textContainer:{
        textAlign:'center',
        fontSize:20,
        color: "#2B2D53",
        fontWeight:'bold',
        marginTop: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#2B2D53',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 100,
        height: 80,
        width: 80,
        marginLeft:120,
    },

})
export default SelfieScreen;