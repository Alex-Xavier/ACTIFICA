import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styles.container.backgroundColor}
        />
        <Text style={styles.welcome}>Bem vindo ao ACT!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "##BA55D3",
    fontWeight: "bold"
  }
});
