import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/Feather'
import { useToast } from "react-native-toast-notifications";

export default class SignUp extends React.Component {
    
    constructor(props) {
        super();
        this.state =
        {
            selected: false,
            isselected: false,
            psw: true,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }

    }

    createAccountValidation = () => {
        // const toast = useToast();

        // toast.show("Task finished successfully", {
        //     type: "normal",
        //     placement: "top",
        //     duration: 4000,
        //     offset: 30,
        //     animationType: "slide-in",
        //   });
          
        const { email, password } = this.state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let regpsw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if (this.state.firstName == "") {
            alert("enter firstName")
        }
        else if (this.state.lastName == "") {
            alert("enter lastName")
        }
        else if (this.state.email == "") {
            alert("enter email")
        }
        else if (reg.test(email) == false) {
            alert("Please enter correct email id")
        }
        else if (this.state.password == "") {
            alert("enter password")
        }
        else if (regpsw.test(password) == false) {
            alert("Minimum eight characters, at least one uppercase letter, one lowercase letter and one number")
        }

    }


    render() {

        return (
            <ScrollView>
                <View style={styles.stlingView}>
                    <Text style={styles.texthaveAcc}>Have account?<Text style={{ textDecorationLine: "underline", }}> Log in</Text></Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", paddingBottom: 8 }}>Sign up</Text>
                    <Text style={{ paddingBottom: 10 }}>Create your MLH account to continue</Text>
                </View>
                {/* ----TextInput--- */}
                <View>
                    <Text style={styles.textinput}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.firstName}
                        onChangeText={(txt) => this.setState({ firstName: txt })} />
                    <Text style={styles.textinput}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.lastName}
                        onChangeText={(txt) => this.setState({ lastName: txt })} />
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
                {/* ----checkbox---- */}
                <View style={styles.stlingView}>
                    <TouchableOpacity
                        onPress={() => this.setState({ selected: !this.state.selected })}
                        style={[styles.checkBox]}>
                        <Icon
                            size={20}
                            name={this.state.selected ? 'check-box' : 'check-box-outline-blank'} />
                        <Text>I have read and agreed with the Terms and Conditions*</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.setState({ isselected: !this.state.isselected })}
                        style={[styles.checkBox]}>
                        <Icon
                            size={20}
                            name={this.state.isselected ? 'check-box' : 'check-box-outline-blank'} />
                        <Text>I agree to receiving news and information from Medical Learning Hub</Text>
                    </TouchableOpacity>
                </View>
                {/* ----Button---- */}
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.createAccountValidation()}>
                        <Text style={styles.signuptext}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text>or sign up with</Text>
                    </View>
                </View>
                {/* ----Img--- */}
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
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    stlingView: {paddingLeft: 10},
    texthaveAcc: { paddingLeft: 250, margin: 8, marginBottom: 20 },
    input: {
        height: 40,
        margin: 10,
        borderColor: "#e4e1ed",
        borderWidth: 2,
        padding: 6,
        borderRadius: 5,
        backgroundColor: "#f6f5fa"
    },
    textinput: {paddingLeft: 10,paddingTop: 5},
    button: {
        height: 50,
        margin: 10,
        padding: 6,
        borderRadius: 5,
        backgroundColor: '#d84b51',
        justifyContent: "center",
        alignItems: "center"
    },
    signuptext: { color: "white",},
    checkBox: {flexDirection: 'row', paddingBottom: 4},
    Createpsw: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#f6f5fa",
        borderWidth: 2,
        borderColor: "#e4e1ed",
        margin: 10,
    },
    imgView: { flex: 1, flexDirection: 'row',  justifyContent: "space-around", paddingTop: 3 },
    imgstyle: { height: 30, width: 30
    }
})