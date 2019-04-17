import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeIcon from './source/components/HomeIcon';
import Main1 from './source/screens/MainScreen1';
import Main2 from './source/screens/MainScreen2';
import CustomCards from './source/screens/CustomCardsScreen';

const AppNavigator = createStackNavigator ({
  'Main1': {
    screen: Main1,
    navigationOptions: {
      title: 'Tela Principal'
    }
  },
  'Main2': {
    screen: Main2,
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