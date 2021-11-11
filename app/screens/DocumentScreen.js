import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Card } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


function VerifyDocumentScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="#2B2D53" />
                <Text style={styles.heading}>
                    KYC Verification
                </Text>
            </View>
            <Text style={styles.paragraphContainer}>
                Now place your phone directly on top of your ID and take a picture
            </Text>
            <Text style={styles.paragraphContainer}>
                Make sure there is proper lighting
            </Text>

            <View style={styles.RectangleShape} />  
            <Text style={styles.textContainer}>
                Position your ID inside this box
            </Text>
            
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.imagesButtonContainer}>
                    <Ionicons name="images" size={40} color="#2B2D53" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Entypo name="picasa" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.flashButtonContainer}>
                    <Ionicons name="flash-off" size={40} color="#2B2D53" />
                </TouchableOpacity>
            </View>
      
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
        padding: 30,
        paddingBottom:10,
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
    
    bottomContainer:{
        borderRadius: 20, 
        backgroundColor:"white",
        height: 160, 
        elevation: 5, 
        marginTop: 60, 
        flexDirection: "row",
    },
    imagesButtonContainer: {
        height: 70,
        width: 70,
        marginLeft:30,
        marginTop:30,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#2B2D53',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 100,
        height: 70,
        width: 70,
        marginLeft:70,
        marginTop:15,
    },
    flashButtonContainer: {
        height: 70,
        width: 70,
        marginLeft:100,
        marginTop:30,
    },
})
export default VerifyDocumentScreen;