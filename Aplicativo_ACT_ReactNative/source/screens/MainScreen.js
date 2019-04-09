import React from 'react';
import { StatusBar, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

//Responsividade em Layout
//var { height, width } = Dimension.get('window');

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='#7d253b'
        />
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/EuQuero.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/NaoQuero.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/EuEstou.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/NaoEstou.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/Escolher.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/Acoes.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 20
  },
  cards: {
    aspectRatio: 1,
    height: 135,
    width: 135,
    backgroundColor: '#FFF',
    borderColor: '#7d253b',
    borderWidth: 0.5,
    margin: 10
  }
});