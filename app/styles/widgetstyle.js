import { StyleSheet,Dimensions,Platform } from 'react-native'
let ScreenHeight = Dimensions.get("window").height;
import { COLOR_PRIMARY } from './common.js';
let headerHeight = ScreenHeight/10;
const styles = StyleSheet.create({
   container: {

     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
  
     height: ScreenHeight






   },

   header: {

      height:50,alignSelf:'stretch',
      backgroundColor: COLOR_PRIMARY,
      margin:5,
      alignItems: 'center',
      justifyContent: 'center'
   },
   headerText:{
     fontSize: 20,
     color: 'white',
     textAlign: 'center'
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: COLOR_PRIMARY,
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: COLOR_PRIMARY,
      padding: 10,
      margin: 5,
      height: 40,
   },
   centerView: {
     ...Platform.select({
        web: {
          width:300,
          height: ScreenHeight/3+50,
        }
      }),
    aspectRatio: 1,
    borderColor: COLOR_PRIMARY,
    borderWidth: 1,

},
   submitButtonText:{
      color: 'white'
   }
});
export {
  styles
};
