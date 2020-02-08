import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';

const weatherCase = {
    Rain: {
        colors: ['#46b5d1', '#32407b'],
        title: "Rainy Day",
        subcon: "Take an umbrella with you ☂️",
        source: require('./Lottie/ShowerIcon.json')
    },
    Thunderstorm: {
        colors: ['#8b4367', '#01024e'],
        title: "Thunderstom 🌩️",
        subcon: "Lightning gave me a Harry Potter scar !",
        source: require('./Lottie/ThunderstormIcon.json')
    },
    Drizzle: {
        colors: ['#d9eeec', '#3c70a4'],
        title: "Drizzle Day",
        subcon: "Let's wait until the rain stops.",
        source: require('./Lottie/ShowerIcon.json')
    },
    Snow: {
        colors: ['#6bc5d2', '#f1c6e7'],
        title: "Snow Day",
        subcon: "Do you wanna build a snowman? ☃️",
        source: require('./Lottie/SnowIcon.json')
    },
    Atmosphere: {
        colors: ['#cccccc', '#9656a1'],
        title: "Atmosphere Day",
        subcon: "The fog envelops the earth.",
        source: require('./Lottie/AtmosphereIcon.json')
    },
    Clear: {
        colors: ['#ffa259', '#ee4540'],
        title: "Sunny Day ☀️",
        subcon: "Let's go on a picnic !",
        source: require('./Lottie/ClearIcon.json')
    },
    Clouds: {
        colors: ['#46b3e6', '#393e46'],
        title: "Clouds Day",
        subcon: "The clouds have come up a good deal.",
        source: require('./Lottie/CloudsIcon.json')
    }
}

function Weather({ temp, weatherCondition, cityName }) {
    return (
        <LinearGradient colors={weatherCase[weatherCondition].colors} style={styles.container}>
                <View style={styles.upper}>
                <LottieView source={weatherCase[weatherCondition].source} style={{width: 180, height: 180}} autoPlay loop/>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.location}>{cityName}</Text>
                    <Text style={styles.tempText}>{temp}℃</Text>
                    <Text style={styles.ConTitle}>{weatherCase[weatherCondition].title}</Text>
                    <Text style={styles.ConSub}>{weatherCase[weatherCondition].subcon}</Text>
                </View>
            </LinearGradient>
    );
}
export default Weather;

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherCondition: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired
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
        marginBottom: 70
    },
    location: {
        fontSize: 18,
        color: 'white',
        marginBottom: 7
    },
    tempText: {
        fontSize: 45,
        marginBottom: 120,
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
        fontSize: 18,
        backgroundColor: 'transparent',
        color: 'white'
    }
});