import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native';

class Utama extends Component {
    constructor(props){
        super(props);
        this.state = { 
            berita: [
                { id: 1, 
                judul: 'Hyundai Pamerkan Seven Concept di IIMS 2024', 
                isi: 'Otomotif',  
                gambar: { uri: 'https://asset.kompas.com/crops/UuDggJJJROD5HPZNDQtFFCFFIiE=/0x56:1024x739/1070x713/data/photo/2024/02/24/65d961f8556c7.jpeg' }   },
                
                { id: 2, 
                judul: 'STY Tuntaskan Misi, Timnas Indonesia Putus 20 Tahun Puasa Kemenangan di Hanoi', 
                isi: 'Olahraga',  
                gambar: { uri: 'https://asset.kompas.com/crops/ADOmpVUAose2GklDiMIY46PEjEQ=/1x0:2861x1907/740x500/data/photo/2024/03/26/6602cc4418afe.jpeg' }  },
                
                { id: 3, 
                judul: 'Dinkes Bandung Ungkap Gejala DBD Dulu dan Sekarang Berbeda', 
                isi: 'Kesehatan',  
                gambar: { uri: 'https://asset.kompas.com/crops/IZpae7uaJjmuX_NSiggj6dFiBCg=/76x51:780x520/740x500/data/photo/2023/08/18/64df601b4cdc9.png' }  },
                
                { id: 4, 
                judul: 'Denisa "Ngaku" Serahkan Uang Hasil Penipuan Tiket Coldplay ke Seseorang Berinisil D', 
                isi: 'Trending',  
                gambar: { uri: 'https://asset.kompas.com/crops/Nb4ih7dz3uJN2AI7PRmYUIAs8ow=/0x0:0x0/177x117/data/photo/2024/03/26/6602c9f7495af.jpg' }  },
                
                { id: 5, 
                    judul: 'Hyundai Pamerkan Seven Concept di IIMS 2024', 
                    isi: 'Otomotif',  
                    gambar: { uri: 'https://asset.kompas.com/crops/UuDggJJJROD5HPZNDQtFFCFFIiE=/0x56:1024x739/1070x713/data/photo/2024/02/24/65d961f8556c7.jpeg' }   },
                    
                    { id: 6, 
                    judul: 'STY Tuntaskan Misi, Timnas Indonesia Putus 20 Tahun Puasa Kemenangan di Hanoi', 
                    isi: 'Olahraga',  
                    gambar: { uri: 'https://asset.kompas.com/crops/ADOmpVUAose2GklDiMIY46PEjEQ=/1x0:2861x1907/740x500/data/photo/2024/03/26/6602cc4418afe.jpeg' }  },
                    
            ]
        };
    }
    render(){
        return (
            // header
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.logo}>Logo</Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('About')} style={styles.navButton}><Text style={styles.nav}>About</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Artikel')} style={styles.navButton}><Text style={styles.nav}>Kategori</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Trending')} style={styles.navButton}><Text style={styles.nav}>Trending</Text></TouchableOpacity>
                </View>
            
            {/* berita */}
                <View style={styles.beritaContainer}>
                    <Text style={styles.beritaTitle}>Berita</Text>
                    {this.state.berita.map(item => (
                        <TouchableOpacity>
                        <View key={item.id} style={styles.singleBeritaContainer}>
                            <Image source={item.gambar} style={styles.gambarBerita} />
                            <View style={styles.beritaContent}>
                                <Text style={styles.judulBerita}>{item.judul}</Text>
                                <Text>{item.isi}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    ))}
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
        color: '#FB6D48',
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
