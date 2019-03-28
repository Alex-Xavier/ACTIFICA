import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styles.box.borderColor}
        />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      padding: 20
    },
    box: {
      height: 135,
      width: 135,
      backgroundColor: "#FFF",
      borderColor: "#7d253b",
      borderWidth: 0.5,
      margin: 10
    }
});