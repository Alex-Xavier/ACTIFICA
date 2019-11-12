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

export default class PeopleFeaturesScreen3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 32 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen3/calmo.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 33 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen3/ansioso.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 32 });
          }}>
            <Text style={styles.buttonText}>Calmo(a)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 33 });
          }}>
            <Text style={styles.buttonText}>Ansioso(a)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 34 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen3/inocente.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 35 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen3/justo.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 34 });
          }}>
            <Text style={styles.buttonText}>Tranquilo(a)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 35 });
          }}>
            <Text style={styles.buttonText}>Justo(a)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 36 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen3/forte.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 37 });
          }}>
            <Image style={styles.cards} source={require('../images/peoplefeaturesscreen3/indeciso.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 36 });
          }}>
            <Text style={styles.buttonText}>Forte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: this.props.navigation.state.params.image2, image3: 37 });
          }}>
            <Text style={styles.buttonText}>Indeciso(a)</Text>
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