import React, {Component} from 'react';
import { styles } from '../../styles/widgetstyle.js';
import { TextInput } from 'react-native';
export default class InputField extends Component {
render() {
const { placeholderData, textChange } = this.props;
return (
  <TextInput style = {styles.input}
     underlineColorAndroid = "transparent"
     placeholder = {placeholderData}
     placeholderTextColor = "#9a73ef"
     autoCapitalize = "none"
     onChangeText = {textChange}/>
);
}
}
