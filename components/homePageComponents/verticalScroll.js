import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput,Button, TouchableOpacity,Image,Link, ScrollView} from 'react-native';


const VerticalScroll = () =>{
    return(
    <View>
       

      <ScrollView style={styles.scroll}showsVerticalScrollIndicator={false}>
        <View style={styles.gparent}>
          <View><Image source={require('./burgerking.png')}/></View>

         <View style={styles.drake}>
            <View style={styles.parent1}>
              <View style={styles.child}><Text>Jr Executive</Text></View> 
              <View style={styles.child1}><Text>$96000/y</Text></View>
            </View>

            <View style={styles.parent2}>
             <View><Text style={styles.child2}>Burger King</Text></View> 
             <View ><Text style={styles.child3}>Los Angeles, US</Text></View>
            </View>
          </View>
        </View>
        
        <View style={styles.gparent}>
          <View><Image source={require('./image8.png')}/></View>

         <View style={styles.drake}>
            <View style={styles.parent1}>
              <View style={styles.child}><Text>Jr Executive</Text></View> 
              <View style={styles.child1}><Text>$96000/y</Text></View>
            </View>

            <View style={styles.parent2}>
             <View><Text style={styles.child2}>Beats</Text></View> 
             <View><Text style={styles.child30}>Florida, US</Text></View>
            </View>
          </View>
        </View>

        <View style={styles.gparent}>
          <View><Image source={require('./Vector.png')}/></View>

         <View style={styles.drake}>
            <View style={styles.parent1}>
              <View style={styles.child}><Text>Jr Executive</Text></View> 
              <View style={styles.child1}><Text>$96000/y</Text></View>
            </View>

            <View style={styles.parent2}>
             <View><Text style={styles.child2}>Facebook</Text></View> 
             <View ><Text style={styles.child3}>Florida, US</Text></View>
            </View>
          </View>
        </View>

        <View style={styles.gparent}>
          <View><Image source={require('./burgerking.png')}/></View>

         <View style={styles.drake}>
            <View style={styles.parent1}>
              <View style={styles.child}><Text>Jr Executive</Text></View> 
              <View style={styles.child1}><Text>$96000/y</Text></View>
            </View>

            <View style={styles.parent2}>
             <View><Text style={styles.child2}>Burger King</Text></View> 
             <View ><Text style={styles.child3}>Los Angeles, US</Text></View>
            </View>
          </View>
        </View>

        <View style={styles.gparent}>
          <View><Image source={require('./burgerking.png')}/></View>

         <View style={styles.drake}>
            <View style={styles.parent1}>
              <View style={styles.child}><Text>Jr Executive</Text></View> 
              <View style={styles.child1}><Text>$96000/y</Text></View>
            </View>

            <View style={styles.parent2}>
             <View><Text style={styles.child2}>Burger King</Text></View> 
             <View ><Text style={styles.child3}>Los Angeles, US</Text></View>
            </View>
          </View>
        </View>

        <View style={styles.gparent}>
          <View><Image source={require('./burgerking.png')}/></View>

         <View style={styles.drake}>
            <View style={styles.parent1}>
              <View style={styles.child}><Text>Jr Executive</Text></View> 
              <View style={styles.child1}><Text>$96000/y</Text></View>
            </View>

            <View style={styles.parent2}>
             <View><Text style={styles.child2}>Burger King</Text></View> 
             <View ><Text style={styles.child3}>Los Angeles, US</Text></View>
            </View>
          </View>
        </View>

        <View style={styles.gparent}>
          <View><Image source={require('./burgerking.png')}/></View>

         <View style={styles.drake}>
            <View style={styles.parent1}>
              <View style={styles.child}><Text>Jr Executive</Text></View> 
              <View style={styles.child1}><Text>$96000/y</Text></View>
            </View>

            <View style={styles.parent2}>
             <View><Text style={styles.child2}>Burger King</Text></View> 
             <View ><Text style={styles.child3}>Los Angeles, US</Text></View>
            </View>
          </View>
        </View>

        <View style={styles.gparent}>
          <View><Image source={require('./burgerking.png')}/></View>

         <View style={styles.drake}>
            <View style={styles.parent1}>
              <View style={styles.child}><Text>Jr Executive</Text></View> 
              <View style={styles.child1}><Text>$96000/y</Text></View>
            </View>

            <View style={styles.parent2}>
             <View><Text style={styles.child2}>Burger King</Text></View> 
             <View ><Text style={styles.child3}>Los Angeles, US</Text></View>
            </View>
          </View>
        </View>


       
      </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    featured: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50
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
    },
    gparent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:20,
        marginBottom: 50,
    },
    parent1:{ 
        flexDirection: 'row',
        paddingLeft:10
    },
    child:{
        paddingRight: 150
    },
    child1:{
        paddingLeft:10,
      textAlign: 'right'
    },
    parent2:{
        paddingTop: 20,
        marginRight:37,
        flexDirection:'row',
        justifyContent: 'space-around',
       
    },
    child2:{
        color:'rgba(149, 150, 157, 1)',
    },
    child3:{
      paddingLeft:120,
      textAlign: 'right',
      color:'rgba(149, 150, 157, 1)',
      alignSelf: 'right',
    },
    child30:{
      paddingLeft:130,
      marginLeft: 70,
      textAlign: 'right',
      color:'rgba(149, 150, 157, 1)',
      alignSelf: 'right',
    },
    scroll:{
    
    },

})

export default VerticalScroll;