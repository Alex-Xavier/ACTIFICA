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
            this.props.navigation.navigate('PeopleFeatures1');
          }}>
            <Image style={styles.cards} source={require('../images/afterpeopleverbsscreen/esta.png')} />
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1');
          }}>
            <Text style={styles.buttonText}>Está</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1');
          }}>
            <Image style={styles.cards} source={require('../images/afterpeopleverbsscreen/e.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('PeopleFeatures1');
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
    flexDirection: 'column',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cards: {
    aspectRatio: 1,
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.58,
    width: Dimensions.get('window').height * 0.58,
    backgroundColor: '#FFF',
    borderColor: '#7d253b',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.01
  },
  button: {
    height: Dimensions.get('window').width * 0.09,
    width: Dimensions.get('window').height * 0.3265,
    backgroundColor: '#7d253b',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7d253b',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: Dimensions.get('window').height * 0.01
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});