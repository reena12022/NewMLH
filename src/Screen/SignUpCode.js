import React from "react";

import { SafeAreaView, View, FlatList, TextInput, TouchableOpacity, Text, Image,StatusBar, StyleSheet, Platform } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {withTranslation} from "react-i18next";
import I18n from '../Language/I18n';
import OnBoardingScreen from "./OnBoardingScreen";

 class SignUpCode extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={"dark-content"} backgroundColor="#fff"/>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }} onPress={()=>this.props.navigation.navigate('PrefferedLanguage')}>
                        <AntDesign name="left" size={25} />
                        <Text style={{ fontWeight: '900', fontSize: 18 }}>{I18n.t('SIGN_UP_CODE')}</Text>
                        <Text style={{ fontSize: 15 }}>{I18n.t('SKIP')}</Text>
                    </TouchableOpacity>
                </View>

                <View>

                    <Text style={{ fontSize: 18, marginTop: 20 }}>{I18n.t('DID_YOUR_ORGANIZATION')}</Text>
                </View>



                <View style={{ marginTop: 30 }}>
                    <Text style={{ marginBottom: 5, fontSize: 15, marginLeft:5 }}>{I18n.t('ENTER_SIGN_UP_CODE')}</Text>
                    <TextInput placeholder= {I18n.t('FOR_INSTANCE')}   placeholderTextColor={'dimgrey'}
                        style={{ backgroundColor: 'gainsboro', borderColor: 'dimgrey', borderRadius: 10, padding: Platform.OS === 'ios' ? 15 : null,margin:10 }}

                    />
                </View>


                <View>

                    <Text style={{ fontSize: 18, marginTop: 20,textAlign:'center' }}> {I18n.t('SKIP_TO_CONTINUE_WITHOUT')}</Text>
                    <Text style={{ fontSize: 18, marginTop: 5,textAlign:'center'  }}> {I18n.t('ORGANIZATION_SELECTION')}</Text>

                </View>

                <View style={{top:380,  }}>
                    <View style={styles.btn1}>
                        <TouchableOpacity style={styles.touchbtn1} onPress={()=>this.props.navigation.navigate('OnBoardingScreen')}>

                            <Text style={styles.Next}>{I18n.t('NEXT')}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({

    container: { flex: 1, 
    backgroundColor:"#fff" },

    btn1: {
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 40
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
    },

    touchbtn1: {
        backgroundColor: '#dc143c',
        width: '90%',
        padding: 15,
        borderRadius: 8,
        width: '100%',

    },
    Next: { fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#fff' },
})
export default withTranslation()(SignUpCode);