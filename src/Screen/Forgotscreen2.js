import React, {Component} from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput,View,ScrollView,Image, StyleSheet,Alert, FlatList, Text } from 'react-native';
import Buttoncom from './buttoncom';
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
Icon.loadFont().then();

import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import {Otpsend}from '../Services/service';
const toastConfig ={
    success: (props) => (
        <BaseToast
          {...props}
          style={{ borderLeftColor: 'pink' }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          text1Style={{
            fontSize: 15,
            fontWeight: '400'
          }}
        />
      ),
      /*
        Overwrite 'error' type,
        by modifying the existing `ErrorToast` component
      */
      error: (props) => (
        <ErrorToast
          {...props}
          text1Style={{
            fontSize: 17
          }}
          text2Style={{
            fontSize: 15
          }}
        />
      ),
      /*
        Or create a completely new type - `tomatoToast`,
        building the layout from scratch.
    
        I can consume any custom `props` I want.
        They will be passed when calling the `show` method (see below)
      */
      tomatoToast: ({ text1, props }) => (
        <View style={{ flexDirection: 'row', height: 80, width: '95%', backgroundColor: '#dc143c', alignItems: 'center', justifyContent: 'center', borderRadius: 10 ,padding:10 }}>
        <Icon name="error-outline"
            color="white" size={30} />
        <Text style={{  fontSize: 14, fontWeight: '400', color: 'white',flexWrap:'wrap',flex:1 ,paddingStart:5 }}>{text1}</Text>
    </View>
      )

}
export default class ForgotScreen2 extends Component {
    
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
        pin1: '',
        pin2: '',
        pin3: '',
        pin4: '',
        lineWidth: 10,
        token:''
    }
   
    Senddata=async() =>
    {
        if(!this.state.email == '')
        {
            Toast.show({
           type:'tomatoToast',
                position:'top',
                text1:'Please Enter Email',
                visibilityTime:2000,
                autoHide:true
              
            })


        }
        else{
            this.state.token = await AsyncStorage.getItem('@storage_Key')
            this.setState({
                otp: this.state.pin1+this.state.pin2+this.state.pin3+this.state.pin4          })
                console.log(this.state.otp)
                console.log(this.state.token)
            Otpsend(this.state.token,this.state.otp)

            .then(res=> {
           
                console.log("response>>",res)
                if(res.messages)
                {
                   // Alert.alert('OTP validation Success')

                    this.props.navigation.navigate('Setpassword',)

                }
                else if(res.errors[0].otp)
                {
                    console.log("response>>",res.errors[0].otp)
                    
                    Toast.show({
                        type:'tomatoToast',
                             position:'top',
                             text1:res.errors[0].otp,
                             visibilityTime:2000,
                             autoHide:true
                           
                         })
                   // Alert.alert(res.errors[0].otp)
                   // console.log("response>>",res.errors[0].otp)
                }
               else if(res.errors[0].token)
                {
                    
                   // Alert.alert(res.errors[0].token)
                    console.log("response>>",res.errors[0].token)
                    Toast.show({
                        type:'tomatoToast',
                             position:'top',
                             text1:res.errors[0].token,
                             visibilityTime:2000,
                             autoHide:true
                           
                         })

                }
                else if(res.errors[0].password)
                {
                    
                    //Alert.alert(res.errors[0].password)
                    console.log("response>>",res.errors[0].otp)
                    Toast.show({
                        type:'tomatoToast',
                             position:'top',
                             text1:res.errors[0].password,
                             visibilityTime:2000,
                             autoHide:true
                           
                         })
                }
                else if(res.errors[0].pin)
                {
                    
                    //Alert.alert(res.errors[0].password)
                    console.log("response>>",res.errors[0].pin)
                    Toast.show({
                        type:'tomatoToast',
                             position:'top',
                             text1:res.errors[0].pin,
                             visibilityTime:2000,
                             autoHide:true
                           
                         })
                }
                
    
    
               })
               
            


        }
    }
  
    render() {
        return (

            <ScrollView
      
      style={style.container}
    >
               

               <View style={style.container1}>
               <Text style={style.mytext}>Verify OTP</Text>
               <View style={style.container2}>
                    <Text style={style.mytext1}>Please enter verification code we sent to you</Text> 
                    <Text style={style.mytext2}>your registerd email</Text>

                </View>
               <Image source={require('../Assets/otp.png')} style={style.img}/>
               </View>
             

               
               

                <View style={style.container4}>
                <View style={{ flexDirection:'row', alignItems: 'center', width: "70%", marginTop: 20 ,justifyContent:'space-around'}}>


<TextInput
    style={style.input2}
    placeholder=''
    placeholderTextColor="#faebd7"
    value={this.state.pin1}
    onChangeText={(text) => this.setState({ pin1: text })}
    keyboardType='number-pad'

/>
<TextInput
    style={style.input2}
    placeholder=''
    placeholderTextColor="#faebd7"
    value={this.state.pin2}
    onChangeText={(text) => this.setState({ pin2: text })}
    keyboardType='number-pad'

/> 
<TextInput
style={style.input2}
placeholder=''
placeholderTextColor="#faebd7"
value={this.state.pin3}
onChangeText={(text) => this.setState({ pin3: text })}
keyboardType='number-pad'

/>

<TextInput
    style={style.input2}
    placeholder='---'
    placeholderTextColor="gray"
    value={this.state.pin4}
    onChangeText={(text) => this.setState({ pin4: text })}
    keyboardType='number-pad'
/>

</View>


<View style={{  alignItems: 'center',justifyContent:'center',flexDirection:'row'}}>
           
          <TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '800', color: 'gray',paddingLeft:20}}>Code Expires in</Text>
                    </TouchableOpacity>
                    <CountDown
        until={30 * 1}
        size={20}
       // onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: ''}}
        digitTxtStyle={{color: 'gray'}}
        timeToShow={['M', 'S']}
        showSeparator
        separatorStyle={{color: 'gray'}}
        timeLabels={{m: null, s: null}}
      />     
                </View>      


                


               

                    <Buttoncom
                        
                        style={[style.mybutton, this.state.email==null && this.state.email!=null ? style.textinvalid : style.textvalid]}

                    onClick={() => this.Senddata()}

                        // image1={require('')}
                        btnText={"Verify"}
                        TextStyle={style.textbutton}

                    />
           
              
                <View style={style.container3}>
<Text style={style.forgot_button3}>Didn't recive code?
</Text>
<TouchableOpacity  style={style.forgot_button2}

   onPress={()=>this.props.navigation.navigate('Logincom')}
   >

<Text style={style.forgot_button4}> Resend Code</Text>

</TouchableOpacity>
</View>
             
</View>   
<Toast config={toastConfig} />

            </ScrollView>


        )
    }
}

