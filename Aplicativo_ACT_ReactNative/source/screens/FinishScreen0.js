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
      require('../images/colorsscreen/violeta.png'),
      require('../images/lettersscreen/ae.png'),
      require('../images/lettersscreen/fj.png'),
      require('../images/lettersscreen/ko.png'),
      require('../images/lettersscreen/pt.png'),
      require('../images/lettersscreen/uy.png'),
      require('../images/lettersscreen/z.png'),
      require('../images/numbersscreen/0.png'),
      require('../images/numbersscreen/12.png'),
      require('../images/numbersscreen/34.png'),
      require('../images/numbersscreen/56.png'),
      require('../images/numbersscreen/78.png'),
      require('../images/numbersscreen/9.png'),
      require('../images/operationsscreen/subtracao.png'),
      require('../images/operationsscreen/soma.png'),
      require('../images/operationsscreen/multiplicacao.png'),
      require('../images/operationsscreen/divisao.png')
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
      'Violeta',
      'De A até E',
      'De F até J',
      'De K até O',
      'De P até T',
      'De U até Y',
      'Letra Z',
      'Número 0',
      'Números 1 e 2',
      'Números 3 e 4',
      'Números 5 e 6',
      'Números 7 e 8',
      'Número 9',
      'Subtração',
      'Soma',
      'Multiplicação',
      'Divisão'
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