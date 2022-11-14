import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React from 'react';

import { TextInput, View, ScrollView, Image, StyleSheet, Platform, FlatList, Text, KeyboardAvoidingView, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CusomHeader from '../Custom/CustomHeader'
import Feather from 'react-native-vector-icons/Feather'




export default class FeaturedCourses extends React.Component {
    constructor() {
        super()
        this.state = {


        }
    }





    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
                <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
                <ScrollView>
                    <View >
                        <CusomHeader heading={"FeaturedCourses"} iconName="more-horiz" size={25} backIcon="left" />
                        <View
                            style={{
                                flexDirection: 'row',
                                backgroundColor: 'lightgrey',
                                top: 20,
                                borderRadius: 8,
                                paddingHorizontal: 10, width: '70%', height: 70,
                                alignContent: 'center',
                                marginLeft: 20,
                                paddingVertical: Platform.OS === 'ios' ? 10 : null
                            }}>
                            <Feather
                                name="search"
                                size={20}

                                style={{
                                    marginRight: 5,
                                    marginTop: Platform.OS === 'android' ? 15 : null
                                }}
                            />
                            <TextInput placeholder="Search" style={{ width: '70%' }} />
                        </View>

                        <FlatList data={this.state.Data}
                            renderItem={this.renderItemList}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>


        )
    }
}

const styles = StyleSheet.create({
    container1: {

    },
    listStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 5,
        borderRadius: 18,

    },
    imgStyle: {
        width: 190,
        height: 100,
        borderRadius: 8,
    },
});
