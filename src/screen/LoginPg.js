import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image ,Alert} from 'react-native';
import Icons from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginServices } from '../Services/Service';
Icon.loadFont().then();
Icons.loadFont().then()


const toastConfig = {

    tomatoToast: ({ text1, props }) => (
        <View style={{ flexDirection: 'row', height: 75, width: '95%', backgroundColor: '#dc143c', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 10 }}>
            <Icon name="error-outline"
                color="white" size={30} />
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', flexWrap: 'wrap', flex: 1, paddingStart: 5 }}>{text1}</Text>
        </View>
    )

}

export default class LoginPg extends React.Component {

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
        //     })
        // }
        else {
            const data = {
                "data":
                {
                    "type": "email_account",
                    "attributes": {
                        "email": this.state.email,
                        "password": this.state.password,
                    }
                }
            }

            console.log("display>>", data)
            LoginServices(data).then(res=>{
                console.log("res::::",res)
          

            //     if (res) {
             
            //         alert(res.error)
            // }
            // else {
            //         Alert.alert("Login","Sucessfully login")
            //         [
            //             {
            //                 text: "Cancel",
            //                 onPress: () => console.log("simple press cancel"),
                           
            //             },
            //             { 
            //                 text: "OK", onPress: () => this.props.navigation.navigate('Forgotscreen1') 
            //             } 
            //         ]
                
            // }
        }
            )
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
                            <Text style={styles.texthaveAcc}>No account?<Text onPress={() => this.props.navigation.navigate("SignUp")} style={{ textDecorationLine: "underline", fontWeight: 'bold' }}> Sign Up</Text></Text>
                            <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 8, paddingTop: 20 }}>Log in</Text>
                            <Text style={{ paddingBottom: 10 }}>Welcome back to MLH, login to continue</Text>
                        </View>

                        <Text style={styles.textinput}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={this.state.email}
                            onChangeText={(txt) => this.setState({ email: txt })} />
                        <Text style={styles.textinput}>Password</Text>
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
                                <Text>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity
                            onPress={() => this.createLoginValidation()}
                            style={styles.button}>
                            <Text style={styles.Logintext}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ----2nd part----
             ----login with---  */}
                    <View style={{ marginTop: Platform.OS === "ios" ? 300 : 220 }}>
                        <View style={{ justifyContent: 'flex-end', alignItems: "center", marginBottom: 15 }}>
                            <Text>or login with</Text>
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