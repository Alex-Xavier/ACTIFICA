import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class FinishScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text>Eu sou a FinishScreen!!</Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF'
    }
});