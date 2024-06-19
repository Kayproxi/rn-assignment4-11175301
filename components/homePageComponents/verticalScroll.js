import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput,Button, TouchableOpacity,Image,Link, ScrollView} from 'react-native';


const VerticalScroll = () =>{
    return(
    <View>
       <View style={styles.featured}>
         <View><Text style={styles.size2}>Popular Jobs</Text></View>
         <View><Text style={styles.size3}>See All</Text></View>
       </View>
    </View>
    );
}

const styles = StyleSheet.create({
    featured: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60
    },
    size2: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Poppins',
        lineHeight: 24,
        marginTop: 2,
        marginBottom: 30 
    },
    size3: {
        color:'rgba(149, 150, 157, 1)',
        marginTop: 5
    }
})

export default VerticalScroll;