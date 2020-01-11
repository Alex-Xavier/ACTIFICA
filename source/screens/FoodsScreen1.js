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

export default class FoodsScreen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 37 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen1/doce.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 38 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen1/ovo.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 37 });
          }}>
            <Text style={styles.buttonText}>Doce</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 38 });
          }}>
            <Text style={styles.buttonText}>Ovo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 39 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen1/saladadefrutas.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 40 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen1/salada.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 39 });
          }}>
            <Text style={styles.buttonText}>Salada de frutas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 40 });
          }}>
            <Text style={styles.buttonText}>Salada</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 41 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen1/pao.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Foods2', { image0: this.props.navigation.state.params.image0});
          }}>
            <Image style={styles.cards} source={require('../images/mainscreen1/proxima.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.lockAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 41 });
          }}>
            <Text style={styles.buttonText}>Pão</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Foods2', { image0: this.props.navigation.state.params.image0});
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