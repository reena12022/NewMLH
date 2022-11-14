import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image ,Alert} from 'react-native';
import Icons from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Toast, {BaseToast} from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginServices } from '../Services/service';
Icon.loadFont().then();
Icons.loadFont().then()
import { withTranslation } from "react-i18next";
import I18n from '../Language/I18n';

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

 class LoginPg extends React.Component {

    constructor(props) {
        super();
        this.state =
        {
            psw: true,
            email: "",
            password: "",
            errorshow: true
        }

    }

    createLoginValidation = () => {

        const { email, password } = this.state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let regpsw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if (this.state.email == '') {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: I18n.t('PLEASE_ENTER_EMAIL'),
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
                text1: I18n.t('PLEASE_ENTER'),
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
                text1: I18n.t('PLEASE_ENTER_PASSWORD'),
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
        //     })
        // }
        else {
            const data = {
                data: {
                    "type": "email_account",
                    "attributes":
                    {
                        "email":this.state.email,
                        "password": this.state.password
                    }
                  }
            }

            LoginServices(data)

            .then(res=> {
           
                console.log("response>>",res)
                if(res.account)
                {
                   // Alert.alert('OTP validation Success')
                   Toast.show({
                    type:'success',
                         position:'top',
                         text1:I18n.t('Login succsfully'),
                         visibilityTime:2000,
                         autoHide:true
                       
                     })

                    this.props.navigation.navigate('Bootomroot',)

                }
                else if(res.status == 500)
                {
                    console.log("response>>",res.errors[0].otp)
                    
                    Toast.show({
                        type:'tomatoToast',
                             position:'top',
                             text1:"Email Not Found",
                             visibilityTime:2000,
                             autoHide:true
                           
                         })
                   // Alert.alert(res.errors[0].otp)
                   // console.log("response>>",res.errors[0].otp)
                }
               else if(res.errors)
                {
                    
                   // Alert.alert(res.errors[0].token)
                    console.log("response>>",res.errors[0].token)
                    Toast.show({
                        type:'tomatoToast',
                             position:'top',
                             text1:I18n.t('Password Not Correct'),
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
                else
                {
                    
                    //Alert.alert(res.errors[0].password)
                    console.log("response>>",res.errors[0].pin)
                    Toast.show({
                        type:'tomatoToast',
                             position:'top',
                             text1:I18n.t('Please Check Your Email and Password'),
                             visibilityTime:2000,
                             autoHide:true
                           
                         })
                }
    
    
               })
        }
    }
        // if(response.message){
        //         alert("response.error")
        //     }
        //    
    
    render() {
        return (
            <SafeAreaView>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View >
                        <View style={styles.stlingView}>
                            <Text style={styles.texthaveAcc}>{I18n.t('NO_ACCOUNT?')}<Text onPress={() => this.props.navigation.navigate("SignUp")} style={{ textDecorationLine: "underline", fontWeight: 'bold' }}> {I18n.t('SIGN_UP')}</Text></Text>
                            <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 8, paddingTop: 20 }}>Log in</Text>
                            <Text style={{ paddingBottom: 10 }}>{I18n.t('WELCOME_BACK')}</Text>
                        </View>

                        <Text style={styles.textinput}>{I18n.t('EMAIL')}</Text>
                        <TextInput
                            style={styles.input}
                            value={this.state.email}
                            autoCapitalize={false}
                            onChangeText={(txt) => this.setState({ email: txt })} />
                        <Text style={styles.textinput}>{I18n.t('PASSWORD')}</Text>
                        <View style={styles.passwordview}>
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


                        <View style={{ alignItems: "flex-end", paddingRight: 10, paddingBottom: 20 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotScreen1")}>
                                <Text>{I18n.t('FORGOT?')}</Text>
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity
                            onPress={() => this.createLoginValidation()}
                            style={styles.button}>
                            <Text style={styles.Logintext}>{I18n.t('LOGIN')}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ----2nd part----
             ----login with---  */}
                    <View style={{ marginTop: Platform.OS === "ios" ? 300 : 220 }}>
                        <View style={{ justifyContent: 'flex-end', alignItems: "center", marginBottom: 15 }}>
                            <Text>{I18n.t('OR_LOGIN_WITH')}</Text>
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
        );
    }
}

const styles = StyleSheet.create({
    stlingView: { paddingLeft: 10 },
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
    signuptext: { color: "white" },
    passwordview: {
        flexDirection: "row",
        alignItems: "center",
        height: 43,
        borderRadius: 7,
        backgroundColor: "#f6f5fa",
        borderWidth: 2,
        borderColor: "#e4e1ed",
        margin: 10,
    },
    button: {
        height: 50,
        margin: 10,
        padding: 6,
        borderRadius: 7,
        backgroundColor: '#d84b51',
        justifyContent: "center",
        alignItems: "center"
    },
    Logintext: { color: "white", },
    imgView: { flexDirection: 'row', justifyContent: "space-around", paddingTop: 3, },
    imgstyle: {
        height: 30, width: 30
    }
})

export default withTranslation()(LoginPg);