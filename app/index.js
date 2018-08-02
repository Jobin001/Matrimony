/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import Login from './components/screens/loginscreen.js';
import HomeScreen from './components/screens/homescreen.js';
import Main from './components/screens/main.js';
import store from './reducers/index';
import { StackNavigator } from 'react-navigation';

import { COLOR_PRIMARY } from './styles/common.js';


const RouteApp = StackNavigator({
  Login: { screen: Login ,
      navigationOptions: {
          header: null
      }
  },
  Home: {
    screen: HomeScreen,

      navigationOptions: {

        title: 'Home',
        headerLeft: null,
        headerStyle: {
          backgroundColor: COLOR_PRIMARY
        },
        headerTitleStyle: {
          alignSelf: 'center',
          fontWeight: "bold",
          color: "#fff",
        },
        headerTintColor: "#fff"
      }
  },

});

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouteApp/>
      </Provider>
    );
  }
}
AppRegistry.registerComponent('RouteApp', () => RouteApp);
