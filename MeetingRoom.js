import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import StartMeeting from '../Components/StartMeeting';


function MeetingRoom({navigation}) {
    const [name, setName] = useState()
    const [roomId, setRoomId] = useState()
    const [activeUsers, setActiveUsers] = useState ()
    const [startCamera, setStartCamera] = useState (false)
    
    


    const joinRoom = () => {
        console.log('apapun');
        // startCamera();
        navigation.navigate('join-room', {roomId :roomId, useName:name})
    }

    return (
        <View style={styles.container}>
            {/* {Start Meeting Section} */}
        {startCamera ? (
            <Text>Start Camera</Text>
        ) : (
            // START MEETING SECTION
            <StartMeeting 
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
                // joinRoom={joinRoom}
                navigation={navigation}
            />
        )
        }
        </View>
    )
}

export default MeetingRoom

const styles= StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,

    }
})
