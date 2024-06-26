import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/loginPage';
import Home from './components/homePage';

const Stack = createStackNavigator();

function AppNavigator() {
return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name='Login' component={Login} />
       <Stack.Screen name="Home" component={Home} />
     </Stack.Navigator>
  </NavigationContainer>
);
}

export default AppNavigator;