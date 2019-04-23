import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeIcon from './source/components/HomeIcon';
import Main1 from './source/screens/MainScreen1';
import Main2 from './source/screens/MainScreen2';
import SecondMain from './source/screens/SecondMainScreen';
import Action1 from './source/screens/ActionScreen1';
import Action2 from './source/screens/ActionScreen2';
import Action3 from './source/screens/ActionScreen3';
import Answer from './source/screens/AnswerScreen';
import Plays1 from './source/screens/PlaysScreen1';
import Plays2 from './source/screens/PlaysScreen2';
import PeopleFeatures1 from './source/screens/PeopleFeaturesScreen1';
import PeopleFeatures2 from './source/screens/PeopleFeaturesScreen2';
import PeopleFeatures3 from './source/screens/PeopleFeaturesScreen3';
import Places from './source/screens/PlacesScreen';
import DearPeople1 from './source/screens/DearPeopleScreen1';
import SecondDearPeople1 from './source/screens/SecondDearPeopleScreen1';
import DearPeople2 from './source/screens/DearPeopleScreen2';
import SecondDearPeople2 from './source/screens/SecondDearPeopleScreen2';
import Foods1 from './source/screens/FoodsScreen1';
import Foods2 from './source/screens/FoodsScreen2';
import Drinks from './source/screens/DrinksScreen';
import Query from './source/screens/QueryScreen';
import Hygiene1 from './source/screens/HygieneScreen1';
import Hygiene2 from './source/screens/HygieneScreen2';
import Phrase1 from './source/screens/PhraseScreen1';
import Phrase2 from './source/screens/PhraseScreen2';
import AfterPeopleVerbs from './source/screens/AfterPeopleVerbsScreen';
import BeforePeopleVerbs from './source/screens/BeforePeopleVerbsScreen';
import Finish from './source/screens/FinishScreen';
import CustomCards from './source/screens/CustomCardsScreen';

const AppNavigator = createStackNavigator ({
  'Main1': {
    screen: Main1,
    navigationOptions: {
      title: 'Menu Principal',
      headerLeft: (<View></View>)
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
  'Plays1': {
    screen: Plays1,
    navigationOptions: {
      title: 'Brincadeiras'
    }
  },
  'Plays2': {
    screen: Plays2,
    navigationOptions: {
      title: 'Brincadeiras'
    }
  },
  'PeopleFeatures1': {
    screen: PeopleFeatures1,
    navigationOptions: {
      title: 'Características'
    }
  },
  'PeopleFeatures2': {
    screen: PeopleFeatures2,
    navigationOptions: {
      title: 'Características'
    }
  },
  'PeopleFeatures3': {
    screen: PeopleFeatures3,
    navigationOptions: {
      title: 'Características'
    }
  },
  'Places': {
    screen: Places,
    navigationOptions: {
      title: 'Lugares'
    }
  },
  'DearPeople1': {
    screen: DearPeople1,
    navigationOptions: {
      title: 'Pessoas Queridas'
    }
  },
  'SecondDearPeople1': {
    screen: SecondDearPeople1,
    navigationOptions: {
      title: 'Pessoas Queridas'
    }
  },
  'DearPeople2': {
    screen: DearPeople2,
    navigationOptions: {
      title: 'Pessoas Queridas'
    }
  },
  'SecondDearPeople2': {
    screen: SecondDearPeople2,
    navigationOptions: {
      title: 'Pessoas Queridas'
    }
  },
  'Foods1': {
    screen: Foods1,
    navigationOptions: {
      title: 'Alimentos'
    }
  },
  'Foods2': {
    screen: Foods2,
    navigationOptions: {
      title: 'Alimentos'
    }
  },
  'Drinks': {
    screen: Drinks,
    navigationOptions: {
      title: 'Bebidas'
    }
  },
  'Query': {
    screen: Query,
    navigationOptions: {
      title: 'Dúvidas'
    }
  },
  'Hygiene1': {
    screen: Hygiene1,
    navigationOptions: {
      title: 'Higiene'
    }
  },
  'Hygiene2': {
    screen: Hygiene2,
    navigationOptions: {
      title: 'Higiene'
    }
  },
  'Phrase1': {
    screen: Phrase1,
    navigationOptions: {
      title: 'Frases'
    }
  },
  'Phrase2': {
    screen: Phrase2,
    navigationOptions: {
      title: 'Frases'
    }
  },
  'AfterPeopleVerbs': {
    screen: AfterPeopleVerbs,
    navigationOptions: {
      title: 'Verbos'
    }
  },
  'BeforePeopleVerbs': {
    screen: BeforePeopleVerbs,
    navigationOptions: {
      title: 'Verbos'
    }
  },
  'Finish': {
    screen: Finish,
    navigationOptions: {
      title: 'Sua Frase'
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
    /*headerLeft: (<View></View>),*/
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