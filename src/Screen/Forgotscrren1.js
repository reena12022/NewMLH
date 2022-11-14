import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput, View, ScrollView, Image, StyleSheet, Alert, FlatList, Text } from 'react-native';
import Buttoncom from './buttoncom';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont().then();
import MyIcon from 'react-native-vector-icons/AntDesign';
import { submitmail } from '../Services/service';
import { withTranslation } from "react-i18next";
import I18n from '../Language/I18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
const toastConfig = {

    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */

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


class Forgotscrren1 extends Component {

    state = {
        name: "",
        email: "",

        password: '',
        PhoneNo: '',
        LastName: '',
        confmpsw: '',
        submitDisabled: true,
        errorshow: true,
        pattern: true,

        data: null,
        value0: false,
        value1: false,
        value2: true,
        value3: false,
        value4: false,
        lineWidth: 10,
        mytoken: ''

    }




    Senddata = async () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.state.email == '') {
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
        else if (reg.test(this.state.email) === false) {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: I18n.t('Email is not correct'),
                visibilityTime: 3000,
                autoHide: true,
                onHide: () => {
                    this.setState({
                        errorshow: true
                    })

                },
                onShow: () => {
                    this.setState({
                        errorshow: true
                    })

                }



            })


        }
        else {
            await AsyncStorage.setItem('email', this.state.email)

            // submitmail(this.state.email)
            submitmail(this.state.email)
                .then(async res => {

                    console.log("response>>", res)
                    if (res.data) {
                        this.setState({ mytoken: res.meta.token })
                        console.log(this.state.mytoken)

                        await AsyncStorage.setItem('@storage_Key', this.state.mytoken)

                        this.props.navigation.navigate('Forgotscreen2',)

                    }
                    else if (res.errors[0].otp) {
                        console.log("response>>", res.errors[0].otp)

                        Toast.show({
                            type: 'tomatoToast',
                            position: 'top',
                            text1: I18n.t('You have entered incorrect'),
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

                    <Text style={style.mytext}>{I18n.t('FORGOT?')}</Text>
                    <View style={style.container2}>
                        <Text style={style.mytext1}>{I18n.t('Enter registered email below to receive')}</Text>
                        <Text style={style.mytext2}>{I18n.t('password reset instruction')}</Text>

                    </View>
                    <Image source={require('../Assets/forgot1.png')} style={style.img} />
                </View>





                <View style={style.container4}>
                    <Text style={style.mytext3}>{I18n.t('EMAIL')}</Text>


                    <View style={style.input1}>


                        <TextInput style={{ fontSize: 18, color: 'black' }}
                            placeholder={I18n.t('PASSWORD')}
                            placeholderTextColor="#d8bfd8"
                            value={this.state.email}
                            onChangeText={(text) => this.setState({ email: text })}
                            secureTextEntry={false}
                        />

                        {
                            reg.test(this.state.email) == true ?
                                <TouchableOpacity style={{ margin: 10 }} onPress={() => this.onClick()}>
                                    <MyIcon name="checksquareo"
                                        color="gray" size={20} />


                                </TouchableOpacity>
                                : null}
                        {
                            !this.state.errorshow ?
                                <TouchableOpacity style={{ margin: 10 }} onPress={() => this.onClick()}>
                                    <Icon name="error-outline"
                                        color="red" size={20} />


                                </TouchableOpacity>
                                : null}

                    </View>










                    <Buttoncom

                        style={[style.mybutton, this.state.email == null && this.state.email != null ? style.textinvalid : style.textvalid]}

                        onClick={() => this.Senddata()}

                        // image1={require('')}
                        btnText={I18n.t('Send')}
                        TextStyle={style.textbutton}

                    />


                    <View style={style.container3}>
                        <Text style={style.forgot_button3}>{I18n.t('Go back to')}
                        </Text>
                        <TouchableOpacity style={style.forgot_button2}

                            onPress={() => this.props.navigation.navigate('LoginPg')}
                        >

                            <Text style={style.forgot_button4}> {I18n.t('LOGIN')}</Text>

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
        borderColor: '#e4e1ed',
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
        height: 50,
        justifyContent: 'space-between',
        padding: 2,
        width: '90%',
        borderWidth: 2,
        borderColor: '#e4e1ed',
        borderRadius: 10
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
    }
});
export default withTranslation()(Forgotscrren1);