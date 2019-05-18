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
      require('../images/answerscreen/sim.png')
    ];
    let texts = [
      'Não',
      'Sim'
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