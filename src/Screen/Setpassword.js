import React, {Component} from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput,View,ScrollView,Image, StyleSheet,Alert, FlatList, Text } from 'react-native';
import Buttoncom from './buttoncom';
import { withTranslation } from "react-i18next";
import I18n from '../Language/I18n';
import MyIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setpassword} from '../Services/service'
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont().then();
MyIcon.loadFont().then();

import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
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
        <Text style={{  fontSize: 16, fontWeight: '400', color: 'white',flexWrap:'wrap',flex:1 ,paddingStart:5 }}>{text1}</Text>
    </View>
      )

}
class Setpassword extends Component {
    
    state = {
        name: "",
        email: "",

        password: '',
        PhoneNo: '',
        LastName: '',
        confmpsw: '',
        submitDisabled: true,
        paswhideshow:true,
        data: null,
        value0: false,
        value1: false,
        value2: true,
        value3: false,
        value4: false,
        lineWidth: 10,
        token:''
    }
   
    Senddata=async()=>
    {
        if(this.state.password == '')
        {
            Toast.show({
           type:'tomatoToast',
                position:'top',
                text1:I18n.t('Please Enter password'),
                visibilityTime:2000,
                autoHide:true
              
            })


        }
        else if(this.state.password.length<8)
        {
            Toast.show({
           type:'tomatoToast',
                position:'top',
                text1:I18n.t('Please enter atlaest 8 charcter'),
                visibilityTime:2000,
                autoHide:true
              
            })


        }
        else  if(this.state.confmpsw == '')
        {
            Toast.show({
           type:'tomatoToast',
                position:'top',
                text1:I18n.t('Please Enter Confirm Password') ,
                visibilityTime:2000,
                autoHide:true,
            
              
            })
            


        }
        else  if(this.state.confmpsw != this.state.password)
        {
            Toast.show({
           type:'tomatoToast',
                position:'top',
                text1:I18n.t('Please_Confirm'),
                visibilityTime:2000,
                autoHide:true,
            
              
            })
        }
        else{
            this.state.token = await AsyncStorage.getItem('@storage_Key')
            setpassword(this.state.token,this.state.password)
            .then(res=> {
           
                console.log("response>>",res)
                if(res.data)
                {
                   // Alert.alert('Updated Succesfully')
                   Toast.show({
                    type:'success',
                         position:'top',
                         text1:I18n.t('Password Upadated Succesfully'),
                         visibilityTime:5000,
                         autoHide:true,
                         onHide:() =>{
                            this.props.navigation.navigate('LoginPg',)

                         }
                       
                     })
                    

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
    
    
               })
              
            

        }
    }
    onClick = () => {

        this.setState({ submitDisabled: false })


    }
    onClick1 = () => {

        this.setState({ submitDisabled: true })
    }
    onClick2=()=>{
 
        this.setState({paswhideshow:false})
    
    
    }
    onClick3=()=>{
       
      this.setState({paswhideshow:true})
     
    }
  
    render() {
        return (

            <ScrollView
      
      style={style.container}
    >
               

               <View style={style.container1}>
               <Text style={style.mytext}>{I18n.t('Create New Password')}</Text>
               <View style={style.container2}>
                    <Text style={style.mytext1}>{I18n.t('Your New Password')}</Text> 
                    <Text style={style.mytext2}>{I18n.t('previously')}</Text>

                </View>
               <Image source={require('../Assets/updateimg.png')} style={style.img}/>
               </View>
             

               
               

                <View style={style.container4}>
<Text style={style.mytext3}>{I18n.t('PASSWORD')}</Text>

{
                        this.state.submitDisabled ?

                            <View style={style.input1}>
                                

                                <TextInput     style={{fontSize:18,color:'black'}}
                                    placeholder={I18n.t('PASSWORD')}
                                    placeholderTextColor="#d8bfd8"
                                    value={this.state.password}
                                    onChangeText={(text) => this.setState({ password: text })}
                                    secureTextEntry={true}
                                />
                                  
                                {
                                    this.state.submitDisabled ?
                                        <TouchableOpacity style={{margin:10}} onPress={() => this.onClick()}>
                                             <MyIcon name="eye-off"
color="gray" size={20}/>


                                        </TouchableOpacity>
                                        : null}

                            </View>
                            : null}
                            {
                        !this.state.submitDisabled ?

                            <View style={style.input1}>
                                

                                <TextInput     style={{fontSize:18,color:'black'}}
                                    placeholder={I18n.t('PASSWORD')}
                                    placeholderTextColor="#d8bfd8"
                                    value={this.state.password}
                                    onChangeText={(text) => this.setState({ password: text })}
                                    secureTextEntry={false}
                                />
                                  
                                {
                                    !this.state.submitDisabled ?
                                        <TouchableOpacity style={{margin:10}}onPress={() => this.onClick1()}>
                                             <MyIcon name="eye"
color="gray" size={20}/>


                                        </TouchableOpacity>
                                        : null}

                            </View>
                            : null}
                    <Text style={style.mytext4}>{I18n.t('Must be atleast 8 Charcters')}</Text>


                    <Text style={style.mytext3}>{I18n.t('Confirm Password')}</Text>

                    {
                        this.state.paswhideshow ?

                            <View style={style.input1}>
                                

                                <TextInput     style={{fontSize:18,color:'black'}}
                                    placeholder={I18n.t('PASSWORD')}
                                    placeholderTextColor="#d8bfd8"
                                    value={this.state.confmpsw}
                                    onChangeText={(text) => this.setState({ confmpsw: text })}
                                    secureTextEntry={true}
                                />
                                  
                                {
                                    this.state.paswhideshow ?
                                        <TouchableOpacity style={{margin:10}}
                                        onPress={() => this.onClick2()}>
                                             <MyIcon name="eye-off"
color="gray" size={20}/>


                                        </TouchableOpacity>
                                        : null}

                            </View>
                            : null}
                            {
                        !this.state.paswhideshow ?

                            <View style={style.input1}>
                                

                                <TextInput     style={{fontSize:18,color:'black'}}
                                    placeholder={I18n.t('PASSWORD')}
                                    placeholderTextColor="#d8bfd8"
                                    value={this.state.confmpsw}
                                    onChangeText={(text) => this.setState({ confmpsw: text })}
                                    secureTextEntry={false}
                                />
                                  
                                {
                                    !this.state.paswhideshow ?
                                        <TouchableOpacity style={{margin:10}}
                                        onPress={() => this.onClick3()}>
                                             <MyIcon name="eye"
color="gray" size={20}/>


                                        </TouchableOpacity>
                                        : null}

                            </View>
                            : null}
<Text style={style.mytext4}>{I18n.t('Both password must match')}</Text>




                


               

                    <Buttoncom
                        
                        style={[style.mybutton, this.state.email==null && this.state.email!=null ? style.textinvalid : style.textvalid]}

                    onClick={() => this.Senddata()}

                        // image1={require('')}
                        btnText={I18n.t('Reset Password')}
                        TextStyle={style.textbutton}

                    />
           
              
                
             
</View>       
<Toast config={toastConfig} />

            </ScrollView>


        )
    }
}

const style = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        color: 'black',
        padding: 10,
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:10

    },
    mytext3:{
        marginLeft:20,width: '90%',marginTop:20
    },
    mytext4:{
        marginLeft:20,width: '90%'
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
        height: 50,
        justifyContent: 'space-between',
        padding:2,
        width: '90%',
        borderWidth: 2,
        borderColor: '#e4e1ed',
        borderRadius:10

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
    }
});
export default withTranslation()(Setpassword);