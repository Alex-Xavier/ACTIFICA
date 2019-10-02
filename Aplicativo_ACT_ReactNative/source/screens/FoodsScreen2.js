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

export default class FoodsScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 42 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen2/fruta.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 43 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen2/lanche.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 42 });
          }}>
            <Text style={styles.buttonText}>Fruta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 43 });
          }}>
            <Text style={styles.buttonText}>Lanche</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 44 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen2/chips.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 45 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen2/biscoito.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image00, image2: 44 });
          }}>
            <Text style={styles.buttonText}>Chips</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 45 });
          }}>
            <Text style={styles.buttonText}>Biscoito</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 46 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen2/almoco.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 47 });
          }}>
            <Image style={styles.cards} source={require('../images/foodsscreen2/jantar.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 46 });
          }}>
            <Text style={styles.buttonText}>Almoçar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            ScreenOrientation.allowAsync('LANDSCAPE');
            this.props.navigation.navigate('Finish', { image1: this.props.navigation.state.params.image0, image2: 47 });
          }}>
            <Text style={styles.buttonText}>Jantar</Text>
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