import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class LettersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 19 });
          }}>
            <Image style={styles.cards} source={require('../images/lettersscreen/ae.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 20 });
          }}>
            <Image style={styles.cards} source={require('../images/lettersscreen/fj.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 19 });
          }}>
            <Text style={styles.buttonText}>De A até E</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 20 });
          }}>
            <Text style={styles.buttonText}>De F até J</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 21 });
          }}>
            <Image style={styles.cards} source={require('../images/lettersscreen/ko.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 22 });
          }}>
            <Image style={styles.cards} source={require('../images/lettersscreen/pt.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 21 });
          }}>
            <Text style={styles.buttonText}>De K até O</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 22 });
          }}>
            <Text style={styles.buttonText}>De P até T</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 23 });
          }}>
            <Image style={styles.cards} source={require('../images/lettersscreen/uy.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 24 });
          }}>
            <Image style={styles.cards} source={require('../images/lettersscreen/z.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 23 });
          }}>
            <Text style={styles.buttonText}>De U até Y</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 24 });
          }}>
            <Text style={styles.buttonText}>Letra Z</Text>
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