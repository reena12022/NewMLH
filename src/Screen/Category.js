import React, {Component} from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput,View,ScrollView,Image, StyleSheet,Alert, FlatList, Text } from 'react-native';



export default class Setting extends Component {
    
        state={
            name: "",
            email: "",
    
            password: '',
            PhoneNo: '',
            LastName: '',
            confmpsw: '',
            submitDisabled: true,
            errorshow: true,
            pattern:true,
    
            data: null,
            value0: false,
            value1: false,
            value2: true,
            value3: false,
            value4: false,
            lineWidth: 10,
            mytoken:''

        }
    
      
    
   
        Senddata= async () =>
    {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(this.state.email == '')
        {
            Toast.show({
           type:'tomatoToast',
                position:'top',
                text1:'Please Enter Email',
                visibilityTime:3000,
                autoHide:true,
                onHide: () =>{
                    this.setState({
                        errorshow:true
                    })

                },
                onShow : () =>{
                    this.setState({
                        errorshow:false
                    })

                }
            
                
              
            })


        }
       else if(reg.test(this.state.email) === false)
        {
            Toast.show({
           type:'tomatoToast',
                position:'top',
                text1:'Email is not correct',
                visibilityTime:3000,
                autoHide:true,
                onHide: () =>{
                    this.setState({
                        errorshow:true
                    })

                },
                onShow : () =>{
                    this.setState({
                        errorshow:true
                    })

                }
            
                
              
            })


        }
        else{
            await AsyncStorage.setItem('email', this.state.email)

          // submitmail(this.state.email)
          submitmail(this.state.email)
          .then(async res=> {
           
            console.log("response>>",res)
            if(res.data)
            {
                this.setState({mytoken:res.meta.token})
            console.log(this.state.mytoken)
            
        await AsyncStorage.setItem('@storage_Key', this.state.mytoken)
        
            this.props.navigation.navigate('Forgotscreen2',)

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
          
    }
  
    render() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        return (

            <ScrollView
      
      style={style.container}
    >
               

               <View style={style.container1}>
               
               <Text style={style.mytext}>Setting</Text>
               
             

               
               

               </View> 
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
        borderColor: '#e4e1ed',
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
