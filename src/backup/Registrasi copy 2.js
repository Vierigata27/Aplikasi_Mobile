import React, { Component } from 'react';
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
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.url = 'http://192.168.18.158/Bezz/api.php';
    this.registrasi = this.registrasi.bind(this);
  }

  registrasi() {
    if (this.state.registrasi === '') {
      Alert.alert('Silakan masukkan data registrasi');
    } else {
      let urlAksi;
      urlAksi = `${this.url}?op=registrasi`;
      }
    
    fetch(urlAksi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `registrasi=${this.state.registrasi}`,
    })
      .then(response => response.json())
      .then(json => {
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({password: ''});
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
            onChangeText={text => this.setState({ name: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Masukkan email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Masukkan password"
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <Button title="Simpan" onPress={this.Registrasi} color="#373A40"/>
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
