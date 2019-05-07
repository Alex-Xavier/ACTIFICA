import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';

export default class FinishScreen extends React.Component {
  render() {
    let images = [
      require('../images/mainscreen1/euquero.png'),
      require('../images/playsscreen1/assistirtv.png'),
      require('../images/playsscreen1/ouvirmusica.png'),
      require('../images/playsscreen1/cachorro.png'),
      require('../images/playsscreen1/carrinho.png'),
      require('../images/playsscreen1/boneca.png'),
    ];
    let texts = [
      'Eu quero',
      'assistir tv!',
      'ouvir música!',
      'o cachorro!',
      'o carrinho!',
      'a boneca!',
    ];
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          
          <Image style={styles.cards} source={images[this.props.params.navigate.image1]} />
          <Image style={styles.cards} source={images[this.props.params.navigate.image2]} />
          
        </View>

        <View style={styles.buttonContainer} >
          
          <View style={styles.button} >
            
            <Text style={styles.buttonText}>{texts[this.props.params.navigate.image1]}</Text>
          
          </View>
          
          <View style={styles.button} >
          
            <Text style={styles.buttonText}>{texts[this.props.params.navigate.image2]}</Text>
          
          </View>
          
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  cardContainer: {
    height: Dimensions.get('window').width * 0.42,
    width: Dimensions.get('window').height * 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Dimensions.get('window').height * 0.04,
    backgroundColor: '#FFF'
  },
  buttonContainer: {
    height: Dimensions.get('window').width * 0.09,
    width: Dimensions.get('window').height * 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Dimensions.get('window').height * 0.04,
    backgroundColor: '#FFF'
  },
  cards: {
    aspectRatio: 1,
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.209,
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
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});