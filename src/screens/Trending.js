import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    TextInput,
    Button,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

class Trending extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            trendinglist: [] 
        };
    }

    componentDidMount(){
        this.loadtrending();
    }

    create = () => {
        const { text, trendinglist } = this.state; // Ambil state dari text dan trendinglist
        if (text.trim() === '') { // Periksa apakah text tidak kosong
            Alert.alert('Error', 'trending tidak boleh kosong');
            return;
        }

        const updatedtrendinglist = [...trendinglist, text]; // Tambahkan trending baru ke daftar trending
        this.setState({ trendinglist: updatedtrendinglist, text: '' }); // Perbarui state trendinglist dan reset text
        this.savetrending(updatedtrendinglist); // Simpan trending ke AsyncStorage
    }

    savetrending = async (data) => {
        try{
            await AsyncStorage.setItem('@database', JSON.stringify(data)); // Simpan data trending ke AsyncStorage
        } catch(e){
            console.log('Save Error', e);
        }
    }

    loadtrending = async () => {
        try{
            const value = await AsyncStorage.getItem('@database'); // Ambil data trending dari AsyncStorage
            if(value !== null){
                this.setState({ trendinglist: JSON.parse(value) }); // Setel state trendinglist dari data yang diambil
            }
        } catch(e){
            console.log('Get Error', e);
        }
    }

    deletetrending = (index) => {
        const { trendinglist } = this.state;
        const updatedtrendinglist = trendinglist.filter((item, idx) => idx !== index); // Filter trending yang akan dihapus
        this.setState({ trendinglist: updatedtrendinglist }); // Perbarui state trendinglist
        this.savetrending(updatedtrendinglist); // Simpan trending yang telah diubah ke AsyncStorage
    }

    render() {
        const { trendinglist, text } = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    {/* Header */}
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

                    {/* Input Baru */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Tambahkan Trending Baru"
                            value={text}
                            onChangeText={(text) => this.setState({ text })}
                        />
                        <Button title="Simpan" onPress={this.create} />
                    </View>

                    {/* Trending Content */}
                    <View style={styles.trendingContainer}>
                        {trendinglist.map((trending, index) => (
                            <View key={index} style={styles.singletrendingContainer}>
                                <Text style={styles.judultrending}>{index + 1}. {trending}</Text>
                                <TouchableOpacity onPress={() => this.deletetrending(index)}>
                                    <Text style={styles.deleteButton}>Hapus</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
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
    container: {
        flex: 1,
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
    deleteButton: {
        color: 'red',
        marginLeft: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
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
