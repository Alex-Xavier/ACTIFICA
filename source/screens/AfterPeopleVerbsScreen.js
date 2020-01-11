import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class AfterPeopleVerbsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures1', { image1: this.props.navigation.state.params.image1, image2: 20 });
          }}>
            <Image style={styles.cards} source={require('../images/afterpeopleverbsscreen/esta.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures1', { image1: this.props.navigation.state.params.image1, image2: 20 });
          }}>
            <Text style={styles.buttonText}>Está</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures1', { image1: this.props.navigation.state.params.image1, image2: 21 });
          }}>
            <Image style={styles.cards} source={require('../images/afterpeopleverbsscreen/e.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondPeopleFeatures1', { image1: this.props.navigation.state.params.image1, image2: 21 });
          }}>
            <Text style={styles.buttonText}>é</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cards: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.58,
    width: Dimensions.get('window').height * 0.35,
    borderColor: '#00f0ac',
    borderWidth: 0.5
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.35,
    backgroundColor: '#00f0ac',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00f0ac',
    borderWidth: 0.5,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});