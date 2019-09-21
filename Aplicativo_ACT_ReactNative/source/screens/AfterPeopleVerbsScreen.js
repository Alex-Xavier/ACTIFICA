import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class AfterPeopleVerbsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures1', { image1: this.props.navigation.state.params.image1, image2: 20 });
          }}>
            <Image style={styles.cards} source={require('../images/afterpeopleverbsscreen/esta.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures1', { image1: this.props.navigation.state.params.image1, image2: 20 });
          }}>
            <Text style={styles.buttonText}>Está</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures1', { image1: this.props.navigation.state.params.image1, image2: 21 });
          }}>
            <Image style={styles.cards} source={require('../images/afterpeopleverbsscreen/e.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures1', { image1: this.props.navigation.state.params.image1, image2: 21 });
          }}>
            <Text style={styles.buttonText}>é</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cards: {
    aspectRatio: 1,
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.58,
    width: Dimensions.get('window').height * 0.58,
    backgroundColor: '#FFF',
    borderColor: '#00f0ac',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.01
  },
  button: {
    height: Dimensions.get('window').width * 0.09,
    width: Dimensions.get('window').height * 0.3265,
    backgroundColor: '#00f0ac',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00f0ac',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: Dimensions.get('window').height * 0.01
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
  buttonAmarelo: {
    height: Dimensions.get('window').width * 0.08,

    width: Dimensions.get('window').height * 0.209,



    backgroundColor: '#f0ae00',


    justifyContent: 'center',
    alignItems: 'center',


    borderColor: '#f0ae00',
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

buttonAzul: {
    height: Dimensions.get('window').width * 0.08,

    width: Dimensions.get('window').height * 0.209,



    backgroundColor: '#7AB3D0',


    justifyContent: 'center',
    alignItems: 'center',


    borderColor: '#7AB3D0',
    borderWidth: 0.5,
    borderRadius: 5,

    
    margin: Dimensions.get('window').height * 0.017
  },

  cardsVerde: {

    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.37,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#FFF',
    borderColor: '#00F0AC',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.018

    
    
  },

  cardsAmarelo: {

    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.37,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#FFF',
    borderColor: '#f0ae00',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.018

    
    
  },

  cardsAzul: {

    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.37,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#FFF',
    borderColor: '#7AB3D0',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.018

    
    
  },

  cardLaranja: {

    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.37,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#FFF',
    borderColor: '#ff780f',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.018

    
   
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});