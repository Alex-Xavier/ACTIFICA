import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
//import { Container } from './styles';

export default class customCards {
    render() {
      return (
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#7d253b"
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: "wrap",
      alignItems: "center",
      backgroundColor: "#FFF",
      padding: 20
    }
});