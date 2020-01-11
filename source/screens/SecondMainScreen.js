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