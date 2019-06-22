import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class PhraseScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 7 });
          }}>
            <Image style={styles.cards} source={require('../images/phrasescreen2/porfavor.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 8 });
          }}>
            <Image style={styles.cards} source={require('../images/phrasescreen2/tchau.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 7 });
          }}>
            <Text style={styles.buttonText}>Por favor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 8 });
          }}>
            <Text style={styles.buttonText}>Tchau</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 9 });
          }}>
            <Image style={styles.cards} source={require('../images/phrasescreen2/estoubem.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 10 });
          }}>
            <Image style={styles.cards} source={require('../images/phrasescreen2/qualseunome.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 9 });
          }}>
            <Text style={styles.buttonText}>Estou bem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 10 });
          }}>
            <Text style={styles.buttonText}>Qual seu nome?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 11 });
          }}>
            <Image style={styles.cards} source={require('../images/phrasescreen2/bomdia.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 12 });
          }}>
            <Image style={styles.cards} source={require('../images/phrasescreen2/boanoite.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 11 });
          }}>
            <Text style={styles.buttonText}>Bom dia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 12 });
          }}>
            <Text style={styles.buttonText}>Boa noite</Text>
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
    borderColor: '#c2002a',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.018
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#c2002a',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c2002a',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: Dimensions.get('window').height * 0.017
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});