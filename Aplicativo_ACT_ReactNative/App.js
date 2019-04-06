import {createAppContainer , createStackNavigator} from 'react-navigation';

import MainScreen from './source/screens/MainScreen';

const AppNavigator = createStackNavigator ({
  'Main': {
    screen: MainScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;