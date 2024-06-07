import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Utama from '../screens/Utama';
import Artikel from '../screens/Artikel';
import About from '../screens/About';
import Trending from '../screens/Trending';
import SplashScreen from '../screens/SplashScreen';
import Berita from '../screens/Berita';
import CRUDBerita from '../screens/CRUDBerita';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Utama" component={Utama} />
        <Stack.Screen name="Artikel" component={Artikel} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Trending" component={Trending} />
        <Stack.Screen name="Berita" component={Berita} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="CRUDBerita" component={CRUDBerita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
