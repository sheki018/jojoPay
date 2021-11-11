import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function SuccessScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="file-upload" size={100} color="#2B2D53" />
            </View>
            <Text style={styles.heading}>
                KYC Verification
            </Text>
            
            <Text style={{padding:50, fontSize:15, textAlign:"center", color:"#a2a2a2", fontWeight:"bold"}}>
                Your response is recorded. An official from our side will reach out to you.
            </Text>
            <View style={styles.roundStyle}>  
                <Entypo name="check" size={50} color="white" />
            </View>            
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginTop: 180,
    },
    heading:{
        marginTop:5,
        fontWeight:"bold",
        color: "#45465A",
        fontSize:25,
    },
    roundStyle: {
        backgroundColor:"#2B2D53",
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
    },
})

export default SuccessScreen;