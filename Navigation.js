import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MeetingRoom from './Screens/MeetingRoom';
import JoinRoom from './Screens/JoinRoom';
import Home from './Screens/Home';

function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen 
                    name= "Home"
                    component={Home}
                    options={{
                    headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Room"
                    component={MeetingRoom}
                    options={{
                        title: 'Start a Meeting',
                        headerStyle: {
                            backgroundColor: "#1c1c1c",
                            shadowOpacity: 0
                        },
                        headerTintColor: "white",
                        headerTitleAlign: "center",
                        
                    }}
                />
                <Stack.Screen
                    name="JoinRoom"
                    component={JoinRoom}
                    options={{
                        title: 'StartMeeting',
                        headerStyle: {
                            backgroundColor: "#1c1c1c",
                            shadowOpacity: 0
                        },
                        headerTintColor: "white",
                        headerTitleAlign: "center",
                        
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
