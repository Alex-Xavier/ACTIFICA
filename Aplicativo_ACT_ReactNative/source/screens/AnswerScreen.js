import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class AnswerScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 1 });
          }}>
            <Image style={styles.cards} source={require('../images/answerscreen/sim.png')} />
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 1 });
          }}>
            <Text style={styles.buttonText}>Sim</Text>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 0 });
          }}>
            <Image style={styles.cards} source={require('../images/answerscreen/nao.png')} />
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Finish0', { image1: 0 });
          }}>
            <Text style={styles.buttonText}>Não</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cards: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.58,
    width: Dimensions.get('window').height * 0.35,
    borderColor: '#7ab3d0',
    borderWidth: 0.5
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.35,
    backgroundColor: '#7ab3d0',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7ab3d0',
    borderWidth: 0.5,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});