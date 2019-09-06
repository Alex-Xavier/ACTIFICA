import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Icon } from 'native-base';

export default class MenuDrawer extends React.Component{
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: nav })]
          });
          this.props.navigation.dispatch(resetAction);
        }}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }
  
  render() {
    return(
      <ScrollView styles={styles.continer}>
        <View style={styles.topImage}>
          <Image style={styles.image} source={require('../images/informationappscreen/act.png')} />
        </View>
        
        <View style={styles.bottomStruct}>
          <View style={styles.bottomIcons}>
            <Icon name='home' style={styles.icons} />
            <Icon name='information' style={styles.icons} />
            <Icon name='information' style={styles.icons} />
            <Icon name='information' style={styles.icons} />
            <Icon name='information' style={styles.icons} />
          </View>
          
          <View style={styles.bottomLinks}>
            {this.navLink('Main1', 'Principal')}
            {this.navLink('InformationApp', 'Sobre o Aplicativo')}
            {this.navLink('Team', 'Sobre a Equipe')}
            {this.navLink('Project', 'Sobre o Projeto')}
            {this.navLink('Policy', 'Política e Termos')}
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.description}>ACT</Text>
          <Text style={styles.version}>v1.3.0</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  topImage: {
    height: Dimensions.get('window').width * 0.45,
    alignItems: 'center',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    backgroundColor: '#FFF'
  },
  image: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.5
  },
  bottomStruct: {
    flexDirection: 'row'
  },
  bottomIcons: {
    height: Dimensions.get('window').width * 1.16,
    backgroundColor: '#FFF',
    paddingTop: 10
  },
  icons: {
    color: 'gray',
    padding: 8,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'center',
    fontSize: 23
  },
  bottomLinks: {
    height: Dimensions.get('window').width * 1.16,
    backgroundColor: '#FFF',
    paddingTop: 10
  },
  link: {
    color: 'gray',
    fontSize: 15,
    padding: 6,
    margin: 5,
    textAlign: 'left'
  },
  footer: {
    height: Dimensions.get('window').width * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray'
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
    color: 'gray'
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
    color: 'gray'
  }
});