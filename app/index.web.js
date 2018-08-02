// index.web.js
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './index.js';

//AppRegistry.runApplication('App', { rootTag: document.getElementById('react-app') });
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
});
