import {createAppContainer , createStackNavigator} from 'react-navigation';

import main from "./screens/main";

const AppNavigator = createStackNavigator ({
  "main": {
    screen: main
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;