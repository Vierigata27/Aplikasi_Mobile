import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Backup/Home';
import Detail from './src/screens/Backup/Detail';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator(); 

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
