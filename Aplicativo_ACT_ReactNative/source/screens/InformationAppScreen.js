import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions
} from 'react-native';

export default class InformationAppScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../images/informationappscreen/act.png')} />
        </View>

        <View style={styles.textContainer}>
          <Text>
            Pessoas que tem a comunicação afetada tendem a ter dificuldades de expressão,
            mesmo quando se comunicam com pessoas do seu circulo pessoal mais próximo.
            O aplicativo ACT visa potencializar e dinamizar o processo comunicativo dos
            usuários facilitando o convívio social e aprimorando sua inclusão. ACT é um
            aplicativo grátis e livre ou seja de código-aberto, o mesmo foi idealizado e
            fundamentado a partir dos conceitos descritos a baixo:
          </Text>

          <Text style={styles.titleText}>Comunicação Aumentativa e Alternativa (CAA)</Text>
          
          <Text>
            CAA é destinada a compensar e facilitar de forma permanente ou não, incapacidades
            e prejuízos em sujeitos com distúrbios da compreensão e comunicação expressiva.
            Utilizada para suprir necessidades comunicativas, complementando ou substituindo
            a fala e/ou escrita.
          </Text>

          <Text style={styles.titleText}>Pranchas de Comunicação</Text>

          <Text>
            São recursos que alocam símbolos gráficos, utilizada como ferramenta na
            Comunicação Aumentativa e Alternativa. No projeto ACT as pranchas de comunicação
            utilizam os símbolos gráficos Picture Communication Symbols - PCS, no Brasil
            conhecido como Símbolos de Comunicação Pictórica.
          </Text>

          <View style={styles.imageContainerPicture}>
            <Image style={styles.image} source={require('../images/informationappscreen/prancha.jpg')} />
          </View>

          <Text style={styles.titleText}>Símbolos de Comunicação Pictórica</Text>
          
          <Text>
            O PCS é um sistema gráfico visual que contém desenhos simples, podendo-se
            acrescentar, na medida do necessário, fotografias, figuras, números, círculos para as
            cores, o alfabeto, outros desenhos ou conjuntos de símbolos. É caracterizado pela
            divisão em seis categorias primárias, cada categoria possui uma cor associada de
            acordo com o contexto de cada símbolo que a compõe.
          </Text>
          
          <View style={styles.imageContainerSymbol1}>
            <Image style={styles.image} source={require('../images/informationappscreen/simbolos1.jpg')} />
          </View>
            
          <View style={styles.imageContainerSymbol2}>
            <Image style={styles.image} source={require('../images/informationappscreen/simbolos2.gif')} />
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  imageContainer: {
    height: Dimensions.get('window').width * 0.42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  imageContainerPicture: {
    height: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  imageContainerSymbol1: {
    height: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  imageContainerSymbol2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  image: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.7
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: Dimensions.get('window').height * 0.03,
    backgroundColor: '#FFF'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: Dimensions.get('window').height * 0.01
  }
});