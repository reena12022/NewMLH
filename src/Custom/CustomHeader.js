import React from 'react'
import { Text, Image,View, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'


class CustomComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{ flexDirection: "row", flex:1 , alignItems:'center',justifyContent:"center",marginTop:10}}>
                 
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('Category')}>
                    <AntDesign   name = {this.props.backIcon}  size={25} style={{right:80}}/>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 15, fontWeight: "900", textAlign: 'center' }}> {this.props.heading} </Text>
                    <MaterialIcons name={this.props.iconName} size={this.props.size} style={{left:80}} />
                    <Image source={require("../Assets/NOTIFICATION.png")} style={{height:30,width:30,left:100,alignSelf:'flex-end'}}/>
                </View>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    container: {

    }
})
export default CustomComponent;