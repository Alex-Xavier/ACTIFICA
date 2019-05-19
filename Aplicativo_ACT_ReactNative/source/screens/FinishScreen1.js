import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';

export default class FinishScreen extends React.Component {
  render() {
    let images = [
      require('../images/mainscreen1/euquero.png'),
      require('../images/actionscreen2/ligarpara.png'),
      require('../images/dearpeoplescreen1/mamae.png'),
      require('../images/dearpeoplescreen1/papai.png'),
      require('../images/dearpeoplescreen1/meuvovo.png'),
      require('../images/dearpeoplescreen1/minhavovo.png'),
      require('../images/dearpeoplescreen1/professora.png'),
      require('../images/dearpeoplescreen2/meutitio.png'),
      require('../images/dearpeoplescreen2/minhatitia.png'),
      require('../images/dearpeoplescreen2/meuprimo.png'),
      require('../images/dearpeoplescreen2/minhaprima.png'),
      require('../images/dearpeoplescreen2/meuamigo.png'),
      require('../images/dearpeoplescreen2/minhaamiga.png'),
      require('../images/actionscreen2/irpara.png'),
      require('../images/placesscreen/casa.png'),
      require('../images/placesscreen/escola.png'),
      require('../images/placesscreen/parque.png'),
      require('../images/placesscreen/cinema.png'),
      require('../images/placesscreen/piscina.png'),
      require('../images/placesscreen/quintal.png'),
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      require('../images/mainscreen1/naoquero.png')
    ];
    let texts = [
      'Eu quero',
      'ligar para',
      'a mamãe!',
      'o papai!',
      'meu vovô!',
      'minha vovó!',
      'a professora!',
      'meu titio!',
      'minha titia!',
      'meu primo!',
      'minha prima!',
      'meu amigo!',
      'minha amiga!',
      'ir para',
      'casa!',
      'escola!',
      'o parque!',
      'o cinema!',
      'piscina!',
      'o quintal!',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'Não quero'
    ];
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>
          
          <Image style={styles.cards} source={images[this.props.navigation.state.params.image1]} />
          <Image style={styles.cards} source={images[this.props.navigation.state.params.image2]} />
          <Image style={styles.cards} source={images[this.props.navigation.state.params.image3]} />
          
        </View>

        <View style={styles.buttonContainer} >
          
          <View style={styles.button} >
            
            <Text style={styles.buttonText}>{texts[this.props.navigation.state.params.image1]}</Text>
          
          </View>
          
          <View style={styles.button} >
          
            <Text style={styles.buttonText}>{texts[this.props.navigation.state.params.image2]}</Text>
          
          </View>

          <View style={styles.button} >
          
            <Text style={styles.buttonText}>{texts[this.props.navigation.state.params.image3]}</Text>
          
          </View>
          
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  cardContainer: {
    height: Dimensions.get('window').width * 0.42,
    width: Dimensions.get('window').height * 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Dimensions.get('window').height * 0.04,
    backgroundColor: '#FFF'
  },
  buttonContainer: {
    height: Dimensions.get('window').width * 0.09,
    width: Dimensions.get('window').height * 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Dimensions.get('window').height * 0.04,
    backgroundColor: '#FFF'
  },
  cards: {
    aspectRatio: 1,
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.209,
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
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});