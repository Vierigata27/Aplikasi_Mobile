import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Utama from './src/screens/Utama';
import Artikel from './src/screens/Artikel';
import About from './src/screens/About';
import Trending from './src/screens/Trending';
import SplashScreen from './src/screens/SplashScreen';
import Todolist from './src/screens/Todolist';
import Berita from './src/screens/Berita';
import CRUDBerita from './src/screens/CRUDBerita';

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
        <Stack.Screen name="Todolist" component={Todolist} />
        <Stack.Screen name="CRUDBerita" component={CRUDBerita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
