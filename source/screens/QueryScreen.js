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

export default class QueryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 54 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/saberquem.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 55 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/saberquando.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 54 });
          }}>
            <Text style={styles.buttonText}>Saber quem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 55 });
          }}>
            <Text style={styles.buttonText}>Saber quando</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 56 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/saberonde.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 57 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/saberoporque.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 56 });
          }}>
            <Text style={styles.buttonText}>Saber onde</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 57 });
          }}>
            <Text style={styles.buttonText}>Saber o porquê</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 58 });
          }}>
            <Image style={styles.cards} source={require('../images/queryscreen/sabercomo.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('SecondMain');
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen2/voltar.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 58 });
          }}>
            <Text style={styles.buttonText}>Saber como</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('SecondMain');
          }}>
            <Text style={styles.buttonText}>Voltar</Text>
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
    borderColor: '#b80003',
    borderWidth: 0.5
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#b80003',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#b80003',
    borderWidth: 0.5,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});