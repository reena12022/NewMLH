import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet,Alert, FlatList, Text } from 'react-native';

export default class ForgotScreen extends Component {
   
    
  
  
  render(){
   return(
    <View style={styles.container}>
<Text>hii</Text>

     </View>
   )
    
   }
};
const styles = StyleSheet.create({
 rowcontainer: {
  width:"100%",
  marginTop:20,
  borderWidth: 1,
 alignItems:'center',
  height:100,
  borderColor: '#009688',
  backgroundColor: 'blue',
 
 },
 title: {
  marginTop:20,
  
  fontSize: 30,
 },
 text: {
  padding: 10,
  fontSize: 20
 },
 delete: {
  alignSelf: 'flex-end',
  padding: 8,
  fontSize: 15,
 },
 view1: {

    width: '100%',

    marginTop: 20,
    height: 2,
    backgroundColor: 'gray'



},
 container1:
 {
    marginTop:40,
    flexDirection:'row',
    justifyContent:'space-between',
    width: '60%',
    alignItems: 'center',
 }
});