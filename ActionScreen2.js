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

export default class ActionScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 28 });
          }}>
            <Image style={styles.cards} source={require('../images/actionscreen2/correr.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('DearPeople1', { image1: this.props.navigation.state.params.image0 });
          }}>
            <Image style={styles.cards} source={require('../images/actionscreen2/ligarpara.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 28 });
          }}>
            <Text style={styles.buttonText}>Correr</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('DearPeople1', { image1: this.props.navigation.state.params.image0 });
          }}>
            <Text style={styles.buttonText}>Ligar para</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 29 });
          }}>
            <Image style={styles.cards} source={require('../images/actionscreen2/subir.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 30 });
          }}>
            <Image style={styles.cards} source={require('../images/actionscreen2/descer.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 29 });
          }}>
            <Text style={styles.buttonText}>Subir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 30 });
          }}>
            <Text style={styles.buttonText}>Descer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Places', { image1: this.props.navigation.state.params.image0 });
          }}>
            <Image style={styles.cards} source={require('../images/actionscreen2/irpara.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Action3', { image0: this.props.navigation.state.params.image0});
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/proxima.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Places', { image1: this.props.navigation.state.params.image0 });
          }}>
            <Text style={styles.buttonText}>Ir para</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Action3', { image0: this.props.navigation.state.params.image0});
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
    borderColor: '#00f0ac',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.018
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#00f0ac',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00f0ac',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: Dimensions.get('window').height * 0.017
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});