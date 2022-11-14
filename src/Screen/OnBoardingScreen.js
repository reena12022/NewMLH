import React from "react";

import { SafeAreaView, ScrollView, TouchableOpacity, Text, View, Image, StyleSheet, FlatList, Platform } from 'react-native'


import PaginationDot from 'react-native-animated-pagination-dot'
import SignUp from "./SignUp";

import { withTranslation } from "react-i18next";
import I18n from '../Language/I18n';

class OnBoardingScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            currentIndex: 0,

            myid: 1,
            startid: 1,
            showSlider: true,
            slides: [{

                key: 1,
                title: I18n.t('CONTINOUS_MEDICAL_EDUCATION:'),
                text: I18n.t('STRENGTHEN_YOUR'),
                subText: I18n.t('ACCESS_MEDICAL'),
                image: require('../Assets/Onboarding1.png'),
                sk: I18n.t('SKIP'),
                pk: " ",

            },
            {
                key: 2,
                title: I18n.t('CONTINOUS_MEDICAL_EDUCATION:'),
                text: I18n.t('STRENGTHEN_YOUR'),
                subText: I18n.t('ACCESS_MEDICAL'),
                image: require('../Assets/Onboarding2.png'),
                sk: I18n.t('SKIP'),
                pk: I18n.t('PREVIOUS')
            },
            {
                key: 3,
                title: I18n.t('CONTINOUS_MEDICAL_EDUCATION:'),
                text: I18n.t('STRENGTHEN_YOUR'),
                subText: I18n.t('ACCESS_MEDICAL'),
                image: require('../Assets/Onboarding3.png'),
                sk: null,
                pk: I18n.t('PREVIOUS')

            }],
        }
    }

    onpress = (event) => {

        // const positionX = event.nativeEvent.contentOffset.x;
        // const positionY = event.nativeEvent.contentOffset.y;

        //this.state.myid = this.state.myid+1

        console.log("myId>>>>", this.state.myid)
        this.setState({ myid: this.state.key })
    }

    renderItemList = ({ item }) => {


        // this.state.myid = item.key

        return (

            <View style={styles.slide}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: Platform.OS === 'android' ? 5 : 20 }}>
                    <TouchableOpacity >
                        <Text style={styles.previous}> {item.pk}  </Text>


                    </TouchableOpacity>

                    <TouchableOpacity style={styles.skip}>
                        <Text style={{ fontSize: 20, }}> {item.sk} </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: 350, height: 600 }}>

                    <Image style={styles.imageStyle} source={item.image} />



                    <View style={{ marginLeft: 30, marginRight: 30 }}>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                        <View style={{ width: 300 }}>
                            <Text style={styles.subText}>{item.subText}</Text>
                        </View>
                    </View>


                    <View style={{ marginLeft: 20 }}>
                        <PaginationDot
                            activeDotColor={"#c71585"}
                            inactiveDotColor={"red"}
                            curPage={item.key - 1}
                            maxPage={3}
                            sizeRatio={2.0}
                        />
                    </View>


                </View>



            </View>

        )
    }

    // onViewableItemsChanged = ({ viewableItems, changed }) => {
    //     this.setState({ screen: viewableItems[0].key })
    // };

    // viewabilityConfig = {

    //     itemVisiblePercentThreshold: 50
    // };

    // getBackgroundColor = () => {
    //     console.log(this.state.myid)
    //     let color;

    //     if (this.state.myid == this.state.startid) {
    //         color = '#c71585';


    //     } else if (this.state.myid < this.state.startid) {

    //         color = 'pink';
    //     } else {

    //         color = '#e6e6fa';
    //     }
    //     return color;
    // }




    // renderList1 = ({ item }) => {
    //     this.state.myid = item.key

    //     console.log("this.state.data>>", this.state.myid)

    //     return (

    //         <View style={styles.row}>
    //             <View style={{
    //                 marginTop: 20,
    //                 width: 14,
    //                 height: 14,
    //                 //  backgroundColor: '#c71585',
    //                 borderRadius: 50,
    //                 marginHorizontal: 5,
    //                 borderWidth: 1,
    //                 borderColor: '#c71585', backgroundColor: this.getBackgroundColor()
    //             }} />
    //         </View>

    //     )
    // }



    render() {
        return (
            <View style={styles.container}>


                <ScrollView>



                    {
                        this.state.showSlider ?

                            <FlatList
                                data={this.state.slides}
                                renderItem={this.renderItemList}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}

                                keyExtractor={item => item.key}
                            // onScroll={ ([{ nativeEvent: { contentOffset: { x: 
                            //     scrollX } } }], {listener: (event) => this.onpress(event)})}
                            //     scrollEventThrottle={16}

                            />




                            // <AppIntroSlider
                            //     data={this.state.slides}
                            //     renderItem={this.renderItemList}
                            //     showSkipButton={true}
                            //     showPrevButton={true}
                            //     onDone={() => this.setState({ showSlider: false })}
                            //     onSkip={() => this.setState({ showSlider: false })}
                            //     dotClickEnabled={true}
                            //     activeDotStyle={{ backgroundColor: 'rgba(255, 0, 255, .9)' }}
                            //     dotStyle={{ right: 2 }}

                            // /> 
                            : <View> <Text>I am a Home Component</Text></View>

                    }


                    {/* <FlatList
                        horizontal={true}
                        //  renderItem={({item,index})=>(
                        //     console.log("item>>",item),
                        //     <Text>{item.name}</Text>
                        //  )}
                        data={this.state.slides}
                        renderItem={this.renderList1}
                        keyExtractor={item => item.key}
                    onScroll ={this.onpress()} 
                    /> */}




                    <View style={{ marginTop: 10, }}>
                        <View style={styles.btn1}>
                            <TouchableOpacity style={styles.touchbtn1} onPress={() => this.props.navigation.navigate('SignUp')}>

                                <Text style={styles.signUpText}>{I18n.t('SIGN_UP')}</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={styles.btn2} >


                            <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginPg')} style={styles.touchbtn2}>
                                <Text style={styles.loginText}>{I18n.t('LOGIN')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        //   backgroundColor: 'lightblue'
    },
    imageStyle: {
        width: '100%',
        height: '60%',
        borderRadius: 10,
        marginLeft: 10,


    },
    slide: {
        width: 410,
        height: Platform.OS === 'android' ? 600 : 650,

        // backgroundColor: "red",
        // marginBottom: 30
    },
    skip: { marginTop: Platform.OS === 'ios' ? 40 : 0 },
    previous: { fontSize: 20, marginTop: Platform.OS === 'ios' ? 40 : 0 },
    row: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 10,

        //bottom: 8,
        // justifyContent: 'center',

    },
    dot: {
        width: 12,
        height: 12,
        backgroundColor: '#c71585',
        borderRadius: 50,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#c71585',

    },

    title: { fontSize: 20, fontWeight: '800' },
    text: { fontSize: 20, fontWeight: '800' },

    subText: { fontSize: 15 },

    imageText: {
        color: 'black',
        fontSize: 5,
        textAlign: 'center',
        marginTop: 20
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
    btn2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
        //marginTop:10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
    },
    touchbtn2: {
        // backgroundColor: '#fff',
        width: '90%',
        padding: 15,
        borderRadius: 8,
        width: '100%',

    },
    signUpText: { fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#fff' },
    loginText: { fontWeight: 'bold', marginLeft: 5, fontSize: 18, textAlign: 'center' },
})
export default withTranslation()(OnBoardingScreen);
