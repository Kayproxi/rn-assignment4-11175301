import React from 'react'
import { PixelRatio, SafeAreaView, StyleSheet, Text, View , Image, TextInput, ScrollView} from 'react-native';
import HorizontalScroll from './homePageComponents/horizontalScroll';
import VerticalScroll from './homePageComponents/verticalScroll';


const Home = ({ route }) =>{
  const { userName, userEmail } = route.params;
    return(
   
      <SafeAreaView style={styles.mainView}>
        <SafeAreaView>
       <View style={styles.flx}>
          <View flx2>
            <Text style={styles.TSize}>
             {userName}
            </Text>  

            <Text style={styles.size}>
             {userEmail}
            </Text>
          </View>  
            <View style={styles.imgView}><Image source={require("./Ellipse.png")} style={styles.img1}/></View>
      </View>
      
      <View style={styles.flex2}>
      <View>
       <TextInput style={styles.searchBox} placeholder= "Search a job or a position"/>
      </View>
      <View>
        <Image source={require("./filter.png")} style={styles.img2}/>
      </View>
      </View>
      </SafeAreaView>

     <View style={styles.featured}>
       <View><Text style={styles.size2}> Featured Jobs</Text></View>
       <View><Text style={styles.size3}> See all</Text></View>
     </View>
     <HorizontalScroll/>
     <VerticalScroll/>
     
     
    
    </SafeAreaView>
   
  
    );
}

const styles = StyleSheet.create({
    searchBox: {
        height: 60,
        borderColor: '#FBF9F7',
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 60,
        width: 300,
        backgroundColor:'rgba(242, 242, 243, 1)',
      },
    TSize: {
        fontSize: 24,
        fontStyle: 'bold',
        fontFamily:'poppins',

      },
    size: {
        fontSize: 20,
        fontFamily:'poppins',
        color:'rgba(149, 150, 157, 1)',
      },
    flx: {
        flex: 0,
        flexDirection:'row',
        alignItems: 'center',
        marginRight: 100,
        justifyContent:'space-between'
    },
    img1: {
        marginLeft: 80,
        marginTop: 0,
      },
    flex2: {
        flexDirection:'row',
      },
    mainView: {
        marginLeft: 20,
        marginRight: 10,
    },
    size2: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Lato',
        lineHeight: 24,
        marginTop: 2,
        marginBottom: 30 
    },
    featured: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    size3: {
        color:'rgba(149, 150, 157, 1)',
        marginTop: 3,
    },
    imgView: {
      marginLeft: 100,
    },
    img2: {
      marginLeft: 30,
      marginTop: 20,
      height: 55,
      width: 53,
      borderRadius: 15
    },
})


export default Home;