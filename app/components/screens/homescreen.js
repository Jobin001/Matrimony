import React, { Component } from 'react';
import { View, StyleSheet ,AppRegistry,FlatList,Dimensions,Platform} from 'react-native'
import ItemList from '../widgets/itemlist.js'

const { width, height } = Dimensions.get('window');

// const equalWidth =  (width / 4 )
// const equalHeight=height/4;
export default class HomeScreen extends Component {


  constructor(){
     super()
     this.state = {

     "items":[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'}, {key: 'e'},{key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'},{key: 'j'},
   {key: 'j'},{key: 'j'},{key: 'j'},{key: 'j'},{key: 'j'},{key: 'j'},{key: 'j'},{key: 'j'},{key: 'j'},{key: 'j'},{key: 'j'},{key: 'j'},
 {key: 'j'},{key: 'j'}],
 OrientationStatus : '',

     Height_Layout : '',

     Width_Layout : '',
     columnCount:6,
   }

   }
   componentDidMount(){

     this.DetectOrientation();

   }

   DetectOrientation(){

     if(this.state.Width_Layout > this.state.Height_Layout)
     {

       // Write Your own code here, which you want to execute on Landscape Mode.

         this.setState({
         OrientationStatus : 'Landscape Mode',
         columnCount:6
         });
     }
     else{

       // Write Your own code here, which you want to execute on Portrait Mode.

         this.setState({
         OrientationStatus : 'Portrait Mode',
         columnCount:2

         });
     }

   }


    render () {
    return (
        <View style={styles.container} onLayout={(event) => this.setState({
                                                                            Width_Layout : event.nativeEvent.layout.width,
                                                                            Height_Layout : event.nativeEvent.layout.height
                                                                           }, ()=> this.DetectOrientation())}>


      <ItemList
      items={this.state.items}
      columnCount={this.state.columnCount}
      width={this.state.Width_Layout}>

      </ItemList>


    </View>
  );
    }
}

const styles = StyleSheet.create({

  container: {

  backgroundColor: '#F5FCFF',
  flexDirection: 'column'
},

});
