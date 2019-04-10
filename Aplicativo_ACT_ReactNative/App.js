import {createAppContainer , createStackNavigator} from 'react-navigation';
import MainScreen from './source/screens/MainScreen';
import CustomCards from './source/screens/CustomCardsScreen';

const AppNavigator = createStackNavigator ({
  'Main': {
    screen: MainScreen,
    navigationOptions: {
      title: 'Tela Principal'
    }
  },
  'CustomCards': {
    screen: CustomCards
  }
}, {
  defaultNavigationOptions: {
    headerTitleStyle: {
      flexGrow: 1,
      textAlign: 'center'
    },
    headerStyle:{
      backgroundColor: '#7d253b'
    },
    headerTintColor: '#FFF'
  
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;