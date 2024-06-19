import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native';
import Login from "./components/loginPage";
import Home from './components/homePage';
import AppNavigator from './appNavigator';

export default function App() {
  return (
    
    <ScrollView /*style={styles.container}*/>
     
     
      <Home/>
    </ScrollView>
  );
}

//const styles = StyleSheet.create({
 // container: {
   // flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  //},
//});


