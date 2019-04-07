import {createAppContainer , createStackNavigator} from 'react-navigation';
import MainScreen from './source/screens/MainScreen';
import CustomCards from './source/screens/CustomCardsScreen';

const AppNavigator = createStackNavigator ({
  'Main': {
    screen: MainScreen
  },
  'CustomCards': {
    screen: CustomCards
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;