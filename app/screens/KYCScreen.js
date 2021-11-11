import React from 'react';

import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Card } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

function KYCScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="file-upload" size={100} color="#2B2D53" style={{marginLeft:100}}/>
                <TouchableOpacity style={styles.roundButton}>
                    <Text style={{color:"#2B2D53", fontSize:12, fontWeight:"bold", textAlign:"left"}}> Skip </Text>
                    <AntDesign name="forward" size={12} color="#2B2D53" />
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}>
                KYC Verification
            </Text>
            <Text style = {{padding: 10, fontSize: 12, color:"#a2a2a2"}}>
                Kindly upload your documents to verify your identity
            </Text>
            <SafeAreaView style={styles.nestedcontainer}>
                <Card borderRadius={20} height={230} elevation={5} marginBottom = {20}>
                    <Text style={styles.paragraphContainer}>
                        Identity Proof
                    </Text>
                    <DropDownPicker
                        items={[
                            {label: 'Passport', value: 'ps'},
                            {label: 'Aadhar', value: 'ac'},
                            {label: 'Driving License', value: 'dl'},
                        ]}
                        defaultValue={'ps'}
                        placeholder="Select your ID type"
                        containerStyle={{marginBottom: 30, marginLeft: 20, height: 40, width: 300,}}
                        placeholderStyle={{color:"#a2a2a2", fontSize:12, fontWeight:"bold",}}
                        labelStyle={{color:"#a2a2a2", fontSize:12,fontWeight:"bold"}}
                        style={{elevation:5, backgroundColor:"#FFFFFF", borderTopWidth:0, borderBottomWidth:0, borderLeftWidth:0, borderRightWidth:0}}
                        onChangeItem={item => console.log(item.label, item.value)}
                    />
                    <TouchableOpacity style={styles.uploadButtonContainer}>
                        <Entypo name="upload" size={20} color="#2B2D53" style={{marginRight:15, marginBottom:2,}} />
                        <Text style={{color:"#2B2D53", fontSize:15,}}> Upload </Text>
                    </TouchableOpacity>
                    <View style={styles.RectangleShape} />
                </Card>

                <Card borderRadius={20} height={160} elevation={5} marginBottom = {20}>
                    <Text style={styles.paragraphContainer}>
                        Face Verification
                    </Text>
                    <TouchableOpacity style={styles.uploadButtonContainer}>
                        <Entypo name="upload" size={20} color="#2B2D53" style={{marginRight:15, marginBottom:2,}} />
                        <Text style={{color:"#2B2D53", fontSize:15,}}> Upload </Text>
                    </TouchableOpacity>
                    <View style={styles.RectangleShape} />
                </Card>
            </SafeAreaView>

            <Text style = {{padding: 20, paddingLeft: 50, paddingRight: 50, fontSize: 15, color:"#a2a2a2", textAlign:"center"}}>
                By clicking next, you are accepting our {' '} 
                <Text style={styles.hyperLink} onPress={() => {Linking.openURL('');}}>
                    Privacy Policies
                </Text>
            </Text>
                   
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{color:"white", fontSize:20, fontWeight:"bold"}}> Next </Text>
            </TouchableOpacity>
      
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginTop: 50,
    },
    header:{
        flexDirection:"row",
    },
    heading:{
        marginTop:5,
        fontWeight:"bold",
        color: "#45465A",
        fontSize:25,
    },
    nestedcontainer:{
        justifyContent: 'center',
        height:400,
        width: 400,
        marginBottom:30,
        marginTop:30,
    },
    paragraphContainer:{
        fontSize: 18,
        textAlign: "center",
        color: '#a2a2a2',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#2B2D53',
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 50,
        width: 300,
    },
    uploadButtonContainer: {
        elevation: 5,
        backgroundColor:"#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 70,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        height: 50,
        width: 200,
        flexDirection:'row',
    },
    roundButton: {
        elevation: 5,
        backgroundColor:"#FFFFFF",
        width: 70,
        height: 70,
        marginLeft:50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        flexDirection: "row",
    },
    hyperLink:{
        color: '#2B2D53',
        textDecorationLine:'underline',
    },
    RectangleShape:{
        marginTop: 20,
        marginLeft:90,
        width: 160,
        height: 28,
        backgroundColor: '#2B2D53',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    }
})



export default KYCScreen;