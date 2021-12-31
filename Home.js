import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import MenuButtons from '../Components/MenuButtons';
import ContactsMenu from '../Components/ContactsMenu';
import Navigation from '../Navigation';
import BawahTools from '../Components/BawahTools';

// const Stack = createNativeStackNavigator();

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{height: '100%'}}>
                <Header />
                <SearchBar />
                <MenuButtons navigation={navigation}/>
                <ContactsMenu />
                <View>
                <BawahTools />
                </View>
            </SafeAreaView>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15
    },

})
