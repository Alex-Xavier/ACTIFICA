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

export default class PeopleFeaturesScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 27 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen2/bravo.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 28 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen2/triste.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 27 });
          }}>
            <Text style={styles.buttonText}>Bravo(a)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 28 });
          }}>
            <Text style={styles.buttonText}>Triste</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 29 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen2/medroso.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 30 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen2/apaixonado.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 29 });
          }}>
            <Text style={styles.buttonText}>Medroso(a)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 30 });
          }}>
            <Text style={styles.buttonText}>Apaixonado(a)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 31 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen2/agitado.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures3', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2 });
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/proxima.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 31 });
          }}>
            <Text style={styles.buttonText}>Agitado(a)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures3', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2 });
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