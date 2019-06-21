import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class NumbersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 25 });
          }}>
            <Image style={styles.cards} source={require('../images/numbersscreen/0.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 26 });
          }}>
            <Image style={styles.cards} source={require('../images/numbersscreen/12.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 25 });
          }}>
            <Text style={styles.buttonText}>Número 0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 26 });
          }}>
            <Text style={styles.buttonText}>Números 1 e 2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 27 });
          }}>
            <Image style={styles.cards} source={require('../images/numbersscreen/34.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 28 });
          }}>
            <Image style={styles.cards} source={require('../images/numbersscreen/56.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 27 });
          }}>
            <Text style={styles.buttonText}>Números 3 e 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 28 });
          }}>
            <Text style={styles.buttonText}>Números 5 e 6</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 29 });
          }}>
            <Image style={styles.cards} source={require('../images/numbersscreen/78.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 30 });
          }}>
            <Image style={styles.cards} source={require('../images/numbersscreen/9.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 29 });
          }}>
            <Text style={styles.buttonText}>Números 7 e 8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 30 });
          }}>
            <Text style={styles.buttonText}>Número 9</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  cardContainer: {
    height: Dimensions.get('window').width * 0.42,
    width: Dimensions.get('window').height * 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').height * 0.04,
    backgroundColor: '#FFF'
  },
  buttonContainer: {
    height: Dimensions.get('window').width * 0.09,
    width: Dimensions.get('window').height * 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').height * 0.04,
    backgroundColor: '#FFF'
  },
  cards: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.37,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#FFF',
    borderColor: '#ff780f',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.017
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#ff780f',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ff780f',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: Dimensions.get('window').height * 0.017
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});