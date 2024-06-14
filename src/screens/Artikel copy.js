import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

class Artikel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: '',
      kategori: '',
      deskripsi: '',
      gambar: '',
      listData: [],
      currentCategory: '',
      kategoriData: [], // State untuk menyimpan data kategori
    };
    this.url = 'http://192.168.18.158/Bezz/api.php'; // Pastikan URL ini benar
  }

  componentDidMount() {
    this.ambilListData();
    this.ambilTabelKategori();
  }

  async ambilListData() {
    try {
      let response = await fetch(this.url);
      let json = await response.json();
      console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
      this.setState({listData: json.data.result});
    } catch (error) {
      console.error(error);
    }
  }

  async ambilTabelKategori() {
    try {
      const response = await fetch(
        'http://192.168.18.158/Bezz/api.php?op=tabel_kategori',
      );
      const json = await response.json();
      console.log(
        'Data Kategori yang didapat: ' + JSON.stringify(json.data.result),
      );
      this.setState({kategoriData: json.data.result}); // Simpan data kategori di state
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  render() {
    const {listData, currentCategory, kategoriData} = this.state;

    // Membuat tautan kategori berdasarkan data kategori dari state
    const kategoriLinks = kategoriData.map((kategori, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => this.setState({currentCategory: kategori.kategori})}
        style={styles.link}>
        <Text style={styles.linkkategori}>{kategori.kategori}</Text>
      </TouchableOpacity>
    ));

    // Filter berita berdasarkan kategori saat ini
    const filtered = currentCategory
      ? listData.filter(item => item.kategori === currentCategory)
      : listData;

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

        {/* Category */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.category}>{kategoriLinks}</View>
        </ScrollView>

        {/* Berita */}
        <ScrollView style={styles.scrollViewBerita}>
          <View style={styles.beritaContainer}>
            {filtered.map(item => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Berita', {item})}
                key={item.id}>
                <View style={styles.singleBeritaContainer}>
                  <Image
                    source={{uri: item.gambar}}
                    style={styles.gambarBerita}
                  />
                  <View style={styles.beritaContent}>
                    <Text style={styles.judulBerita}>{item.judul}</Text>
                    <Text>{item.kategori}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Header
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

  // Category
  scrollView: {
    flexDirection: 'row',
  },
  category: {
    backgroundColor: '#FF8C00',
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  linkkategori: {
    fontSize: 14,
    marginRight: 20,
    padding: 10,
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },

  // Berita
  scrollViewBerita: {
    padding: 20,
  },
  //berita
  beritaContainer: {
    padding: 5,
  },
  singleBeritaContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
  },
  gambarBerita: {
    width: 150,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  beritaContent: {
    flex: 1,
  },
  judulBerita: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Artikel;
