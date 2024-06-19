import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput,Button, TouchableOpacity,Image,Link, ScrollView} from 'react-native';

const HorizontalScroll = () => {
    return(
    <ScrollView horizontal={true} style={styles.horizontalScroll}  showsHorizontalScrollIndicator={false}>
             
      <View style={styles.scrollItem1}>
        <View style={styles.itm1}>

          <View style={styles.image}>
            <Image source={require("./facebook.png")} style={styles.img}/>
          </View>
          <View style={styles.lol}>
            <Text style={styles.ts1}>Software Engineer</Text>
            <Text style={styles.ts2}>Facebook</Text>
          </View>
        </View>
        
        <View style={styles.itm2}>
          <View><Text style={styles.btext1}>$180,00</Text></View>
          <View><Text style={styles.btext2}>Accra, Ghana</Text></View>
        </View>
      </View>

      <View style={styles.scrollItem2}>
        <View style={styles.itm1}>

          <View style={styles.image}>
            <Image source={require("./google.png")} style={styles.img}/>
          </View>
          <View style={styles.lol}>
            <Text style={styles.ts1}>Software Engineer</Text>
            <Text style={styles.ts2}>Facebook</Text>
          </View>
        </View>
        
        <View style={styles.itm2}>
          <View><Text style={styles.btext1}>$180,00</Text></View>
          <View><Text style={styles.btext2}>Accra, Ghana</Text></View>
        </View>
      </View>

      <View style={styles.scrollItem3}>
        <View style={styles.itm1}>

          <View style={styles.image}>
            <Image source={require("./facebook.png")} style={styles.img}/>
          </View>
          <View style={styles.lol}>
            <Text style={styles.ts1}>Software Engineer</Text>
            <Text style={styles.ts2}>Facebook</Text>
          </View>
        </View>
        
        <View style={styles.itm2}>
          <View><Text style={styles.btext1}>$180,00</Text></View>
          <View><Text style={styles.btext2}>Accra, Ghana</Text></View>
        </View>
      </View>

      <View style={styles.scrollItem4}>
        <View style={styles.itm1}>

          <View style={styles.image}>
            <Image source={require("./facebook.png")} style={styles.img}/>
          </View>
          <View style={styles.lol}>
            <Text style={styles.ts1}>Software Engineer</Text>
            <Text style={styles.ts2}>Facebook</Text>
          </View>
        </View>
        
        <View style={styles.itm2}>
          <View><Text style={styles.btext1}>$180,00</Text></View>
          <View><Text style={styles.btext2}>Accra, Ghana</Text></View>
        </View>
      </View>

      <View style={styles.scrollItem5}>
        <View style={styles.itm1}>

          <View style={styles.image}>
            <Image source={require("./facebook.png")} style={styles.img}/>
          </View>
          <View style={styles.lol}>
            <Text style={styles.ts1}>Software Engineer</Text>
            <Text style={styles.ts2}>Facebook</Text>
          </View>
        </View>
        
        <View style={styles.itm}>
          <View><Text style={styles.btext1}>$180,00</Text></View>
          <View><Text style={styles.btext2}>Accra, Ghana</Text></View>
        </View>
      </View>

      <View style={styles.scrollItem6}>
        <View style={styles.itm1}>

          <View style={styles.image}>
            <Image source={require("./facebook.png")} style={styles.img}/>
          </View>
          <View style={styles.lol}>
            <Text style={styles.ts1}>Software Engineer</Text>
            <Text style={styles.ts2}>Facebook</Text>
          </View>
        </View>
        
        <View style={styles.itm2}>
          <View><Text style={styles.btext1}>$180,00</Text></View>
          <View><Text style={styles.btext2}>Accra, Ghana</Text></View>
        </View>
      </View>

      <View style={styles.scrollItem7}>
        <View style={styles.itm1}>

          <View style={styles.image}>
            <Image source={require("./facebook.png")} style={styles.img}/>
          </View>
          <View style={styles.lol}>
            <Text style={styles.ts1}>Software Engineer</Text>
            <Text style={styles.ts2}>Facebook</Text>
          </View>
        </View>
        
        <View style={styles.itm2}>
          <View><Text style={styles.btext1}>$180,00</Text></View>
          <View><Text style={styles.btext2}>Accra, Ghana</Text></View>
        </View>
      </View>

      <View style={styles.scrollItem8}>
        <View style={styles.itm1}>

          <View style={styles.image}>
            <Image source={require("./facebook.png")} style={styles.img}/>
          </View>
          <View style={styles.lol}>
            <Text style={styles.ts1}>Software Engineer</Text>
            <Text style={styles.ts2}>Facebook</Text>
          </View>
        </View>
        
        <View style={styles.itm2}>
          <View><Text style={styles.btext1}>$180,00</Text></View>
          <View><Text style={styles.btext2}>Accra, Ghana</Text></View>
        </View>
      </View>

    </ScrollView>  
    );
}

const styles = StyleSheet.create({
    ts1: {
        marginRight: 1,
        paddingTop: 30,
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight:600,
        color: 'white'
       },
    ts2: {
         paddingTop: 10,
         paddingLeft: 1,
         fontSize: 20,
         fontFamily: 'Poppins',
         fontWeight: 20,
         color: 'white'
       },
    image: {
        margin: 30,
        marginRight: 20,
        paddingTop: 15,
        backgroundColor: 'white',
        height: 70,
        width: 70,
        borderRadius: 24,
       },
    img: {
        height: 40,
        width: 50,
        marginLeft:10,
        resizeMode:'contain'
      },
   
   
    itm1: {
          flexDirection: 'row',
        },
    itm2: {
      marginTop: 70,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    btext1: {
      paddingLeft: 30,
      fontSize: 20,
      color: 'white',
    },
    btext2: {
      paddingRight: 30,
      fontSize: 20,
      color: 'white',
    },
    lol: {
      paddingLeft: 1
    },
    scrollItem1: {
      backgroundColor:'rgba(83, 134, 228, 1)',
      marginRight: 10,
      width: 350,
      height: 250,
      borderRadius: 30,
      flexWrap:"wrap",
      },
    scrollItem2: {
      backgroundColor:'rgba(4, 40, 74, 1)',
      marginRight: 10,
      width: 350,
      height: 250,
      borderRadius: 30,
      flexWrap:"wrap",
      },
    scrollItem3: {
      backgroundColor:'rgba(4, 40, 74, 1)',
      marginRight: 10,
      width: 350,
      height: 250,
      borderRadius: 30,
      flexWrap:"wrap",
      },
    scrollItem4: {
      backgroundColor:'rgba(4, 40, 74, 1)',
      marginRight: 10,
      width: 350,
      height: 250,
      borderRadius: 30,
      flexWrap:"wrap",
      },
    scrollItem5: {
      backgroundColor:'rgba(4, 40, 74, 1)',
      marginRight: 10,
      width: 350,
      height: 250,
      borderRadius: 30,
      flexWrap:"wrap",
      },
    scrollItem6: {
      backgroundColor:'rgba(4, 40, 74, 1)',
      marginRight: 10,
      width: 350,
      height: 250,
      borderRadius: 30,
      flexWrap:"wrap",
      },
    scrollItem7: {
      backgroundColor:'rgba(4, 40, 74, 1)',
      marginRight: 10,
      width: 350,
      height: 250,
      borderRadius: 30,
      flexWrap:"wrap",
      },
    scrollItem8: {
      backgroundColor:'rgba(4, 40, 74, 1)',
      marginRight: 10,
      width: 350,
      height: 250,
      borderRadius: 30,
      flexWrap:"wrap",
      },
})

export default HorizontalScroll;