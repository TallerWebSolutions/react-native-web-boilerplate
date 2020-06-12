import { AppRegistry } from 'react-native';

import { App } from 'app/src/App';

AppRegistry.registerComponent('myprojectname', () => App);
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
});
