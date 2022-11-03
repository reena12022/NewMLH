import React, {Component} from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput,View,ScrollView,Image, StyleSheet,Alert, FlatList, Text } from 'react-native';
import Buttoncom from './buttoncom';
export default class ForgotScreen extends Component {
   
    state = {
        name: "",
        email: "",

        password: '',
        PhoneNo: '',
        LastName: '',
        confmpsw: '',
        submitDisabled: true,
        data: null,
        value0: false,
        value1: false,
        value2: true,
        value3: false,
        value4: false,
        lineWidth: 10,
    }
  
  
    render() {
        return (

            <ScrollView
      
      style={style.container}
    >

               <View style={style.container1}>
               <Text style={{ fontSize: 20,  color: '#663399',marginTop:40}}>Forgot Password</Text>
               <View style={{  alignItems: 'center',  marginTop: 20,justifyContent:'center'}}>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: 'gray',}}>Enter registered email below to recrive</Text> 
                    <Text style={{ fontSize: 16, fontWeight: '400', color: 'gray',marginBottom:15}}>password reset instruction</Text>

                </View>
               <Image source={require('../Assets/forgot1.png')} style={{height:260,width:260,alignItems:'center'}}/>
               </View>
             

               
               

                <View style={{ flex:1,alignItems: 'center', width: "100%", }}>
<Text style={{ marginLeft:20,width: '90%',marginTop:20}}>Email</Text>

                    <TextInput
                        style={style.input}
                        placeholder='Email'
                        placeholderTextColor="#d8bfd8"
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />

                 


                


               

                    <Buttoncom
                        style={style.mybutton}
                    onClick={()=>this.props.navigation.navigate('Verification')}

                        // image1={require('')}
                        btnText={"Send"}
                        TextStyle={style.textbutton}

                    />
           
              
                <View style={style.container3}>
<Text style={style.forgot_button3}>Go back to  
</Text>
<TouchableOpacity  style={style.forgot_button2}

   onPress={()=>this.props.navigation.navigate('Logincom')}
   >

<Text style={style.forgot_button4}> Login</Text>

</TouchableOpacity>
</View>
             
</View>       
            </ScrollView>


        )
    }
}

const style = StyleSheet.create({
    input: {
        height: 40,
        margin: 20,
        color: '#d8bfd8',
        padding: 10,
        width: '90%',
        borderWidth: 1,
        borderColor: '#d8bfd8',
        borderRadius:10

    },
    container1:
    {
        flex:1,
   
        alignItems:'center',
        justifyContent:'center'

    },
    container: {
        flexGrow: 1
      },
    input1: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: 'white'

    },
    img3:
    {
        width: 30,
        height: 30,
    },
    checkbox: {
        alignSelf: "center",
    },
    mybutton: {

        marginTop: 20,
        backgroundColor: '#dc143c',
        height: 50,
        width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'

    },
    mybutton1: {

        marginTop: 40,
        backgroundColor: '#ff00ff',
        height: 40,
        width: '40%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'

    },
    container3: {
       marginTop:Platform.OS === "ios" ? 140 :70,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
       

    },
    forgot_button:
    {

        color: 'white'

    },
    forgot_button2:
    {

        alignItems: 'center'

    },
    forgot_button1:
    {
        height: 30,
        marginTop: 10,
        color: 'black',
    },
    forgot_button3:
    {
        marginBottom: 40,

        marginTop: 30,
        color: 'black'

    },
    forgot_button4:
    {
        marginTop: 30,
        marginBottom: 40,
        color: '#ff00ff'

    },
    textbutton: {
        fontSize: 16,
        color: 'white'
    }
});
