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
      <ScrollView style={styles.container}>
        
        <View style={styles.topImage}>
          <Image style={styles.image} source={require('../images/informationappscreen/act.png')} />
        </View>
        
        <View style={styles.bottomStruct}>
          <View style={styles.bottomIcons}>
            <Icon type="FontAwesome" name='home' style={styles.icons} />
            <Icon type="FontAwesome" name='info-circle' style={styles.icons} />
            <Icon type="FontAwesome" name='users' style={styles.icons} />
            <Icon type="FontAwesome" name='graduation-cap' style={styles.icons} />
            <Icon type="FontAwesome" name='clipboard' style={styles.icons} />
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
          <Text style={styles.version}>v3.5.2</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topImage: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  image: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width * 0.5
  },
  bottomStruct: {
    height: Dimensions.get('window').height * 0.68,
    flexDirection: 'row'
  },
  bottomIcons: {
    paddingTop: 10
  },
  icons: {
    color: '#a30003',
    fontSize: 23,
    padding: 8,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'center'
  },
  bottomLinks: {
    paddingTop: 10
  },
  link: {
    color: '#a30003',
    fontSize: 15,
    padding: 8,
    margin: 5,
    textAlign: 'left'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray'
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
    color: '#a30003',
    marginVertical: Dimensions.get('window').height * 0.01
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
    color: '#a30003',
    marginVertical: Dimensions.get('window').height * 0.01
  }
});