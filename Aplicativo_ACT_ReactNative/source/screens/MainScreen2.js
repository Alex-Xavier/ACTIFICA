import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class MainScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Phrase1');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen2/social.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondDearPeople1');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen2/pessoas.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Phrase1');
          }}>
            <Text style={styles.buttonText}>Socializar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondDearPeople1');
          }}>
            <Text style={styles.buttonText}>Pessoas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1', { image0: 78});
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen2/eusou.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1', { image0: 79});
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen2/eunaosou.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1', { image0: 78});
          }}>
            <Text style={styles.buttonText}>Eu sou</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1', { image0: 79});
          }}>
            <Text style={styles.buttonText}>Eu não sou</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Main1');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen2/voltar.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Main1');
          }}>
            <Text style={styles.buttonText}>Voltar</Text>
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
    aspectRatio: 1,
    resizeMode: 'contain',

    height: Dimensions.get('window').width * 0.37,

    width: Dimensions.get('window').height * 0.209,

    
    backgroundColor: '#FFF',
    borderColor: '#7d253b',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.018
  },
  button: {
    height: Dimensions.get('window').width * 0.08,

    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#7d253b',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7d253b',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: Dimensions.get('window').height * 0.017
  },

  buttonVerde: {
    height: Dimensions.get('window').width * 0.08,

    width: Dimensions.get('window').height * 0.209,



    backgroundColor: '#00F0AC',


    justifyContent: 'center',
    alignItems: 'center',


    borderColor: '#00F0AC',
    borderWidth: 0.5,
    borderRadius: 5,

    
    margin: Dimensions.get('window').height * 0.017
  },

  buttonLaranja: {
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