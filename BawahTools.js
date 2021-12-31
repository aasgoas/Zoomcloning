import React from 'react'
import { View, Text , Image, StyleSheet, SafeAreaView, TouchableOpacity, useState} from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome5"

const toolsIcons = [
    {id:1, name:"comment-alt", title: "Meet & Chat", customColor:"#efefef"},
    {id:2, name:"clock", title: "Meetings",customColor:"gray"},
    {id:3, name:"users", title: "Contacts",customColor:"gray"},
    {id:4, name:"cog", title: "Settings",customColor:"gray"},
]

const BawahTools = () => {
    return (
            <View style={styles.menu}>
             {toolsIcons.map( (icon, index) => 
                 <TouchableOpacity key={index} style={styles.tile}>
                     <FontAwesome name={icon.name} size={18} color={icon.customColor}/>
                    <Text style={styles.textTile}>{icon.title}</Text>
                  </TouchableOpacity>
            )}
            </View>
    )
}

export default BawahTools

const styles= StyleSheet.create ({
    menu: {
        flexDirection:"row",
        justifyContent: "space-around",
        height: 80,
        marginTop: "30%"

    },
    textTile: {
        color: "white",
        marginTop: 3,

    },
    tile: {
        justifyContent:"center",
        alignItems:"center",
        height:50,
        marginTop: 15,

    },
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,
    }
})
