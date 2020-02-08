import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "eabf8529763c595328cb3bcd661c33d6";

export default class App extends Component {

  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weatherCondition: null,
    cityName: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
    },
    error => {
      this.setState({
        error: error
      });
    });
  }

  _getWeather = (lat, lon) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+API_KEY)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
        cityName: json.name,
        isLoaded: true
      });
    });
  }

  render() {
    const { isLoaded, error, temperature, weatherCondition, cityName } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {isLoaded ? (
          <Weather temp={Math.floor(temperature - 273.15)} weatherCondition={weatherCondition} cityName={cityName} />
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator />
            {error ? (
              <Text style={styles.errorText}>위치를 불러오는데 문제가 발생했습니다. 😢{'\n'}에러 메세지 : {error}</Text>
             ) : (
              <Text style={styles.loadingText}>날씨를 불러오는 중입니다! 조금만 기다려주세요 😊</Text>
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  errorText: {
    marginTop: 15,
    textAlign: 'center'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    marginTop: 15
  }
});
