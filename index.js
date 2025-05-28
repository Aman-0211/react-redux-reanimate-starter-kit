/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Main from './src/main';

if (__DEV__) {
  require("./ReactotronConfig");
}

AppRegistry.registerComponent(appName, () => Main);
