import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class BeforePeopleVerbsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Image style={styles.cards} source={require('../images/beforepeopleverbsscreen/ondeesta.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/euquero.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Text style={styles.buttonText}>Onde está?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Text style={styles.buttonText}>Eu quero</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/naoquero.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Image style={styles.cards} source={require('../images/beforepeopleverbsscreen/vamosbrincar.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Text style={styles.buttonText}>Não quero</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Text style={styles.buttonText}>Vamos brincar?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Image style={styles.cards} source={require('../images/beforepeopleverbsscreen/querconversar.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondDearPeople1');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen2/pessoas.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('DearPeople1');
          }}>
            <Text style={styles.buttonText}>Quer conversar?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondDearPeople1');
          }}>
            <Text style={styles.buttonText}>Pessoas</Text>
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
    
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.37,
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