const style = StyleSheet.create({
    input: {
        height: 40,
        margin: 20,
        color: 'black',
        padding: 10,
        width: '90%',
        borderWidth: 1,
        borderColor: '#d8bfd8',
        borderRadius:10

    },
    mytext3:{
        marginLeft:20,width: '90%',marginTop:20
    },
    container4:{
        flex:1,alignItems: 'center', width: "100%",
    },
    mytext:{
        fontSize: 20,  color: '#663399',marginTop:40
    },
    mytext1:{
        fontSize: 16, fontWeight: '400', color: 'gray',
    },
    mytext2:{
        fontSize: 16, fontWeight: '400', color: 'gray',marginBottom:15
    },
    img:{
        height:260,width:260,alignItems:'center'
    },
    container1:
    {
        flex:1,
   
        alignItems:'center',
        justifyContent:'center',
       

    },
    container2:{
        alignItems: 'center',  marginTop: 20,justifyContent:'center'
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

        marginTop: 10,
        backgroundColor: '#dc143c',
        height: 50,
        width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textvalid: {
        backgroundColor: '#dc143c',
    },
    textinvalid: {
        backgroundColor: 'white',
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
        color: 'gray',
    },
    forgot_button3:
    {
        marginBottom: 40,

        marginTop: 30,
        color: 'gray'

    },
    forgot_button4:
    {
        textDecorationLine: 'underline',
        fontWeight:'bold',

        marginTop: 30,
        marginBottom: 40,
        color: 'gray'

    },
    textbutton: {
        fontSize: 16,
        color: 'white'
    },
    input2: {
      height: 35,
      margin: 10,
      color: 'gray',
      padding: 10,
      width: '13%',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius:5


  },
});
