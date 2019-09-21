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
      require('../images/afterpeopleverbsscreen/esta.png'),
      require('../images/afterpeopleverbsscreen/e.png'),
      require('../images/peoplefeaturesscreen1/bonito.png'),
      require('../images/peoplefeaturesscreen1/feliz.png'),
      require('../images/peoplefeaturesscreen1/alegre.png'),
      require('../images/peoplefeaturesscreen1/engracado.png'),
      require('../images/peoplefeaturesscreen1/legal.png'),
      require('../images/peoplefeaturesscreen2/bravo.png'),
      require('../images/peoplefeaturesscreen2/triste.png'),
      require('../images/peoplefeaturesscreen2/medroso.png'),
      require('../images/peoplefeaturesscreen2/apaixonado.png'),
      require('../images/peoplefeaturesscreen2/agitado.png'),
      require('../images/peoplefeaturesscreen3/calmo.png'),
      require('../images/peoplefeaturesscreen3/ansioso.png'),
      require('../images/peoplefeaturesscreen3/inocente.png'),
      require('../images/peoplefeaturesscreen3/justo.png'),
      require('../images/peoplefeaturesscreen3/forte.png'),
      require('../images/peoplefeaturesscreen3/indeciso.png'),
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
      'A mamãe',
      'O papai',
      'Meu vovô',
      'Minha vovó',
      'A professora',
      'Meu titio',
      'Minha titia',
      'Meu primo',
      'Minha prima',
      'Meu amigo',
      'Minha amiga',
      'ir para',
      'casa!',
      'escola!',
      'o parque!',
      'o cinema!',
      'piscina!',
      'o quintal!',
      'está',
      'é',
      'bonito(a)!',
      'feliz!',
      'alegre!',
      'engraçado(a)!',
      'legal!',
      'bravo(a)!',
      'triste!',
      'medroso(a)!',
      'apaixonado(a)!',
      'agitado(a)!',
      'calmo(a)!',
      'ansioso(a)!',
      'tranquilo(a)!',
      'justo(a)!',
      'forte!',
      'indeciso(a)!',
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
    height: Dimensions.get('window').width * 0.6,
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
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.5,
    width: Dimensions.get('window').height * 0.3,
    backgroundColor: '#FFF',
    borderColor: '#7d253b',
    borderWidth: 0.5,
    margin: Dimensions.get('window').height * 0.017
  },
  button: {
    height: Dimensions.get('window').width * 0.08,
    width: Dimensions.get('window').height * 0.3,
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