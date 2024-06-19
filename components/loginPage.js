import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput,Button, TouchableOpacity,Image,Link, Alert} from 'react-native';


const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name.trim() === '' || email.trim() === '') {
      Alert.alert('Please enter both your name and email.');
    }else{
    navigation.navigate('Home', {  userName: name, userEmail: email  });}
  };

    return(
       <SafeAreaView>
           <View style = {styles.heads}>
                <View>
                  <Text style = {styles.jobizz}> Jobizz </Text>
                </View>
                <View>
                  <Text style = {styles.welcome}>Welcome  Back 👋</Text>
                  <Text style ={styles.letlog}>Let's Log in. Apply to jobs!</Text>
                </View>
           </View>
           <View style ={styles.logins}>
              <TextInput placeholder='Name'  value= {name} style ={styles.credentials}  onChangeText={setName}/>
              <TextInput placeholder='Email' value= {email} style ={styles.credentials}  onChangeText={setEmail}/>
           </View>
             <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.flexes}>
               <View style={styles.horizontalRule1} />
                 <View><Text style={styles.txtcol}>Or continue with</Text></View>
               <View style={styles.horizontalRule2} />
              </View>
              <View style={styles.imgflex}>
                <View><Image source={require('../cib_apple.png')}/></View>
                <View><Image source={require('../flat-color-icons_google.png')}/></View>
                <View><Image source={require('../ion_logo-facebook.png')}/></View>
              </View>
              
              <Text style={styles.bview}>Haven't an account? <Text style={styles.blueText}>Register</Text></Text>
              
            
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    heads: {
        marginTop: 100,
        flex:'auto',
        marginLeft: 20, 
        marginRight: 20,
    },
    jobizz: {
        color: "rgba(53, 104, 153, 1)",
        fontSize: 25 ,
        fontFamily: "Poppins",
        marginBottom: 15
        
    },
    welcome: {
        fontFamily:'Poppins',
        fontWeight: 600,
        fontSize: 30,
        lineHeight: 33,
        letterSpacing: -1.5,
        marginBottom: 15,
    },
    letlog: {
        color: 'rgba(13, 13, 38, 0.5)',

    },
    logins:{
        marginTop: 70,
        flex:'auto',
        marginLeft: 20,
        marginRight: 20, 
        
        
    },
    credentials: {
      borderWidth: 1,
      borderColor: 'rgba(13, 13, 38, 0.5)',
      marginBottom: 15,
      width: "fit-to-screen",
      height: 60,
      borderRadius: 10,
      paddingLeft: 20,

    },
    button: {
      backgroundColor: 'rgba(53, 104, 153, 1)',
      padding: 10,
      borderRadius: 5,
      marginLeft: 20,
      marginRight: 20, 
      marginTop: 25,
      height: 60,

    },
    buttonText: {
      color: '#FFFFFF', 
      fontSize: 16,
      textAlign: 'center',
      paddingTop: 8,
    },
    horizontalRule1: {
      borderBottomColor: 'rgba(13, 13, 38, 0.5)', 
      borderBottomWidth: 1,
      marginVertical: 10, 
      width: 130,
      marginLeft: 10,
    },
    horizontalRule2: {
      borderBottomColor: 'rgba(13, 13, 38, 0.5)', 
      borderBottomWidth: 1,
      marginVertical: 10, 
      width: 130,
      marginRight: 20,
    },
    flexes: {
      flexDirection: 'row',
      gap: 10,
      width: 'fit-to-screen',
      marginTop: 70,
    },
    txtcol: {
      color: 'rgba(13, 13, 38, 0.5)',
    },
    imgflex: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      marginTop: 60,
      marginLeft: 50,
      marginRight: 50,
    },
    bview: {
      marginLeft: 120,
      marginTop: 70,
      color: 'rgba(13, 13, 38, 0.5)',
    },
    blueText: {
      color:'rgba(53, 104, 153, 1)',
    },

  });

export default Login;