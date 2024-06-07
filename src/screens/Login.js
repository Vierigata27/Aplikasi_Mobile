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
import Icon from 'react-native-vector-icons/FontAwesome5';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

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
            Login
          </Text>
        </View>

        <TextInputEmail
          state={this.state.email}
          set={this.setEmail}
          placeholder="Masukkan email"
        />
        <TextInputEmail
          state={this.state.password}
          set={this.setPassword}
          placeholder="Masukkan password"
          isPassword={true}
        />

        <LoginButton text="Login" color="#373A40" />

        <Menu signupText="Daftar" navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default Login;
