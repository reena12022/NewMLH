import React, { Component } from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput, View, ScrollView, Image, StyleSheet, Alert, FlatList, Text } from 'react-native';
import Buttoncom from './buttoncom';
import MyIcon from 'react-native-vector-icons/FontAwesome';
import { withTranslation } from "react-i18next";
import I18n from '../Language/I18n';
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/MaterialIcons';
MyIcon.loadFont().then();

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
        <View style={{ flexDirection: 'row', height: 60, width: '90%', backgroundColor: '#dc143c', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
            <Icon name="error-outline"
                color="white" size={30} />
            <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: '400', color: 'white' }}>{text1}</Text>

        </View>
    )

}
class Updatepsw extends Component {

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
            this.props.navigation.navigate('LoginPg',)

        }
    }

    render() {
        return (

            <ScrollView

                style={style.container}>


                <View style={style.container1}>
                    <Toast config={toastConfig} />
                    <Text style={style.mytext}>{I18n.t('PASSWORD')}</Text>
                    <Text style={style.mytext4}>{I18n.t('UPDATED')}</Text>


                    <View style={style.img}>
                        <Icon name="check"
                            color="white" size={50} />

                    </View>
                    <View style={style.container2}>
                        <Text style={style.mytext1}>{I18n.t('Your Password has been succuesfully')}</Text>
                        <Text style={style.mytext2}>{I18n.t('UPDATED')}</Text>

                    </View>
                </View>





                <View style={style.container4}>










                    <Buttoncom

                        style={[style.mybutton, this.state.email == null && this.state.email != null ? style.textinvalid : style.textvalid]}

                        onClick={() => this.Senddata()}

                        // image1={require('')}
                        btnText={I18n.t('LOGIN')}
                        TextStyle={style.textbutton} />




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
        borderColor: '#d8bfd8',
        borderRadius: 10

    },
    mytext3: {
        marginLeft: 20, width: '90%', marginTop: 20
    },
    container4: {
        flex: 1, alignItems: 'center', width: "100%", justifyContent: 'flex-end', marginTop: Platform.OS === "ios" ? 300 : 250
    },
    mytext: {
        fontSize: 25, color: '#663399', marginTop: 40
    },
    mytext4: {
        fontSize: 25, color: '#663399', marginTop: 5
    },
    mytext1: {
        fontSize: 16, fontWeight: '400', color: 'gray',
    },
    mytext2: {
        fontSize: 16, fontWeight: '400', color: 'gray', marginBottom: 15
    },
    img: {
        height: 100, width: 100, alignItems: 'center', borderRadius: 50, backgroundColor: '#dc143c', justifyContent: 'center', marginTop: 30
    },
    img2: {
        height: 50, width: 50, borderColor: "red",
        borderWidth: 5,
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
export default withTranslation()(Updatepsw);
