import React from 'react';
import { View, Dimensions } from 'react-native';
import { Button, Icon } from 'native-base';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeIcon from './source/components/HomeIcon';
import MenuDrawer from './source/components/MenuDrawer';
import Main1 from './source/screens/MainScreen1';
import Main2 from './source/screens/MainScreen2';
import SecondMain from './source/screens/SecondMainScreen';
import InformationApp from './source/screens/InformationAppScreen';
import Team from './source/screens/TeamScreen';
import Project from './source/screens/ProjectScreen';
import Policy from './source/screens/PolicyScreen';
import Action1 from './source/screens/ActionScreen1';
import Action2 from './source/screens/ActionScreen2';
import Action3 from './source/screens/ActionScreen3';
import Answer from './source/screens/AnswerScreen';
import Plays1 from './source/screens/PlaysScreen1';
import Plays2 from './source/screens/PlaysScreen2';
import PeopleFeatures1 from './source/screens/PeopleFeaturesScreen1';
import PeopleFeatures2 from './source/screens/PeopleFeaturesScreen2';
import PeopleFeatures3 from './source/screens/PeopleFeaturesScreen3';
import SecondPeopleFeatures1 from './source/screens/SecondPeopleFeaturesScreen1';
import SecondPeopleFeatures2 from './source/screens/SecondPeopleFeaturesScreen2';
import SecondPeopleFeatures3 from './source/screens/SecondPeopleFeaturesScreen3';
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
import SchoolMain from './source/screens/SchoolMainScreen';
import Letters from './source/screens/LettersScreen';
import Numbers from './source/screens/NumbersScreen';
import Colors from './source/screens/ColorsScreen';
import Operations from './source/screens/OperationsScreen';
import Finish from './source/screens/FinishScreen';
import Finish0 from './source/screens/FinishScreen0';
import Finish1 from './source/screens/FinishScreen1';

const HomeNavigator = createStackNavigator ({
  'Main1': {
    screen: Main1,
    navigationOptions: {
      title: 'Menu Principal',
      headerRight: (<View></View>)
    }
  },
  'Main2': {
    screen: Main2,
    navigationOptions: {
      title: 'Menu Principal',
      headerRight: (<View></View>)
    },
  },
  'SecondMain': {
    screen: SecondMain,
    navigationOptions: {
      title: 'Menu Querer'
    }
  },
  'SchoolMain': {
    screen: SchoolMain,
    navigationOptions: {
      title: 'Escola'
    }
  },
  'Letters': {
    screen: Letters,
    navigationOptions: {
      title: 'Alfabeto'
    }
  },
  'Numbers': {
    screen: Numbers,
    navigationOptions: {
      title: 'Números'
    }
  },
  'Operations': {
    screen: Operations,
    navigationOptions: {
      title: 'Operações'
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
  'SecondPeopleFeatures1': {
    screen: SecondPeopleFeatures1,
    navigationOptions: {
      title: 'Características'
    }
  },
  'SecondPeopleFeatures2': {
    screen: SecondPeopleFeatures2,
    navigationOptions: {
      title: 'Características'
    }
  },
  'SecondPeopleFeatures3': {
    screen: SecondPeopleFeatures3,
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
  'Colors': {
    screen: Colors,
    navigationOptions: {
      title: 'Cores'
    }
  },
  'InformationApp': {
    screen: InformationApp,
    navigationOptions: {
      title: 'Sobre o Aplicativo'
    }
  },
  'Team': {
    screen: Team,
    navigationOptions: {
      title: 'Sobre a Equipe'
    }
  },
  'Project': {
    screen: Project,
    navigationOptions: {
      title: 'Sobre o Projeto'
    }
  },
  'Policy': {
    screen: Policy,
    navigationOptions: {
      title: 'Política e Termos'
    }
  },
  'Colors': {
    screen: Colors,
    navigationOptions: {
      title: 'Cores'
    }
  },
  'Finish': {
    screen: Finish,
    navigationOptions: {
      title: 'Sua Frase'
    }
  },
  'Finish0': {
    screen: Finish0,
    navigationOptions: {
      title: 'Resposta'
    }
  },
  'Finish1': {
    screen: Finish1,
    navigationOptions: {
      title: 'Sua Frase'
    }
  }
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <Button transparent onPress={() => navigation.toggleDrawer()}>
          <Icon name='menu' style={{color: '#FFF'}} />
        </Button>
      ),
      headerRight: (
        <HomeIcon navigation={navigation} />
      ),
      headerStyle: {
        backgroundColor: '#b80003'
      },
      headerTintColor: '#FFF'
    }
  }
});

const DrawerConfig = {
  drawerWidth: Dimensions.get('window').width * 0.75,
  contentComponent: ({ navigation }) => {
    return(<MenuDrawer navigation={navigation} />)
  }
}

const DrawerNavigator = createDrawerNavigator (
  {
    'Principal': {
      screen: HomeNavigator
    },
    'Sobre o Aplicativo': {
      screen: InformationApp
    },
    'Sobre a Equipe': {
      screen: Team
    },
    'Sobre o Projeto': {
      screen: Project
    },
    'Política e Termos': {
      screen: Policy
    }
  },
  DrawerConfig
);

const AppDrawerContainer = createAppContainer(DrawerNavigator);

export default AppDrawerContainer;