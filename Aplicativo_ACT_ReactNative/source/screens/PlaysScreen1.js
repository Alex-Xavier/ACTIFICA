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

export default class PlaysScreen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 1} );
          }}>
            <Image style={styles.cards} source={require('../images/playsscreen1/assistirtv.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 2} );
          }}>
            <Image style={styles.cards} source={require('../images/playsscreen1/ouvirmusica.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.buttonVerde} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 1} );
          }}>
            <Text style={styles.buttonText}>Assistir tv</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonVerde} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 2} );
          }}>
            <Text style={styles.buttonText}>Ouvir música</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 3} );
          }}>
            <Image style={styles.cards} source={require('../images/playsscreen1/cachorro.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 4} );
          }}>
            <Image style={styles.cards} source={require('../images/playsscreen1/carrinho.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 3} );
          }}>
            <Text style={styles.buttonText}>O cachorro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 4} );
          }}>
            <Text style={styles.buttonText}>O carrinho</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 5} );
          }}>
            <Image style={styles.cards} source={require('../images/playsscreen1/boneca.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Plays2', { image0: this.props.navigation.state.params.image0});
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/proxima.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', {image1: this.props.navigation.state.params.image0, image2: 5} );
          }}>
            <Text style={styles.buttonText}>A boneca</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Plays2', { image0: this.props.navigation.state.params.image0});
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
    borderColor: '#ff780f',
    borderWidth: 0.5
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#ff780f',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ff780f',
    borderWidth: 0.5,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});