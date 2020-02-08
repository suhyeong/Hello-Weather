import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {

    render() {
        return (
            <LinearGradient colors={['#e4f9ff', '#0fabbc']} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color='white' size={100} name='ios-rainy' />
                </View>
                <View style={styles.lower}>
                    <Text style={styles.location}>location here</Text>
                    <Text style={styles.temp}>Temp here</Text>
                    <Text style={styles.ConTitle}>Contents here</Text>
                    <Text style={styles.ConSub}>Sub Contents here</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 50
    },
    location: {
        fontSize: 18,
        color: 'white'
    },
    temp: {
        fontSize: 45,
        marginBottom: 150,
        backgroundColor: 'transparent',
        color: 'white'
    },
    ConTitle: {
        fontSize: 35,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 12
    },
    ConSub: {
        fontSize: 25,
        backgroundColor: 'transparent',
        color: 'white'
    }
});