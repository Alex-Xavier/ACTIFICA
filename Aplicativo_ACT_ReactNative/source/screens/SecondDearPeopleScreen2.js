import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class SecondDearPeopleScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/meutitio.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/minhatitia.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Text style={styles.buttonText}>Meu titio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Text style={styles.buttonText}>Minha titia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/meuprimo.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/minhaprima.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Text style={styles.buttonText}>Meu primo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Text style={styles.buttonText}>Minha prima</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/meuamigo.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/minhaamiga.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Text style={styles.buttonText}>Meu amigo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('BeforePeopleVerbs');
          }}>
            <Text style={styles.buttonText}>Minha amiga</Text>
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