import { AppRegistry } from 'react-native';
import BackgroundFetch from 'react-native-background-fetch';
import { name as appName } from './app.json';
import App from './src/App';
import { task } from './src/task';

BackgroundFetch.registerHeadlessTask(task);
AppRegistry.registerComponent(appName, () => App);
