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
    flexDirection: 'column',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cards: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.58,
    width: Dimensions.get('window').height * 0.58,
    backgroundColor: '#FFF',
    borderColor: '#7AB3D0',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.01
  },
  button: {
    height: Dimensions.get('window').width * 0.09,
    width: Dimensions.get('window').height * 0.3265,
    backgroundColor: '#7AB3D0',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7AB3D0',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: Dimensions.get('window').height * 0.01
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});