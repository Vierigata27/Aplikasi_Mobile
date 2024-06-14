import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  Alert,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import TextInputEmail from '../components/TextInputEmail';
import LoginButton from '../components/LoginButton';
import Menu from '../components/Menu';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.loginUser = this.loginUser.bind(this);
  }

  setEmail = email => {
    this.setState({email});
  };

  setPassword = password => {
    this.setState({password});
  };

  loginUser = () => {
    const {email, password} = this.state;

    if (!email || !password) {
      Alert.alert('Silakan masukkan email dan password');
      return;
    }

    fetch('http://192.168.18.158/Bezz/api.php?op=login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'email=' + this.state.email + '&password=' + this.state.password,
    })
      .then(response => response.json())

      .then(data => {
        console.log('Response data:', data);
        if (data.status === 1) {
          // Login berhasil, lakukan navigasi ke layar berikutnya
          this.props.navigation.navigate('Utama');
        } else {
          // Login gagal, tampilkan pesan error
          Alert.alert('Login Gagal', data.data.result);
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        Alert.alert('Error', 'Terjadi kesalahan saat melakukan login');
      });
  };

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#686D76'}}>
        <StatusBar backgroundColor={'#686D76'} barStyle="dark-content" />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Image
            source={require('../../src/images/anoninews.png')}
            style={{width: 350, height: 350}}
          />
          <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 24}}>
            Login
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan email"
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Masukkan password"
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            secureTextEntry
          />
          {/* <TextInputEmail
            state={this.state.email}
            set={this.setEmail}
            placeholder="Masukkan email"
          />
          <TextInputEmail
            state={this.state.password}
            set={this.setPassword}
            placeholder="Masukkan password"
            isPassword={true}
          /> */}
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={this.loginUser} color="#373A40" />
        </View>

        {/* <LoginButton text="Login" color="#373A40" onPress={this.loginUser} /> */}

        <Menu signupText="Daftar" navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#686D76',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 350,
    height: 350,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 15,
    elevation: 2,
    paddingLeft: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 25,
    borderRadius: 50,
    overflow: 'hidden',
    elevation: 2,
  },
});
export default Login;
