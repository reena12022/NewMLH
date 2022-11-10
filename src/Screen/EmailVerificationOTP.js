import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput, View, ScrollView, Image, StyleSheet, Alert, FlatList, Text } from 'react-native';
import Buttoncom from './buttoncom';
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
Icon.loadFont().then();

import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { submitmail ,emailverificationOTP,ResendEmailOTP} from '../Services/Service';
const toastConfig = {
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
        <View style={{ flexDirection: 'row', height: 80, width: '95%', backgroundColor: '#dc143c', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 10 }}>
            <Icon name="error-outline"
                color="white" size={30} />
            <Text style={{ fontSize: 16, fontWeight: '400', color: 'white', flexWrap: 'wrap', flex: 1, paddingStart: 5 }}>{text1}</Text>
        </View>
    )

}
export default class EmailVerificationOTP extends Component {

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
        token: '',
        mytoken: '',
        until: 30 * 1,
        runCountdown: true,
        id: 1
    }

     resesendEmailVerificationOTP = async()=>{
        this.state.email = await AsyncStorage.getItem('resendEmailOTP')

        ResendEmailOTP(this.state.email)
        .then(async res=> {
         
          console.log("response>>",res)
          if(res.data)
          {
              this.setState({mytoken:res.meta.token})
          console.log(this.state.mytoken)
          
    //   await AsyncStorage.setItem('@storage_Key', this.state.mytoken)
      
        //   this.props.navigation.navigate('LoginPg',)

          }
          else if(res.errors[0].otp)
          {
              console.log("response>>",res.errors[0].otp)
              
              Toast.show({
                  type:'tomatoToast',
                       position:'top',
                       text1:"You have entered incorrect email id please enter registerd email id to login to your MLH account",
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
          else if(res.errors[0].account)
          {
              
             // Alert.alert(res.errors[0].token)
              console.log("response>>",res.errors[0].account)
              Toast.show({
                  type:'tomatoToast',
                       position:'top',
                       text1:res.errors[0].account,
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
      

         })
         
        // await AsyncStorage.setItem('@storage_Key', this.state.mytoken)
         //console.log(this.state.mytoken)

        // .catch((err)=>console.log("err>>",err))

      }
        
    SendOTP = async () => {
 this.state.token = await AsyncStorage.getItem('OTPToken')
        this.setState({
            otp: this.state.pin1 + this.state.pin2 + this.state.pin3 + this.state.pin4
        })
        console.log(this.state.otp)
        console.log(this.state.token)
        emailverificationOTP(this.state.otp,this.state.token)

            .then(res => {

                console.log("response>>", res)
                if (res.meta.message) {
                    console.log('resdata>>>',res.meta.message)
                    // Alert.alert('OTP validation Success')
                    Toast.show({
                        type: 'tomatoToast',
                        position: 'top',
                        text1: res.meta.message,
                        visibilityTime: 2000,
                        autoHide: true

                    })
                    this.props.navigation.navigate('LoginPg',)

                }
                else if (res.errors[0].pin) {
                    console.log("response>>", res.errors[0].pin)

                    Toast.show({
                        type: 'tomatoToast',
                        position: 'top',
                        text1: 'Please provide correct OTP to reset password if have not recive OTP yet then click on resend code',
                        visibilityTime: 2000,
                        autoHide: true

                    })
                    // Alert.alert(res.errors[0].otp)
                    // console.log("response>>",res.errors[0].otp)
                }
                else if (res.errors[0].token) {

                    // Alert.alert(res.errors[0].token)
                    console.log("response>>", res.errors[0].token)
                    Toast.show({
                        type: 'tomatoToast',
                        position: 'top',
                        text1: res.errors[0].token,
                        visibilityTime: 2000,
                        autoHide: true

                    })

                }
                else if (res.errors[0].password) {

                    //Alert.alert(res.errors[0].password)
                    console.log("response>>", res.errors[0].otp)
                    Toast.show({
                        type: 'tomatoToast',
                        position: 'top',
                        text1: res.errors[0].password,
                        visibilityTime: 2000,
                        autoHide: true

                    })
                }
            })
    }

    render() {
        return (

            <ScrollView

                style={style.container}
            >


                <View style={style.container1}>
                    <Text style={style.mytext}>Email Verification</Text>
                    <View style={style.container2}>
                        <Text style={style.mytext1}>Please enter verification code we sent to</Text>
                        <Text style={style.mytext2}>your registered email</Text>

                    </View>
                    <Image source={require('../Assets/Enter_OTP_bro.png')} style={style.img} />
                </View>





                <View style={style.container4}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "70%", marginTop: 20, justifyContent: 'space-around' }}>


                        <TextInput
                            style={style.input2}
                            placeholder='---'

                            placeholderTextColor="gray"
                            value={this.state.pin1}
                            onChangeText={(text) => this.setState({ pin1: text })}
                            keyboardType='number-pad'

                        />
                        <TextInput
                            style={style.input2}
                            placeholder='---'

                            placeholderTextColor="gray"
                            value={this.state.pin2}
                            onChangeText={(text) => this.setState({ pin2: text })}
                            keyboardType='number-pad'

                        />
                        <TextInput
                            style={style.input2}
                            placeholder='---'

                            placeholderTextColor="gray"
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


                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, fontWeight: '800', color: 'gray', paddingLeft: 20 }}>Code Expires in</Text>
                        </TouchableOpacity>
                        <CountDown
                            id={this.state.id.toString()}

                            until={this.state.until}

                            running={this.state.runCountdown}

                            size={20}
                            // onFinish={() => alert('Finished')}
                            digitStyle={{ backgroundColor: '' }}
                            digitTxtStyle={{ color: 'gray' }}
                            timeToShow={['M', 'S']}
                            showSeparator
                            separatorStyle={{ color: 'gray' }}
                            timeLabels={{ m: null, s: null }}
                        />
                    </View>







                    <Buttoncom

                        style={[style.mybutton, this.state.email == null && this.state.email != null ? style.textinvalid : style.textvalid]}

                        onClick={() => this.SendOTP()}

                        // image1={require('')}
                        btnText={"Submit button"}
                        TextStyle={style.textbutton}

                    />


                    <View style={style.container3}>
                        <Text style={style.forgot_button3}>Didn't receive code?
                        </Text>
                        <TouchableOpacity style={style.forgot_button2}

                            onPress={() => this.resesendEmailVerificationOTP()}
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
        borderRadius: 10

    },
    mytext3: {
        marginLeft: 20, width: '90%', marginTop: 20
    },
    container4: {
        flex: 1, alignItems: 'center', width: "100%",
    },
    mytext: {
        fontSize: 20, color: '#663399', marginTop: 40
    },
    mytext1: {
        fontSize: 16, fontWeight: '400', color: 'gray',
    },
    mytext2: {
        fontSize: 16, fontWeight: '400', color: 'gray', marginBottom: 15
    },
    img: {
        height: 260, width: 260, alignItems: 'center'
    },
    container1:
    {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',


    },
    container2: {
        alignItems: 'center', marginTop: 20, justifyContent: 'center'
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
        marginTop: Platform.OS === "ios" ? 140 : 70,
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
        fontWeight: 'bold',

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
        borderRadius: 5


    },
});
