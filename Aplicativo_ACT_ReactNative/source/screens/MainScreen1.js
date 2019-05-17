import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class MainScreen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <StatusBar
          backgroundColor='#FFF'
          barStyle='dark-content'
        />

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondMain', { image0: 0});
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/euquero.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondMain', { image0: 59});
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/naoquero.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondMain', { image0: 0});
          }}>
            <Text style={styles.buttonText}>Eu quero</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondMain', { image0: 59});
          }}>
            <Text style={styles.buttonText}>Não quero</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/euestou.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/naoestou.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1');
          }}>
            <Text style={styles.buttonText}>Eu estou</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1');
          }}>
            <Text style={styles.buttonText}>Não estou</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Answer');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/escolher.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Main2');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/proxima.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Answer');
          }}>
            <Text style={styles.buttonText}>Responder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Main2');
          }}>
            <Text style={styles.buttonText}>Próxima</Text>
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