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
      require('../images/answerscreen/nao.png'),
      require('../images/answerscreen/sim.png'),
      require('../images/phrasescreen1/oi.png'),
      require('../images/phrasescreen1/podemeajudar.png'),
      require('../images/phrasescreen1/comovai.png'),
      require('../images/phrasescreen1/obrigado.png'),
      require('../images/phrasescreen1/desculpe.png'),
      require('../images/phrasescreen2/porfavor.png'),
      require('../images/phrasescreen2/tchau.png'),
      require('../images/phrasescreen2/estoubem.png'),
      require('../images/phrasescreen2/qualseunome.png'),
      require('../images/phrasescreen2/bomdia.png'),
      require('../images/phrasescreen2/boanoite.png'),
      require('../images/colorsscreen/amarelo.png'),
      require('../images/colorsscreen/vermelho.png'),
      require('../images/colorsscreen/azul.png'),
      require('../images/colorsscreen/alaranjado.png'),
      require('../images/colorsscreen/verde.png'),
      require('../images/colorsscreen/violeta.png')
    ];
    let texts = [
      'Não',
      'Sim',
      'Oi!',
      'Pode me ajudar?',
      'Como vai?',
      'Obrigado!',
      'Desculpe!',
      'Por favor!',
      'Tchau!',
      'Estou bem!',
      'Qual seu nome?',
      'Bom dia!',
      'Boa noite!',
      'Amarelo',
      'Vermelho',
      'Azul',
      'Alaranjado',
      'Verde',
      'Violeta'
    ];
    return (
      <View style={styles.container}>

        <Image style={styles.cards} source={images[this.props.navigation.state.params.image1]} />

        <View style={styles.button} >
            
          <Text style={styles.buttonText}>{texts[this.props.navigation.state.params.image1]}</Text>
          
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cards: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.9,
    width: Dimensions.get('window').height * 0.5,
    backgroundColor: '#FFF',
    borderColor: '#7d253b',
    borderWidth: 0.5
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.5,
    backgroundColor: '#7d253b',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7d253b',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: Dimensions.get('window').height * 0.02
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});