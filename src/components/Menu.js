// menu.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Menu = ({ signupText, loginText, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between', // Mengatur jarak antara dua tombol
        paddingHorizontal: 25, // Mengatur jarak horizontal dari sisi layar
        marginTop: 20,
        paddingBottom: 20,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registrasi')}>
        <Text style={{ fontWeight: 'bold' }}>{signupText}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>
        <Text style={{ fontWeight: 'bold' }}>{loginText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
