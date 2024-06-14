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
import {Dropdown} from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropdownComponent from './Dropdown';

class CRUDBerita extends Component {
  constructor(props) {
    super(props);
    const {item} = this.props.route.params ?? {};

    this.state = {
      judul: item ? item.judul : '',
      kategori_id: '', // Updated state
      deskripsi: item ? item.deskripsi : '',
      gambar: item ? item.gambar : '',
      listData: [],
      idEdit: item ? item.id : null,
      title: item ? 'Edit Berita' : 'Tambah Berita',
    };
    this.url = 'http://192.168.18.158/Bezz/api.php';
    this.klikSimpan = this.klikSimpan.bind(this);
    this.klikEdit = this.klikEdit.bind(this);
    this.klikDelete = this.klikDelete.bind(this);
  }

  klikSimpan() {
    if (
      this.state.judul === '' ||
      this.state.deskripsi === '' ||
      this.state.kategori_id === ''
    ) {
      Alert.alert('Silakan masukkan data');
    } else {
      var responseClone;
      let urlAksi;
      if (this.state.idEdit) {
        urlAksi = `${this.url}?op=update&id=${this.state.idEdit}`;
        this.setState({idEdit: null});
      } else {
        urlAksi = `${this.url}?op=create`;
      }

      fetch(urlAksi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'judul=' +
          this.state.judul +
          '&kategori_id=' +
          this.state.kategori_id +
          '&deskripsi=' +
          this.state.deskripsi +
          '&gambar=' +
          this.state.gambar,
      })
        .then(response => {
          responseClone = response.clone();
          return response.json();
        })
        .then(
          json => {
            try {
              this.setState({judul: '', deskripsi: '', gambar: ''}); // Reset fields
            } catch (error) {
              console.error('Error parsing JSON:', error);
              Alert.alert('Error', 'Terjadi kesalahan saat memproses data');
            }
          },
          function (rejectionReason) {
            console.log(this.state.kategori_id);
            console.log(
              'Error parsing JSON from response:',
              rejectionReason,
              responseClone,
            );
            responseClone.text().then(function (bodyText) {
              console.log(
                'Received the following instead of valid JSON:',
                bodyText,
              );
            });
          },
        )
        .then(Alert.alert('Berita berhasil ditambahkan'))
        .then(() => this.props.navigation.replace('Utama'))
        .catch(error => {
          console.error('Error saving data:', error);
          Alert.alert('Error', 'Terjadi kesalahan saat menyimpan data');
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

        {/* Trending Content
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
        </ScrollView> */}

        {/* Input Form */}
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Utama')}
            style={styles.backButton}>
            <Text style={styles.nav}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.beritaTitle}>{this.state.title}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Judul Berita"
            value={this.state.judul}
            onChangeText={text => this.setState({judul: text})}
          />

          <DropdownComponent
            value={this.state.kategori_id}
            onChange={item => this.setState({kategori_id: item.id})}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Deskripsi Berita"
            value={this.state.deskripsi}
            onChangeText={text => this.setState({deskripsi: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan Url Gambar"
            value={this.state.gambar}
            onChangeText={text => this.setState({gambar: text})}
          />
        </View>
        <Button title="Simpan" onPress={this.klikSimpan} />
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
  beritaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    width: 100,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
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
    flexDirection: 'column',
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
  textInput: {
    padding: 10,
    fontSize: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    backgroundColor: '#dedede',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default CRUDBerita;
