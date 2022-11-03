import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icons from 'react-native-vector-icons/Feather'

export default class LoginPg extends React.Component {

    constructor(props) {
        super();
        this.state =
        {
            psw: true,
            email: "",
            password: "",
        }

    }
    render(){
        return (
            <View >
            <View >
                <View style={styles.stlingView}>
                    <Text style={styles.texthaveAcc}>No account?<Text style={{ textDecorationLine: "underline", }}> Sign Up</Text></Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 8 }}>Log in</Text>
                    <Text style={{ paddingBottom: 10 }}>Welcome back to MLH, login to continue</Text>
                </View>
                {/* {/ ----TextInput--- /} */}
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
                
                {/* ---forgot psw--- */}
                <View style={{ alignItems: "flex-end", paddingRight: 10 }}>
                    <Text>Forgot password?</Text>
                </View>

                 {/* ----Button---- */}
    
                    <TouchableOpacity
                        style={styles.button}>
                        {/* onPress={() => this.createAccountValidation()}>  */}
                        <Text style={styles.Logintext}>Login</Text>
                    </TouchableOpacity>
                    </View>
                   
                    

            {/* ----2nd part----
             ----Button---  */}
         <View>
                <View style={{ justifyContent: 'flex-end', alignItems: "center"}}>
                    <Text>or login with</Text>
                </View>
            {/* ----Img---  */}
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stlingView: { paddingLeft: 10},
    texthaveAcc: { margin: 8, marginBottom: 20 ,paddingLeft:230},
    input: {
        height: 40,
        margin: 10,
        borderColor: "#e4e1ed",
        borderWidth: 2,
        padding: 6,
        borderRadius: 5,
        backgroundColor: "#f6f5fa"
    },
    textinput: { paddingLeft: 10, paddingTop: 5 },
    signuptext: { color: "white" },
    passwordview: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#f6f5fa",
        borderWidth: 2,
        borderColor: "#e4e1ed",
        margin: 10,
    },
    button: {
        height: 50,
        margin: 10,
        padding: 6,
        borderRadius: 5,
        backgroundColor: '#d84b51',
        justifyContent: "center",
        alignItems: "center"
    },
    Logintext: { color: "white", },
    imgView: {flexDirection: 'row', justifyContent: "space-around", paddingTop: 3,},
    imgstyle: {
        height: 30, width: 30
    }
})
// const styles = StyleSheet.create({
//     containerMain: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     bottomView: {
//       width: '100%',
//       height: 50,
//       backgroundColor: 'red',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'absolute', //Here is the trick
//       bottom: 0, //Here is the trick
//     },
//     textStyle: {
//       color: '#fff',
//       fontSize: 18,
//     },
//   });