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

export default class PeopleFeaturesScreen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 22 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen1/bonito.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 23 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen1/feliz.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 22 });
          }}>
            <Text style={styles.buttonText}>Bonito(a)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 23 });
          }}>
            <Text style={styles.buttonText}>Feliz</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 24 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen1/alegre.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 25 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen1/engracado.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 24 });
          }}>
            <Text style={styles.buttonText}>Alegre</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 25 });
          }}>
            <Text style={styles.buttonText}>Engraçado(a)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 26 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen1/legal.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures2', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2 });
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/proxima.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 26 });
          }}>
            <Text style={styles.buttonText}>Legal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures2', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2 });
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
    borderColor: '#7ab3d0',
    borderWidth: 0.5
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.209,
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