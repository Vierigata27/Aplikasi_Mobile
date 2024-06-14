import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; 
import { StackActions } from '@react-navigation/native';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Login'))
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Menampilkan gambar dan teks selamat datang */}
                <Image
                    source={require('../../src/images/anoninews.png')}
                    style={styles.logo}
                />
                {/* <Text style={styles.text}>Selamat Datang</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
    },
    logo: {
        width: 500, 
        height: 500, 
        resizeMode: 'contain', 
        marginBottom: 20, 
    },
    text: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#333', 
    },
});

export default SplashScreen;
