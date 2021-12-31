import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';



function StartMeeting({name, roomId, setName, setRoomId,navigation}) {
    
    return (
        <View>
             <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput 
                        style={styles.textInput}
                        value={name}
                        placeholder= "Enter name"
                        placeholderTextColor= "#767476"
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.info}>
                   <TextInput 
                        style={styles.textInput}
                        value={roomId}
                        placeholder= "Enter room Id"
                        placeholderTextColor= "#767476"
                        onChangeText={text => setRoomId(text)}
                   />
                </View>
                <View style={{alignItems: "center"}}>
                     <TouchableOpacity
                        onPress={() => navigation.navigate('JoinRoom')}
                        style={styles.startMeetingButton}
                    >
                        <Text style={{ color: "white", fontWeight: "bold"}}>Start Meeting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default StartMeeting

const styles= StyleSheet.create({
    info: {
        width: "100%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderColor: "#484648",
        padding: 4,
        justifyContent: "center" 

    },
    textInput: {
        color: "white",
        fontSize: 16
    },
    startMeetingButton: {
        width: 350,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0470DC",
        height: 50,
        borderRadius: 15
    }
})
