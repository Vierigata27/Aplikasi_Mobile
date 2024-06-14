import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TrendingData: [], // State untuk menyimpan data trending
      trending: '',
      idEdit: null,
    };
    this.url = 'http://192.168.18.158/Bezz/api.php';
    this.klikSimpan = this.klikSimpan.bind(this);
    this.klikEdit = this.klikEdit.bind(this);
    this.klikDelete = this.klikDelete.bind(this);
  }

  componentDidMount() {
    this.ambilTabelTrending();
  }

  async ambilTabelTrending() {
    try {
      const response = await fetch(`${this.url}?op=tabel_trending`);
      const json = await response.json();
      console.log(
        'Data Trending yang didapat: ' + JSON.stringify(json.data.result),
      );
      this.setState({TrendingData: json.data.result}); // Simpan data Trending di state
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  klikSimpan() {
    if (this.state.trending === '') {
      Alert.alert('Silakan masukkan trending');
    } else {
      let urlAksi;
      if (this.state.idEdit) {
        urlAksi = `${this.url}?op=update_trending&id=${this.state.idEdit}`;
        this.setState({idEdit: null});
      } else {
        urlAksi = `${this.url}?op=create_trending`;
      }

      fetch(urlAksi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `trending=${this.state.trending}`,
      })
        .then(response => response.json())
        .then(json => {
          this.setState({trending: ''});
          this.ambilTabelTrending();
        });
    }
  }

  async klikEdit(id) {
    try {
      const response = await fetch(`${this.url}?op=detail_trending&id=${id}`);
      const json = await response.json();
      this.setState({trending: json.data.result[0].trending, idEdit: id});
    } catch (error) {
      console.error('Error editing trending:', error);
    }
  }

  klikDelete(id) {
    Alert.alert(
      'Konfirmasi Hapus',
      'Apakah Anda yakin ingin menghapus trend ini?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Hapus dibatalkan'),
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: async () => {
            try {
              const response = await fetch(
                `${this.url}?op=delete_trending&id=${id}`,
              );
              const json = await response.json();
              Alert.alert('Trend berhasil dihapus');
              this.ambilTabelTrending();
            } catch (error) {
              console.error('Error deleting trending:', error);
            }
          },
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    const {TrendingData} = this.state;
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Logo</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Utama')}
            style={styles.navButton}>
            <Text style={styles.nav}>Utama</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('About')}
            style={styles.navButton}>
            <Text style={styles.nav}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Trending')}
            style={styles.navButton}>
            <Text style={styles.nav}>Trending</Text>
          </TouchableOpacity>
        </View>

        {/* Trending Content */}
        <ScrollView style={styles.trendingContainer}>
          {TrendingData.map((trending, index) => (
            <View key={index} style={styles.singletrendingContainer}>
              <Text style={styles.judultrending}>#{trending.trending}</Text>
              <View style={styles.buttonContainer}>
                <View style={styles.buttonSpacing}>
                  <Button
                    title="Edit"
                    onPress={() => this.klikEdit(trending.id)}
                  />
                </View>
                <View style={styles.buttonSpacing}>
                  <Button
                    title="Delete"
                    onPress={() => this.klikDelete(trending.id)}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input Form */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan trending"
            value={this.state.trending}
            onChangeText={text => this.setState({trending: text})}
          />
          <Button title="Simpan" onPress={this.klikSimpan} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#e74c3c',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  nav: {
    fontSize: 16,
    color: '#FB6D48',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  trendingContainer: {
    flex: 1,
    padding: 20,
  },
  singletrendingContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  judultrending: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonSpacing: {
    marginHorizontal: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default Trending;
