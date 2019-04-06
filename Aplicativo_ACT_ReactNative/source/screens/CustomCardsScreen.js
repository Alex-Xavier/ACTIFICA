import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

export default class CustomCards extends React.Component {
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