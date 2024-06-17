import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput,Button, TouchableOpacity} from 'react-native';

const Login = () => {
    return(
       <SafeAreaView>
           <View style = {styles.heads}>
                <View>
                  <Text style = {styles.jobizz}> Jobizz </Text>
                </View>
                <View>
                  <Text style = {styles.welcome}>Welcome Back</Text>
                  <Text style ={styles.letlog}>Let's Log in. Apply to jobs!</Text>
                </View>
           </View>
           <View style ={styles.logins}>
              <TextInput placeholder='Name' style ={styles.credentials} ></TextInput>
              <TextInput placeholder='Email' style ={styles.credentials}></TextInput>
           </View>
             <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.flexes}>
               <View style={styles.horizontalRule1} />
                <View><Text>Or Continue With</Text></View>
               <View style={styles.horizontalRule2} />
              </View>
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
      marginTop: 40,
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
      marginTop: 100,
    },

  });

export default Login;