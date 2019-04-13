import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.primaryContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('CustomCards');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen/EuQuero.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('CustomCards');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen/NaoQuero.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.primaryLineContainer}>  
          <TouchableOpacity style={styles.button} onPress={null}>
            <Text style={styles.buttonText}>Eu Quero</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={null}>
            <Text style={styles.buttonText}>Não Quero</Text>
          </TouchableOpacity>
        </View>

        {/*<TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/EuEstou.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/NaoEstou.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/Escolher.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('CustomCards');
        }}>
          <Image style={styles.cards} source={require('../images/mainscreen/Acoes.png')} />
        </TouchableOpacity>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  primaryContainer: {
    height: Dimensions.get('window').width * 0.4,
    width: Dimensions.get('window').height * 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#FFF'
  },
  primaryLineContainer: {
    height: Dimensions.get('window').width * 0.09,
    width: Dimensions.get('window').height * 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#FFF'
  },
  secondContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 20
  },
  secondLineContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 20
  },
  thirdContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 20
  },
  thirdLineContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 20
  },
  cards: {
    aspectRatio: 1,
    height: Dimensions.get('window').width * 0.367,
    width: Dimensions.get('window').height * 0.367,
    backgroundColor: '#FFF',
    borderColor: '#7d253b',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 11
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
    margin: 9.99
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});