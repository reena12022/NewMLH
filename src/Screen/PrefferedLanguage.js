import React from "react";
import { SafeAreaView, View, Text,StatusBar, TouchableOpacity, FlatList, StyleSheet, Image, ScrollView } from 'react-native'


import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import {withTranslation} from "react-i18next";
import I18n from '../Language/I18n';

import AsyncStorage from "@react-native-async-storage/async-storage";
 
class PrefferedLanguage extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            changeLanguage: 'english',
            Data: [
                {
                    id: 1,
                    imgUrl: require('../Assets/ENGLISH.png'),
                    Name: "English",

                    locImg: <Entypo name="location-pin" size={20} color='pink' />

                },
                {
                    id: 2,
                    imgUrl: require('../Assets/France.png'),
                    Name: "Français",

                    locImg: <Entypo name="location-pin" size={20} color='pink' />
                },



            ]
        };
    }

    renderItemList = ({ item }) => {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1, margin: 10, }}>
                <TouchableOpacity onPress={() => { this.onClickItem(item.id), this.changeLanguage(item.Name) }}>
                    <View style={{ backgroundColor: item.isSelected ? 'lightgrey' : 'white', borderRadius: 10, padding: 5 }}>


                        <View style={styles.listStyle}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.imgUrl} style={styles.imgStyle} />

                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{}}>{item.Name}</Text>

                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                {item.isSelected == true ? (
                                    <AntDesign name="check" size={25} color='grey' />
                                ) : (
                                    null
                                )}


                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        );
    };


    onClickItem = (id, lng) => {

        for (let i in this.state.Data) {
            if (this.state.Data[i].id == id) {
                this.state.Data[i].isSelected = true;
            }
            else {
                this.state.Data[i].isSelected = false;
            }
        }
        this.setState({ Data: this.state.Data });

    };

    changeLanguage = async (lng) => {
        if (lng === 'English') {
            // I18n.changeLanguage('en')
            I18n.locale='en'
            AsyncStorage.setItem('lang', 'en')
        }
        else {
           // I18n.changeLanguage('fr')
            I18n.locale='fr-BE'
            AsyncStorage.setItem('lang', 'fr')

        }

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                  <StatusBar barStyle={"dark-content"} backgroundColor="#fff"/>

                <TouchableOpacity style={styles.header} onPress={() => this.props.navigation.navigate('SignUpCode')}>
                    <AntDesign name="left" size={25} />
                    <Text style={styles.skip}> {I18n.t('SKIP')} </Text>
                </TouchableOpacity>

                <View style={{ backgroundColor: '#fff', margin: 20 }}>
                    <Image source={require('../Assets/ENGLISH.png')} style={{ height: 150, width: 150, marginTop: 20 }}

                    />
                </View>

                <View style={{ backgroundColor: '#fff', margin: 20 }}>
                    <Text style={{ fontSize: 20, marginLeft: 8 }}>{I18n.t('CHOOSE_YOUR_PREFFERED_LANGUAGE')} </Text>
                    <Text style={{ fontSize: 15, marginTop: 15, marginLeft: 8 }}>{I18n.t('KINDLY_SELECT_YOUR_LANGUAGE')}</Text>

                </View>

                <FlatList data={this.state.Data}
                    renderItem={this.renderItemList}
                    keyExtractor={(item) => item.id}

                />

                <View style={{}}>
                    <View style={styles.btn1}>
                        <TouchableOpacity style={styles.touchbtn1} onPress={() => this.changeLanguage()}>

                            <Text style={styles.Next}>{I18n.t('SAVE')}</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#fff',
        marginTop: 20

    },
    skip: { fontSize: 18 },
    listStyle: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        padding: 5,
        borderRadius: 18,

    },
    imgStyle: {
        width: 30,
        height: 30,
        borderRadius: 40,
    },
    btn1: {
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 40
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
    },

    touchbtn1: {
        backgroundColor: '#c71585',
        width: '90%',
        padding: 15,
        borderRadius: 8,
        width: '100%',

    },
    Next: { fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#fff' },
})

export default withTranslation()(PrefferedLanguage);