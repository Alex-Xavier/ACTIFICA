import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Linking,
  Dimensions
} from 'react-native';
import { ScreenOrientation } from 'expo';

export default class ProjectScreen extends React.Component {
  render() {
    ScreenOrientation.lockAsync('PORTRAIT');
    return (
      <ScrollView style={styles.container}>
        
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../images/informationappscreen/act.png')} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            ACTIFICA é um projeto sem fins lucrativos que nasceu a partir de uma visita técnica
            realizada em 06 de março de 2018 á uma escola pública municipal de ensino especial
            altamente preparada para lecionar e cuidar de pessoas com paralisia cerebral, a
            Escola Municipal de Educacão Especial Vovó Mariquita foi onde pudemos observar, levantar
            informações e nos motivar a criação de uma aplicação mobile livre e gratuita que
            atendesse e facilitasse a comunicação entre os instrutores e os instruídos da instituição.
            Auxiliar as pessoas com déficit em sua comunicação está sendo nosso principal objetivo
            desde o nascimento deste projeto e o aplicativo ACT é nosso produto salvador atuando
            como suporte a comunicação destas pessoas e com todo o seu círculo social
            facilitando o convívio e aprimorando sua inclusão.
          </Text>

          <Text style={styles.textHyperlink} onPress={() => Linking.openURL('http://www.actifica.com')}>
            Para saber mais acesse nossa Webpage!
          </Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    height: Dimensions.get('window').width * 0.45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.7
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    textAlign: 'justify',
    color: 'gray',
    marginHorizontal: Dimensions.get('window').height * 0.03
  },
  textHyperlink: {
    color: '#b80003',
    textDecorationLine: 'underline',
    marginVertical: Dimensions.get('window').height * 0.02
  }
});