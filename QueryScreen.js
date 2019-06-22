import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import { ScreenOrientation } from 'expo';

export default class QueryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 54 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/saberquem.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 55 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/saberquando.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 54 });
          }}>
            <Text style={styles.buttonText}>Saber quem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 55 });
          }}>
            <Text style={styles.buttonText}>Saber quando</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 56 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/saberonde.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 57 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/saberoporque.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 56 });
          }}>
            <Text style={styles.buttonText}>Saber onde</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 57 });
          }}>
            <Text style={styles.buttonText}>Saber o porquê</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 58 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/sabercomo.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondMain');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen2/voltar.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 58 });
          }}>
            <Text style={styles.buttonText}>Saber como</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondMain');
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
    height: Dimensions.get('window').width * 0.367,
    width: Dimensions.get('window').height * 0.367,
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