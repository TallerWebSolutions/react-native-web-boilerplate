import { AppRegistry } from 'react-native';

import { App } from 'components/src/App';
import { Storybook } from 'components/src/Storybook';

AppRegistry.registerComponent('myprojectname', () => Storybook);
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
});
