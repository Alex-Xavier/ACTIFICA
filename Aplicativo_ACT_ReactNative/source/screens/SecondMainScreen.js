import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

export default class SecondMainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Plays1', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Image style={styles.cards} source={require('../images/secondmainscreen/brincadeiras.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Hygiene1', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Image style={styles.cards} source={require('../images/secondmainscreen/higiene.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Plays1', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Text style={styles.buttonText}>Brincadeiras</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Hygiene1', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Text style={styles.buttonText}>Higiene</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Action1', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Image style={styles.cards} source={require('../images/secondmainscreen/acoes.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Foods1', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Image style={styles.cards} source={require('../images/secondmainscreen/comer.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Action1', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Text style={styles.buttonText}>Ações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Foods1', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Text style={styles.buttonText}>Comer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Drinks', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Image style={styles.cards} source={require('../images/secondmainscreen/tomar.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Query', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Image style={styles.cards} source={require('../images/secondmainscreen/duvidas.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Drinks', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Text style={styles.buttonText}>Beber</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Query', { image0: this.props.navigation.state.params.image0 });
          }}>
            <Text style={styles.buttonText}>Dúvidas</Text>
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
    borderColor: '#7d253b',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.018
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.209,
    backgroundColor: '#7d253b',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#7d253b',
    borderWidth: 0.5,
    borderRadius: 5,
    margin: Dimensions.get('window').height * 0.017
  },

buttonVerde: {
    height: Dimensions.get('window').width * 0.08,

    width: Dimensions.get('window').height * 0.209,



    backgroundColor: '#00F0AC',


    justifyContent: 'center',
    alignItems: 'center',


    borderColor: '#00F0AC',
    borderWidth: 0.5,
    borderRadius: 5,

    
    margin: Dimensions.get('window').height * 0.017
  },

  buttonLaranja: {
    height: Dimensions.get('window').width * 0.08,

    width: Dimensions.get('window').height * 0.209,



    backgroundColor: '#ff780f',


    justifyContent: 'center',
    alignItems: 'center',


    borderColor: '#ff780f',
    borderWidth: 0.5,
    borderRadius: 5,

    
    margin: Dimensions.get('window').height * 0.017
  },


  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});