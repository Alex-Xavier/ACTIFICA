//import React from 'react';
import {createAppContainer , createStackNavigator} from 'react-navigation';
import MainScreen from './source/screens/MainScreen';
import CustomCards from './source/screens/CustomCardsScreen';
//import LogoTitle from './source/components/LogoTitle';

const AppNavigator = createStackNavigator ({
  'Main': {
    screen: MainScreen
  },
  'CustomCards': {
    screen: CustomCards
  }
}, {
  defaultNavigationOptions: {
    headerTitle: 'ACTIFICA',
    headerTitleStyle: {
      flexGrow: 1,
      textAlign: 'center'
    },
    headerStyle:{
      backgroundColor: '#FFF'
    },
    headerTintColor: '#7d253b'
  
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;