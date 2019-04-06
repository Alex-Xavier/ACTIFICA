import {createAppContainer , createStackNavigator} from 'react-navigation';

import Main from "./screens/Main";

const AppNavigator = createStackNavigator ({
  "Main": {
    screen: Main
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;