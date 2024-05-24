import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

class Utama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mahasiswa: [
        {
          nama: 'Marcellinus Aditya Vitro D.',
          npm: '21081010107',
        },

        {
          nama: 'Vieri Arief M.',
          npm: '21081010140',
        },
        {
          nama: 'Yovi Ibnu Nasikhin',
          npm: '21081010128',
        },
      ],
    };
  }
  render() {
    return (
      // header
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.logo}>Logo</Text>
          <TouchableOpacity style={styles.navButton}
          onPress={() => this.props.navigation.navigate('Utama')}>
            <Text style={styles.nav}>
              Utama
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}
          onPress={() => this.props.navigation.navigate('Artikel')}>
            <Text style={styles.nav}>Kategori</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}
          onPress={() => this.props.navigation.navigate('Trending')}>
            <Text style={styles.nav}>Trending</Text>
          </TouchableOpacity>
        </View>

        {/* berita */}
        <View style={styles.beritaContainer}>
          <Text style={styles.beritaTitle}>About</Text>
          <Text>
            Aplikasi ini merupakan project yang ditujukan untuk pemenuhan nilai
            UTS pada kelas Aplikasi Mobile A081
          </Text>
          <Text>Dimana kelompok beranggotakan :</Text>
          {this.state.mahasiswa.map(item => (
            <Text>
              -{item.nama} ({item.npm})
            </Text>
          ))}
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
              marginTop: 10,
            }}>
            Aplikasi
          </Text>
          <Text>
            Aplikasi ini merupakan aplikasi berita dimana aplikasi dapat
            menampilkan halaman-halaman yang berisikan:
          </Text>
          <Text style={{paddingStart: 10, paddingTop: 5}}>
            1. Halaman Utama
          </Text>
          <Text style={{paddingStart: 25, paddingTop: 5}}>
            Halaman ini merupakan halaman awal yang akan diperlihatkan pertama
            kali ketika aplikasi dibuka. Struktur halaman ini ada Header yang
            berfungsi sebagai Navigation Bar, Lalu ada list berita yang
            berisikan gambar, judul dan kategori dari berita tersebut
          </Text>
          <Text style={{paddingStart: 10, paddingTop: 5}}>
            2. Halaman About
          </Text>
          <Text style={{paddingStart: 25, paddingTop: 5}}>
            Halaman yang menampilkan perihal terkait aplikasi ini yang mana
            merupakan projek ETS. Halaman ini berikan pengenalan anggota
            kelompok dan penjelasan isi dari setiap halaman yang ada di aplikasi
            ini
          </Text>
          <Text style={{paddingStart: 10, paddingTop: 5}}>
            3. Halaman Trending
          </Text>
          <Text style={{paddingStart: 25, paddingTop: 5}}>
            Halaman yang menampilkan list dari kategori berita yang saat ini
            sedang hangat diperbincangkan yang mana akan diurutkan dari atas ke
            bawah.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
    color: '#e74c3c',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  beritaContainer: {
    padding: 20,
  },
  beritaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default Utama;
