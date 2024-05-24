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
            judul: '',
            kategori: '',
            deskripsi: '',
            gambar: '',
            listData: [],
            idEdit: null,
        };
        this.url = "http://192.168.18.158/Bezz/api.php"; //bisa diganti sendiri sesuai api yang dibuat di htdocs
    }
    
    componentDidMount(){
        this.ambilListData();
    }
        
    async ambilListData(){
        await fetch(this.url)
        .then((response) => response.json())
        .then((json) => {
            console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
            this.setState({ listData: json.data.result });
        })
        .catch((error) => {
            console.log(error);
        });
    }
       
    render(){
        return (
            <View style={styles.container}>
                {/* header */}
                <View style={styles.header}>
                    <Text style={styles.logo}>Logo</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')} style={styles.navButton}>
                        <Text style={styles.nav}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Artikel')} style={styles.navButton}>
                        <Text style={styles.nav}>Kategori</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Trending')} style={styles.navButton}>
                        <Text style={styles.nav}>Trending</Text>
                    </TouchableOpacity>
                </View>

                {/* Isi */}
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.beritaContainer}>
                        <Text style={styles.beritaTitle}>Berita</Text>
                        {this.state.listData.map(item => (
                            <TouchableOpacity 
                                onPress={() => this.props.navigation.navigate('Berita', { item })} 
                                key={item.id}
                            >
                                <View style={styles.singleBeritaContainer}>
                                    <Image source={{ uri: item.gambar }} style={styles.gambarBerita} />
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
