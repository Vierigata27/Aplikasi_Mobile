import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import TextInputEmail from '../components/TextInputEmail';
import LoginButton from '../components/LoginButton';
import Menu from '../components/Menu';
import axios from 'axios';

class Registrasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

  }

  setName = (name) => {
    this.setState({ name });
  };

  setEmail = (email) => {
    this.setState({ email });
  };

  setPassword = (password) => {
    this.setState({ password });
  };


  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#686D76' }}>
        <StatusBar backgroundColor={'#686D76'} barStyle="dark-content" />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Image
            source={require('../../src/images/anoninews.png')}
            style={{ width: 350, height: 350 }}
          />
          <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 24 }}>
            Regristasi
          </Text>
        </View>

        <TextInputEmail
          state={this.state.name}
          set={this.setName}
          placeholder="Masukkan nama"
          icon="user"
        />
        <TextInputEmail
          state={this.state.email}
          set={this.setEmail}
          placeholder="Masukkan email"
          icon="envelope"
        />
        <TextInputEmail
          state={this.state.password}
          set={this.setPassword}
          placeholder="Masukkan password"
          isPassword={true}
          icon="lock"
        />

        <LoginButton text="Daftar" color="#373A40" onPress={this.handleRegister} />

        <Menu loginText="Login" navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default Regristasi;
