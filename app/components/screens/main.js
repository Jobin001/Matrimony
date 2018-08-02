import React, { Component } from 'react';
import {
	Image,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Platform,
} from 'react-native';
import { COLOR_PRIMARY } from '../../styles/common.js';
const styles = StyleSheet.create({

  container: {

  backgroundColor: '#F5FCFF',
  flexDirection: 'column'
},
stretch: {
    width: 30,
    height: 30
  }
});

export default class Main extends Component {
	render() {
		return (
			<View style={styles.container}>

				<View style={{backgroundColor:COLOR_PRIMARY,
                      padding: 15,
											paddingTop: Platform.OS === 'ios' ? 13 : 7}}>
        <TouchableOpacity
        						onPress={() => {
        						}}
        					>
                  <Image style={styles.stretch}
												source={require('../../images/menu.png')}
					/>
        					</TouchableOpacity>



				</View>




			</View>
		);
	}
}
