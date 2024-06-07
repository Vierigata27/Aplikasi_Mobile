import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TextInputEmail = props => {
  return (
    <View>
      <View style={{ flexDirection: 'row', marginHorizontal: 25, marginTop: 10 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            elevation: 2,
          }}>
            <Icon name={props.icon} size={20} color="#000000" />
        </View>
        <TextInput
          value={props.value} 
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 15,
            elevation: 2,
            paddingLeft: 10,
          }}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText} 
          secureTextEntry={props.isPassword}
        />
      </View>
    </View>
  );
};

export default TextInputEmail;
