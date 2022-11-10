import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/Feather'
import Toast from 'react-native-toast-message';

import { withTranslation } from "react-i18next";
import I18n from '../Language/I18n';

Icon.loadFont().then();
Icons.loadFont().then()
const toastConfig = {

    tomatoToast: ({ text1, props }) => (
        <View style={{ flexDirection: 'row', height: 80, width: '95%', backgroundColor: '#dc143c', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 10 }}>
            <Icon name="error-outline"
                color="white" size={30} />
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', flexWrap: 'wrap', flex: 1, paddingStart: 5 }}>{text1}</Text>

        </View>
    )

}

class SignUp extends React.Component {

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
            errorshow: true
        }
    }

    createAccountValidation = () => {

        const { email, password } = this.state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let regpsw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if (this.state.firstName == '') {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: I18n.t('Please Enter firstName'),
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
        else if (this.state.lastName == '') {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: I18n.t('Please Enter lastName'),
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
                text1: I18n.t('Please Enter email'),
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
                text1: I18n.t('Please enter correct email id'),
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
                text1: I18n.t('Please Enter password'),
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
        else if (regpsw.test(password) == false) {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: I18n.t('MINIMUM_EIGHT'),
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
        else {
            this.props.navigation.navigate('Login')

        }
    }


    render() {

        return (
            <SafeAreaView>
                <ScrollView>

                    <View style={styles.stlingView}>
                        <Text style={styles.texthaveAcc}>{I18n.t('Have_account?')}<Text style={{ textDecorationLine: "underline", fontWeight: 'bold' }}>{I18n.t('LOGIN')}</Text></Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 8, paddingTop: 20 }}>{I18n.t('SIGN_UP')}</Text>
                        <Text style={{ paddingBottom: 10 }}>{I18n.t('Create_your')}</Text>
                    </View>

                    <View>
                        <Text style={styles.textinput}>{I18n.t('First_Name')}</Text>
                        <TextInput
                            style={styles.input}
                            value={this.state.firstName}
                            onChangeText={(txt) => this.setState({ firstName: txt })} />
                        <Text style={styles.textinput}>{I18n.t('Last_Name')}</Text>
                        <TextInput
                            style={styles.input}
                            value={this.state.lastName}
                            onChangeText={(txt) => this.setState({ lastName: txt })} />
                        <Text style={styles.textinput}>{I18n.t('EMAIL')}</Text>
                        <TextInput
                            style={styles.input}
                            value={this.state.email}
                            onChangeText={(txt) => this.setState({ email: txt })} />
                        <Text style={styles.textinput}>{I18n.t('PASSWORD')}</Text>
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
                        <Text>{I18n.t('I_have_read')}<Text style={{ fontWeight: 'bold' }}>{I18n.t('Terms_and_Conditions*')}</Text></Text>
                    </View>
                    <View style={styles.checkBoxstyle}>
                        <TouchableOpacity
                            onPress={() => this.setState({ isselected: !this.state.isselected })}
                            style={[styles.checkBox]}>
                            <Icon
                                size={20}
                                name={this.state.isselected ? 'check-box' : 'check-box-outline-blank'} />
                        </TouchableOpacity>
                        <Text>{I18n.t('I_agree_to')}</Text>
                    </View>

                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.createAccountValidation()}>
                            <Text style={styles.signuptext}>{I18n.t('SIGN_UP')}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: Platform.OS === "ios" ? 20 : 10 }}>
                        <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                            <Text>{I18n.t('or_sign_up_with')}</Text>
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

export default withTranslation()(SignUp);