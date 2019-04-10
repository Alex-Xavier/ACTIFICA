import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';

export default class CustomCardsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='#FFF'
        />
        <Text>Eu sou a CustomCardsScreen!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      alignItems: 'center',
      backgroundColor: '#FFF',
      padding: 20
    }
});