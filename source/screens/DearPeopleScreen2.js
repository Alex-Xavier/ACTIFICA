import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import { ScreenOrientation } from 'expo';

export default class DearPeopleScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 7 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/meutitio.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 8 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/minhatitia.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 7 });
          }}>
            <Text style={styles.buttonText}>Meu titio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 8 });
          }}>
            <Text style={styles.buttonText}>Minha titia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 9 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/meuprimo.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 10 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/minhaprima.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 9 });
          }}>
            <Text style={styles.buttonText}>Meu primo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 10 });
          }}>
            <Text style={styles.buttonText}>Minha prima</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 11 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/meuamigo.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 12 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen2/minhaamiga.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 11 });
          }}>
            <Text style={styles.buttonText}>Meu amigo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 12 });
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
    justifyContent: 'center'
  },
  cardContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cards: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.37,
    width: Dimensions.get('window').height * 0.209,
    borderColor: '#f0ae00',
    borderWidth: 0.5
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#f0ae00',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f0ae00',
    borderWidth: 0.5,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});