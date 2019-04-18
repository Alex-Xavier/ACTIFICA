import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeIcon from './source/components/HomeIcon';
import CustomCards from './source/screens/CustomCardsScreen';
import Main1 from './source/screens/MainScreen1';
import Main2 from './source/screens/MainScreen2';
import SecondMain from './source/screens/SecondMainScreen';
import Action1 from './source/screens/ActionsScreen1';
import Action2 from './source/screens/ActionsScreen2';
import Action3 from './source/screens/ActionsScreen3';
import Answer from './source/screens/AnswerScreen';

const AppNavigator = createStackNavigator ({
  'Main1': {
    screen: Main1,
    navigationOptions: {
      title: 'Menu Principal'
    }
  },
  'Main2': {
    screen: Main2,
    navigationOptions: {
      title: 'Menu Principal'
    }
  },
  'SecondMain': {
    screen: SecondMain,
    navigationOptions: {
      title: 'Menu Querer'
    }
  },
  'Action1': {
    screen: Action1,
    navigationOptions: {
      title: 'Ações'
    }
  },
  'Action2': {
    screen: Action2,
    navigationOptions: {
      title: 'Ações'
    }
  },
  'Action3': {
    screen: Action3,
    navigationOptions: {
      title: 'Ações'
    }
  },
  'Answer': {
    screen: Answer,
    navigationOptions: {
      title: 'Resposta'
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