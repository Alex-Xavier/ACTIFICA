import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

export default class HomeIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate('Main');
      }}>
        <Image style={styles.buttonHome} source={require('../icons/home.png')} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonHome: {
    aspectRatio: 1,
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.08,
    margin: Dimensions.get('window').height * 0.018
    }
});