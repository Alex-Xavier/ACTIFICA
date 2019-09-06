import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions
} from 'react-native';

export default class TeamScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Orientador</Text>
        </View>

        <View style={styles.photoContainer}>
          <Image style={styles.photos} source={require('../images/teamscreen/andre.jpeg')} />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>ANDRÉ RODRIGUES</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.professionalText}>Coordenador/Professor</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Colaboradores</Text>
        </View>

        <View style={styles.photoContainer}>
          <Image style={styles.photos} source={require('../images/teamscreen/alex.jpg')} />
          <Image style={styles.photos} source={require('../images/teamscreen/ana.jpeg')} />
        </View>

        <View style={styles.nameContainer}>  
          <Text style={styles.nameText}>ALEX XAVIER</Text>
          <Text style={styles.nameText}>ANA CAROLINA</Text>
        </View>

        <View style={styles.nameContainer}>  
          <Text style={styles.professionalText}>Analista Desenvolvedor</Text>
          <Text style={styles.professionalText}>Analista Desenvolvedora</Text>
        </View>

        <View style={styles.photoContainer}>
          <Image style={styles.photos} source={require('../images/teamscreen/ariel.jpeg')} />
          <Image style={styles.photos} source={require('../images/teamscreen/euler.jpeg')} />
        </View>

        <View style={styles.nameContainer}>  
          <Text style={styles.nameText}>ARIEL PEDRO</Text>
          <Text style={styles.nameText}>EULER MAGNO</Text>
        </View>

        <View style={styles.nameContainer}>  
          <Text style={styles.professionalText}>Analista Desenvolvedor</Text>
          <Text style={styles.professionalText}>Analista Desenvolvedor</Text>
        </View>

        <View style={styles.photoContainer}>
          <Image style={styles.photos} source={require('../images/teamscreen/fillipe.jpeg')} />
          <Image style={styles.photos} source={require('../images/teamscreen/gabriel.jpeg')} />
        </View>

        <View style={styles.nameContainer}>  
          <Text style={styles.nameText}>FILLIPE AUGUSTO</Text>
          <Text style={styles.nameText}>GABRIEL BRITO</Text>
        </View>

        <View style={styles.nameContainer}>  
          <Text style={styles.professionalText}>Analista Desenvolvedor</Text>
          <Text style={styles.professionalText}>Analista Desenvolvedor</Text>
        </View>

        <View style={styles.photoContainer}>
          <Image style={styles.photos} source={require('../images/teamscreen/nicolas.jpeg')} />
        </View>

        <View style={styles.nameContainer}>  
          <Text style={styles.nameText}>NICOLAS ALMEIDA</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.professionalText}>Analista Desenvolvedor</Text>
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
  titleContainer: {
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b80003',
    marginTop: Dimensions.get('window').height * 0.025
  },
  photoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  photos: {
    height: Dimensions.get('window').width * 0.3,
    width: Dimensions.get('window').height * 0.17,
    borderColor: '#b80003',
    borderWidth: 1,
    borderRadius: 100,
    marginTop: Dimensions.get('window').height * 0.025,
    marginHorizontal: Dimensions.get('window').height * 0.04
  },
  nameText: {
    marginHorizontal: Dimensions.get('window').height * 0.05
  },
  professionalText: {
    color: '#b80003',
    marginHorizontal: Dimensions.get('window').height * 0.017
  }
});