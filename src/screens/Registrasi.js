import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  Alert,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import Menu from '../components/Menu';

class Registrasi extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params ?? {};
    this.state = {
      name: item ? item.name : '',
      email: item ? item.email : '',
      password: item ? item.password : '',
    };
    this.url = 'http://192.168.56.1/Bezz/api.php'; // Sesuaikan dengan URL API Anda
    this.klikSimpan = this.klikSimpan.bind(this);
  }

  klikSimpan() {
    const {name, email, password} = this.state;

    if (!name || !email || !password) {
      Alert.alert('Silakan masukkan semua data');
      return;
    }

    fetch(`${this.url}?op=registrasi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'name=' +
        this.state.name +
        '&email=' +
        this.state.email +
        '&password=' +
        this.state.password,
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.data && json.data.result === 'Registrasi berhasil') {
          Alert.alert('Registrasi berhasil');
          this.setState({name: '', email: '', password: ''});
          this.props.navigation.replace('Login');
        } else {
          Alert.alert(
            'Error',
            json.data ? json.data.result : 'Terjadi kesalahan',
          );
        }
      })
      .catch(error => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
        console.error('Error saving data:', error);
        Alert.alert('Error', 'Terjadi kesalahan saat menyimpan data');
      });
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <StatusBar backgroundColor={'#686D76'} barStyle="dark-content" />
        <View style={styles.header}>
          <Image
            source={require('../../src/images/anoninews.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Registrasi</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nama"
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
          />

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
          <View style={styles.buttonContainer}>
            <Button title="Daftar" onPress={this.klikSimpan} color="#373A40" />
          </View>
        </View>

        <Menu loginText="Login" navigation={this.props.navigation} />
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

export default Registrasi;
