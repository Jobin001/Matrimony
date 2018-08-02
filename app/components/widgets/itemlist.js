import React,{ Component } from 'react'
import {  View, StyleSheet ,FlatList, Platform,Dimensions } from 'react-native';
import MediaQuery from "react-native-web-responsive";
const columncount=2;
const widthWindow=0;
const { width, height } = Dimensions.get('window');
export default class ItemList extends Component{
  constructor(){
     super()
       this.renderItem=this.renderItem.bind(this);
   }
  itemStyle = function(cellWidth) {
  return {
    margin: 1,
    width: cellWidth / 6,
    height:cellWidth / 6,
    backgroundColor: '#CCC',
  }
 }
 itemPortraitStyle = function(cellWidth) {
 return {
  margin: 1,
  width: cellWidth / 2,
  height:cellWidth / 2,
  backgroundColor: '#CCC',
 }
 }
  renderItem({ item, index }) {

  return(<View>

  {Platform.OS === 'web'?<View><MediaQuery minWidth={1224}>
    <View style={this.itemStyle(widthWindow)}/>
  </MediaQuery>
  <MediaQuery maxWidth={1224}>
  <MediaQuery orientation="portrait">
    <View style={this.itemPortraitStyle(widthWindow)}/>
   </MediaQuery>
   <MediaQuery orientation="landscape">
     <View style={this.itemStyle(widthWindow)}/>
    </MediaQuery>
    </MediaQuery></View>:<View>
    {columncount===2? <View style={this.itemPortraitStyle(width)}/>:<View style={this.itemStyle(height)}/>}
  </View>
    }




    </View>
  );

    }
  render(){
    const {  items, columnCount, width } = this.props;
    columncount=this.props.columnCount;
    widthWindow=this.props.width;

    return(
      <FlatList
    contentContainerStyle={styles.list}
    numColumns={columncount}
    key={columncount}
    data={items}
    renderItem={this.renderItem}

    />
    );
  }

}
const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {

  backgroundColor: '#F5FCFF',
  flexDirection: 'column'
},
listItem:{

flex:1,
  margin: 1,
  ...Platform.select({
     web: {
       width: widthWindow / 6,

       height:widthWindow / 6,
     },
     android:{
       width: widthWindow / 2,

       height:widthWindow / 2,
     },
     ios:{
       width: widthWindow / 2,

       height:widthWindow / 2,
     }
   }),


  backgroundColor: '#CCC',

},

});
