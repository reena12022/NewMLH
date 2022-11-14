import { FadeFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React from 'react';

import { TextInput, View, ScrollView, Image, StyleSheet, Platform, FlatList, Text, KeyboardAvoidingView, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CusomHeader from '../Custom/CustomHeader'
import Feather from 'react-native-vector-icons/Feather'

import SelectMultiple from 'react-native-select-multiple'
import { Title } from 'react-native-paper';
//import { MultipleSelectList } from 'react-native-dropdown-select-list'


export default class Category extends React.Component {
    constructor() {
        super()
        this.state = {

            Data: [
                {
                    id: 1,
                    imgUrl: require('../Assets/Rectangle.png'),
                    Name: "Featured Courses",
                    subTitle: "Paid & free courses"

                },
                {
                    id: 2,
                    imgUrl: require('../Assets/Rectangle(1).png'),
                    Name: "Free Courses",

                    subTitle: "Free courses only"
                },
                {
                    id: 3,
                    imgUrl: require('../Assets/Rectangle(2).png'),
                    Name: "Paid Courses",

                    subTitle: "Paid courses only"
                },
                {
                    id: 4,
                    imgUrl: require('../Assets/Rectangle(3).png'),
                    Name: "This Week",

                    subTitle: "Weekly new courses"
                },
                {
                    id: 5,
                    imgUrl: require('../Assets/Rectangle(4).png'),
                    Name: "Free Courses",

                    subTitle: "Free courses only"
                },
                {
                    id: 6,
                    imgUrl: require('../Assets/Rectangle(5).png'),
                    Name: "Free Courses",

                    subTitle: "Free courses only"
                },


            ],
            fruits: ['Apples', 'Oranges', 'Pears'],

            dropdownData: [
                "All Courses",
                "Courses By Speciality",
                "Courses By Organization",
                "Highest Rated Courses",
                "Private Courses",
                "Trending Courses",
            ],
            selected: [],

        }
    }


    renderItemList = ({ item }) => {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1, margin: 20, }}>

                <View style={{ backgroundColor: item.isSelected ? 'lightgrey' : 'white', borderRadius: 10, padding: 5 }}>


                    <View style={styles.listStyle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                            <View style={{ marginLeft: 10, backgroundColor: '#fff', width: 190, elevation: 20 }}>
                                <Image source={item.imgUrl} style={styles.imgStyle} />
                                <Text style={{ fontWeight: 'bold', textAlign: 'left' }}>{item.Name}</Text>
                                <Text style={{ fontWeight: '400', textAlign: 'left' }} >{item.subTitle}</Text>
                                <TouchableOpacity style={{ backgroundColor: '#dc143c', borderRadius: 10, padding: 8, marginTop: 5, width: "95%", alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('FeaturedCourses')}>
                                    <Text style={{ textAlign: 'center', fontSize: 15, color: "#fff" }}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>
                </View>

            </View>

        );
    };

    onSelectionsChange = (selected) => {
        // selectedFruits is array of { label, value }
        this.setState({ selected })
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', }}>
                <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
                <ScrollView>


                    <View >
                        <CusomHeader heading={"Categories"} iconName="more-horiz" size={25} />





                        <View
                            style={{
                                flexDirection: 'row',
                                backgroundColor: 'lightgrey',
                                top: 20,
                                borderRadius: 8,
                                paddingHorizontal: 10, width: '90%',
                                alignContent: 'center',
                                marginLeft: 20,
                                paddingVertical: Platform.OS === 'ios' ? 10 : null
                            }}>
                            <Feather name="search" size={20} style={{ marginRight: 5, marginTop: Platform.OS === 'android' ? 15 : null }} />
                            <TextInput placeholder="Search" style={{ width: '90%' }} />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 30 }}>
                            <Text style={{ marginLeft: 15, fontWeight: 'bold', marginTop: 15, fontSize: 15 }}> All Courses </Text>

                            <View style={{ flexDirection: 'row', left: Platform.OS === 'android' ? 210 : 195 }}>

                                <TouchableOpacity style={{ flexDirection: 'row', }}>
                                    <Image source={require('../Assets/Group5.png')} style={{ height: 30, width: 30, alignSelf: 'flex-end' }} />
                                    <Text style={{ fontWeight: 'bold', alignSelf: 'flex-end' }}>Filter</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* <View>
                            <SelectMultiple
                                items={this.state.dropdownData}
                                selectedItems={this.state.dropdownData}

                                onSelectionsChange={() => this.onSelectionsChange()}
                                rowStyle
                                />
                        </View> */}


                        <FlatList data={this.state.Data}
                            renderItem={this.renderItemList}
                            numColumns={2}

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
