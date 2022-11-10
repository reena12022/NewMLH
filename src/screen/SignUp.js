import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/Feather'
import Toast,{BaseToast} from 'react-native-toast-message';
import { signup } from '../Services/Service';
import AsyncStorage from '@react-native-async-storage/async-storage';

Icon.loadFont().then();
Icons.loadFont().then()
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


    tomatoToast: ({ text1, props }) => (
        <View style={{ flexDirection: 'row', height: 75, width: '95%', backgroundColor: '#dc143c', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 10 }}>
            <Icon name="error-outline"
                color="white" size={30} />
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', flexWrap: 'wrap', flex: 1, paddingStart: 5 }}>{text1}</Text>

        </View>
    )

}
export default class SignUp extends React.Component {

    constructor(props) {
        super();
        this.state =
        {
            selected: false,
            isselected: false,
            psw: true,
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            errorshow: true,
            mytoken:''
        }
    }

    createAccountValidation = async() => {
        const { email, password } = this.state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let regpsw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if (this.state.first_name == '') {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: 'Please Enter firstName',
                visibilityTime: 3000,
                autoHide: true,
                onHide: () => {
                    this.setState({
                        errorshow: true
                    })
                },
                onShow: () => {
                    this.setState({
                        errorshow: false
                    })
                }
            })
        }
        else if (this.state.last_name == '') {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: 'Please Enter lastName',
                visibilityTime: 3000,
                autoHide: true,
                onHide: () => {
                    this.setState({
                        errorshow: true
                    })
                },
                onShow: () => {
                    this.setState({
                        errorshow: false
                    })
                }
            })
        }
        else if (this.state.email == '') {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: 'Please Enter email',
                visibilityTime: 3000,
                autoHide: true,
                onHide: () => {
                    this.setState({
                        errorshow: true
                    })
                },
                onShow: () => {
                    this.setState({
                        errorshow: false
                    })
                }
            })
        }
        else if (reg.test(email)
            == false) {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: 'Please enter correct email id',
                visibilityTime: 3000,
                autoHide: true,
                onHide: () => {
                    this.setState({
                        errorshow: true
                    })
                },
                onShow: () => {
                    this.setState({
                        errorshow: false
                    })
                }
            })
        }
        else if (this.state.password == "") {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: 'Please Enter password',
                visibilityTime: 3000,
                autoHide: true,
                onHide: () => {
                    this.setState({
                        errorshow: true
                    })
                },
                onShow: () => {
                    this.setState({
                        errorshow: false
                    })
                }
            })
        }
        // else if (regpsw.test(password) == false) {
        //     Toast.show({
        //         type: 'tomatoToast',
        //         position: 'top',
        //         text1: 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
        //         visibilityTime: 3000,
        //         autoHide: true,
        //         onHide: () => {
        //             this.setState({
        //                 errorshow: true
        //             })

        //         },
        //         onShow: () => {
        //             this.setState({
        //                 errorshow: false
        //             })
        //         }
        // })
        // }
        else {

            await AsyncStorage.setItem('resendEmailOTP', this.state.email)

            const data = {
                "data":
                {
                    "type": "email_account",
                    "attributes": {
                        "first_name": this.state.first_name,
                        "last_name": this.state.last_name,
                        "email": this.state.email,
                        "password": this.state.password,
                    }
                },
                "profile_image": "",
            }
            console.log("display>>", data)
            signup(data)

            .then(async res=> {
           
                console.log("response>>",res)
                if(res.data)

                {
                    this.setState({mytoken:res.meta.token})
            console.log(this.state.mytoken)
            
        await AsyncStorage.setItem('OTPToken', this.state.mytoken)
                   // Alert.alert('OTP validation Success')
                   Toast.show({
                    type:'success',
                         position:'top',
                         text1:'Account Created succsfully',
                         visibilityTime:3000,
                         autoHide:true,
                         onHide:() =>{
                            this.props.navigation.navigate('EmailVerificationOTP',)

                         }
                       
                     })

                   // this.props.navigation.navigate('LoginPg',)

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
                else if(res.errors[0].account)
                {
                    
                    //Alert.alert(res.errors[0].password)
                    console.log("response>>",res.errors[0].account)
                    Toast.show({
                        type:'tomatoToast',
                             position:'top',
                             text1:res.errors[0].account,
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
        <SafeAreaView>
            <ScrollView>

                <View style={styles.stlingView}>
                    <Text style={styles.texthaveAcc}>Have account?<Text onPress={() => this.props.navigation.navigate("LoginPg")} style={{ textDecorationLine: "underline", fontWeight: 'bold' }}> Log in</Text></Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 8, paddingTop: 20 }}>Sign up</Text>
                    <Text style={{ paddingBottom: 10 }}>Create your MLH account to continue</Text>
                </View>

                <View>
                    <Text style={styles.textinput}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.first_name}
                        onChangeText={(txt) => this.setState({ first_name: txt })} />
                    <Text style={styles.textinput}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.last_name}
                        onChangeText={(txt) => this.setState({ last_name: txt })} />
                    <Text style={styles.textinput}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={(txt) => this.setState({ email: txt })} />
                    <Text style={styles.textinput}>Create Password</Text>
                    <View style={styles.Createpsw}>
                        <TextInput
                            style={{ flex: 3 }}
                            value={this.state.password}
                            secureTextEntry={this.state.psw}
                            onChangeText={(txt) => this.setState({ password: txt })} />
                        <TouchableOpacity
                            style={{ paddingRight: 10 }}
                            onPress={() => this.setState({ psw: !this.state.psw })}>
                            <Icons
                                size={20}
                                name={this.state.psw === false ? 'eye' : 'eye-off'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.checkBoxstyle}>
                    <TouchableOpacity
                        onPress={() => this.setState({ selected: !this.state.selected })}
                        style={[styles.checkBox]}>
                        <Icon
                            size={20}
                            name={this.state.selected ? 'check-box' : 'check-box-outline-blank'} />
                    </TouchableOpacity>
                    <Text>I have read and agreed with the <Text style={{ fontWeight: 'bold' }}>Terms and Conditions*</Text></Text>
                </View>
                <View style={styles.checkBoxstyle}>
                    <TouchableOpacity
                        onPress={() => this.setState({ isselected: !this.state.isselected })}
                        style={[styles.checkBox]}>
                        <Icon
                            size={20}
                            name={this.state.isselected ? 'check-box' : 'check-box-outline-blank'} />
                    </TouchableOpacity>
                    <Text>I agree to receiving news and information from Medical Learning Hub</Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.createAccountValidation()}>
                        <Text style={styles.signuptext}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: Platform.OS === "ios" ? 30 : 10 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                        <Text>or sign up with</Text>
                    </View>


                    <View style={styles.imgView}>
                        <Image style={styles.imgstyle}
                            source={require('../Assets/icon_google.png')}
                        ></Image>
                        <Image style={styles.imgstyle}
                            source={require('../Assets/icon_fb.png')}
                        ></Image>
                        <Image style={styles.imgstyle}
                            source={require('../Assets/icon_indeed.png')}
                        ></Image>
                        <Image style={styles.imgstyle}
                            source={require('../Assets/icon_tweet.png')}
                        ></Image>
                    </View>
                </View>
                <Toast config={toastConfig} />
            </ScrollView>
        </SafeAreaView>
    )
}
}
const styles = StyleSheet.create({
    stlingView: { paddingLeft: 10 },
    checkBoxstyle: {
        paddingLeft: 10, flexDirection: "row"
    },
    texthaveAcc: {
        alignSelf: "flex-end", paddingRight: 10
    },
    input: {
        height: 43,
        margin: 10,
        borderColor: "#e4e1ed",
        borderWidth: 2,
        padding: 6,
        borderRadius: 7,
        backgroundColor: "#f6f5fa"
    },
    textinput: { paddingLeft: 10, paddingTop: 5 },
    button: {
        height: 50,
        margin: 10,
        marginTop: 20,
        borderRadius: 7,
        backgroundColor: '#d84b51',
        justifyContent: "center",
        alignItems: "center"
    },
    signuptext: { color: "white", },
    checkBox: { flexDirection: 'row', paddingBottom: 4 },
    Createpsw: {
        flexDirection: "row",
        alignItems: "center",
        height: 43,
        borderRadius: 7,
        backgroundColor: "#f6f5fa",
        borderWidth: 2,
        borderColor: "#e4e1ed",
        margin: 10,
    },
    imgView: { flex: 1, flexDirection: 'row', justifyContent: "space-around", paddingTop: 3 },
    imgstyle: {
        height: 30, width: 30
    }
})