import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native';

class Artikel extends Component {
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
            ],
            currentCategory : 'Otomotif'
        };
    }
    render() {
        const { berita, currentCategory } = this.state;
        // Cari berita dengan isi tertentu
        const filtered = berita.filter(item => item.isi === currentCategory);
        return (
            <View style={styles.container}>
                {/* header */}
                <View style={styles.header}>
                    <Text style={styles.logo}>Logo</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Utama')} style={styles.navButton}>
                        <Text style={styles.nav}>Utama</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')} style={styles.navButton}>
                        <Text style={styles.nav}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Trending')} style={styles.navButton}>
                        <Text style={styles.nav}>Trending</Text>
                    </TouchableOpacity>
                </View>

                {/* category */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.category}>
                    <TouchableOpacity onPress={() => this.setState({ currentCategory: 'Otomotif' })} style={styles.link}>
                        <Text style={styles.linkkategori}>Otomotif</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ currentCategory: 'Olahraga' })} style={styles.link}>
                        <Text style={styles.linkkategori}>Olahraga</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ currentCategory: 'Kesehatan' })} style={styles.link}>
                        <Text style={styles.linkkategori}>Kesehatan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ currentCategory: 'Kesehatan' })} style={styles.link}>
                        <Text style={styles.linkkategori}>Sains</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ currentCategory: 'Kesehatan' })} style={styles.link}>
                        <Text style={styles.linkkategori}>Internasional</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>

                {/* berita */}
                <ScrollView style={styles.scrollViewBerita}>
                    <View style={styles.beritaContainer}>
                        {filtered.map(item => (
                            <TouchableOpacity key={item.id}>
                                <View style={styles.singleBeritaContainer}>
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
                
            </View>
        );
    }
}  

const styles = StyleSheet.create({
    // header
    header: {
        backgroundColor: '#e74c3c',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    //categori
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
    link: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },

    //berita
    beritaContainer: {
        padding: 20,
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
