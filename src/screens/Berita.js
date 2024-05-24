import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

class Berita extends Component {
    render(){
        const { item } = this.props.route.params;
        return (
            <View style={styles.container}>
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
                
                <ScrollView style={styles.content}>
                    <Image
                        source={{ uri: item.gambar }}
                        style={styles.newsImage}
                    />
                    <Text style={styles.title}>{item.judul}</Text>
                    <Text style={styles.category}>'{item.kategori}'</Text>
                    <Text style={styles.newsText}>
                    {item.deskripsi}
                    </Text>
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
    content: {
      padding: 20,
    },
    newsImage: {
      width: '100%',
      height: 200,
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 5,
    },
    category: {
      fontSize: 18,
      color: 'black',
      marginBottom: 10,
    },
    newsText: {
      fontSize: 16,
      lineHeight: 24,
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

export default Berita;
