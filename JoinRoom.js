import React from 'react'
import { View, Text , Image, StyleSheet, SafeAreaView, TouchableOpacity, useState} from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const menuIcons = [
    {id:1, name:"microphone-slash", title: "mute", customColor:"#efefef"},
    {id:2, name:"video-camera", title: "Stop Video"},
    {id:3, name:"upload", title: "Share Screen"},
    {id:4, name:"group", title: "Participants"},
]

const activeUsers = [
    {userid: "Aas"},
    {userid: "Goas"},
    {userid: "Fox"}, 
    {userid: "Onet"},
    {userid: "Pie"},
    // {userid: "Manduu"},
    // {userid: "Boo"},
]

const JoinRoom = () => {
    return (
    <View style={styles.container}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.activeUserContaineractiveUserContainer}>
                <View style={styles.imageContainer}>
                    <Image style={{width:180 ,height: 180}} source={require('../Image/muka.png')}/>
                    {activeUsers.map((user, indexx) => 
                        <View key={indexx} style={styles.activeUserContainer}>
                             <Text style={{color :"white"}}>{user.userid}</Text>
                        </View>
                )}
                </View>
            </View>
            {/* {VIEW 2 / FOOTER} */}
            <View style={styles.menu}>
             {menuIcons.map( (icon, index) => 
                 <TouchableOpacity key={index} style={styles.tile}>
                     <FontAwesome name={icon.name} size={18} color={"#efefef"}/>
                    <Text style={styles.textTile}>{icon.title}</Text>
                  </TouchableOpacity>
            )}
            </View>
            </SafeAreaView>


    </View>
    )
}

export default JoinRoom

const styles= StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,
    },
    tile: {
        justifyContent: "center",
        alignItems:"center",
        height:50,
        marginTop: 15,
    },
    textTile: {
        color: "white",
        marginTop: 3,

    },
    menu: {
        flexDirection:"row",
        justifyContent: "space-around",

    },
    imageContainer: {
        // flex: 1,
        // backgroundColor: "black",
        justifyContent:"center",
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center"
    },
    activeUserContainer: {
        borderColor: "grey",
        borderWidth: 1,
        width: 180,
        height:180,
        justifyContent:"center",
        alignItems:"center"
     },
     activeUserContaineractiveUserContainer : {
         flex: 1,
         width: "100%",
         justifyContent:"center",
         alignItems: "center",
         backgroundColor: "black"
         
     }
})
