import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './source/screens/MainScreen1';
import CustomCards from './source/screens/CustomCardsScreen';
import HomeIcon from './source/components/HomeIcon';

const AppNavigator = createStackNavigator ({
  'Main': {
    screen: Main,
    navigationOptions: {
      title: 'Tela Principal'
    }
  },
  'CustomCards': {
    screen: CustomCards,
    navigationOptions: {
      title: 'Cartões Personalizados'
    }
  }
}, {
  defaultNavigationOptions: {
    headerTitleStyle: {
      flexGrow: 1,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    headerLeft: (<View></View>),
    headerRight: (
      <HomeIcon />
    ),
    headerStyle:{
      backgroundColor: '#7d253b'
    },
    headerTintColor: '#FFF'
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;