import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput, View, ScrollView, Image, StyleSheet, Alert, FlatList, Text } from 'react-native';
import Buttoncom from './buttoncom';
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { withTranslation } from "react-i18next";
import I18n from '../Language/I18n';

Icon.loadFont().then();

import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
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
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', flexWrap: 'wrap', flex: 1, paddingStart: 5 }}>{text1}</Text>
        </View>
    )

}

class ForgotScreen2 extends Component {

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
        value1: false,
        value2: true,
        value3: false,
        value4: false,
        lineWidth: 10,
    }

    Senddata() {
        if (!this.state.email == '') {
            Toast.show({
                type: 'tomatoToast',
                position: 'top',
                text1: I18n.t('Please Enter email'),
                visibilityTime: 2000,
                autoHide: true

            })


        }
        else {
            this.props.navigation.navigate('Setpassword',)

        }
    }

    render() {
        return (

            <ScrollView

                style={style.container}>

                <View style={style.container1}>
                    <Text style={style.mytext}>{I18n.t('Verify OTP')}</Text>
                    <View style={style.container2}>
                        <Text style={style.mytext1}>{I18n.t('Please enter verification code we sent to you')}</Text>
                        <Text style={style.mytext2}>{I18n.t('your registerd email')}</Text>

                    </View>
                    <Image source={require('../Assets/otp.png')} style={style.img} />
                </View>





                <View style={style.container4}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "70%", marginTop: 20, justifyContent: 'space-around' }}>


                        <TextInput
                            style={style.input2}
                            placeholder=''
                            placeholderTextColor="#faebd7"
                            value={this.state.pin1}
                            onChangeText={(text) => this.setState({ pin1: text })}
                            keyboardType='number-pad'

                        />
                        <TextInput
                            style={style.input2}
                            placeholder=''
                            placeholderTextColor="#faebd7"
                            value={this.state.pin2}
                            onChangeText={(text) => this.setState({ pin2: text })}
                            keyboardType='number-pad'

                        />
                        <TextInput
                            style={style.input2}
                            placeholder=''
                            placeholderTextColor="#faebd7"
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
                            <Text style={{ fontSize: 16, fontWeight: '800', color: 'gray', paddingLeft: 20 }}>{I18n.t('Code Expires in')}</Text>
                        </TouchableOpacity>
                        <CountDown
                            until={30 * 1}
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

                        onClick={() => this.Senddata()}

                        // image1={require('')}
                        btnText={I18n.t('Verify')}
                        TextStyle={style.textbutton}

                    />


                    <View style={style.container3}>
                        <Text style={style.forgot_button3}>{I18n.t('Didnt recive code?')}
                        </Text>
                        <TouchableOpacity style={style.forgot_button2}

                            onPress={() => this.props.navigation.navigate('Logincom')}
                        >

                            <Text style={style.forgot_button4}> {I18n.t('Resend Code')}</Text>

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
export default withTranslation()(ForgotScreen2);