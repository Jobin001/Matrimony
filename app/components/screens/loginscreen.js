/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View,Text,AppRegistry } from 'react-native';
import { styles } from '../../styles/widgetstyle.js';
import  Button  from '../widgets/button.js'
import InputField from '../widgets/inputfield.js'
import { connect } from 'react-redux';

import * as Actions from '../../actions/types';
 export default class Login extends Component<Props> {

  constructor(props) {
     super(props)
 }

  state = {
     email: '',
     password: ''
  }
  handleEmail = (text) => {
     this.setState({ email: text })
  }
  handlePassword = (text) => {
     this.setState({ password: text })
  }
  login = (email, pass) => {
     alert('email: ' + email + ' password: ' + pass)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
      <View style={styles.centerView}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Login</Text>
      </View>
        <InputField placeholderData= "Email"
        textChange={this.handleEmail}
        ></InputField>
        <InputField placeholderData= "Password"
        textChange={this.handlePassword}
        ></InputField>
        <Button title="Login"
          onPress = {
            () =>   navigate('Home')
          }>
        </Button>
        <Button title="Signup"
        >
        </Button>
      </View>

    </View>

    );
  }

}
