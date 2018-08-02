import React, {Component} from 'react';
import { styles } from '../../styles/widgetstyle.js';
import { Text, TouchableOpacity } from 'react-native';
export default class button extends Component {
render() {
const { onPress, title } = this.props;
return (
  <TouchableOpacity
     style = {styles.submitButton}
     onPress={onPress}
     >
     <Text style = {styles.submitButtonText}> {title} </Text>
  </TouchableOpacity>
);
}
}
