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

export default class DearPeopleScreen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 2 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen1/mamae.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 3 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen1/papai.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 2 });
          }}>
            <Text style={styles.buttonText}>Mamãe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 3 });
          }}>
            <Text style={styles.buttonText}>Papai</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 4 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen1/meuvovo.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 5 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen1/minhavovo.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 4 });
          }}>
            <Text style={styles.buttonText}>Meu vovô</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 5 });
          }}>
            <Text style={styles.buttonText}>Minha vovó</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 6 });
          }}>
            <Image style={styles.cards} source={require('../images/dearpeoplescreen1/professora.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('DearPeople2', { image1: this.props.navigation.state.params.image1 });
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/proxima.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish1', { image1: this.props.navigation.state.params.image1, image2: 1, image3: 6 });
          }}>
            <Text style={styles.buttonText}>A professora</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('DearPeople2', { image1: this.props.navigation.state.params.image1 });
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