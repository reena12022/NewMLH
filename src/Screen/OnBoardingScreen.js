
import React from "react";

import { SafeAreaView, ScrollView, TouchableOpacity, Text, View, Image, StyleSheet, FlatList } from 'react-native'

import AppIntroSlider from 'react-native-app-intro-slider';

class OnBoardingScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            skip: true,
            screen: 0,
            showSlider: true,
            slides: [{
                key: 1,
                title: 'Continuous Medical Education:',
                text: 'strengthen your practice online',
                subText: 'Access medical courses online , find webinars of train on-site. Learn from global or local healthcare experts',
                image: require('../Assets/Splash.jpg'),

            },
            {
                key: 2,
                title: 'Continuous Medical Education:',
                text: 'strengthen your practice online',
                subText: 'Access medical courses online , find webinars of train on-site. Learn from global or local healthcare experts',
                image: require('../Assets/Group1.png'),
            },
            {
                key: 3,
                title: 'Continuous Medical Education:',
                text: 'strengthen your practice online',
                subText: 'Access medical courses online , find webinars of train on-site. Learn from global or local healthcare experts',
                image: require('../Assets/Group2.png'),

            }],
        }
    }


    renderItemList = ({ item }) => {
        return (
            <View style={styles.slide}>

                <View style={{ alignItems: 'center', }}>
                    <Image style={styles.imageStyle} source={item.image} />
                    <View style={{ margin: 20 }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.text}</Text>
                        <Text style={styles.subText}>{item.subText}</Text>
                    </View>

                </View>



            </View>

        )
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        this.setState({ screen: viewableItems[0].key })
    };

    viewabilityConfig = {

        itemVisiblePercentThreshold: 50
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>


                <ScrollView>

                    {

                        <View>
                            <TouchableOpacity>
                                <Text style={{ textAlign: 'right', fontSize: 20, }}> Skip</Text>
                            </TouchableOpacity>
                        </View>
                    }

                    {
                        this.state.showSlider ?

                            <FlatList
                                data={this.state.slides}
                                renderItem={this.renderItemList}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}
                                onViewableItemsChanged={this.onViewableItemsChanged}
                                viewabilityConfig={this.viewabilityConfig}
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

                    <View style={styles.row}>
                        <View style={[styles.dot, backgroundColor.key === 1 ? '#c71585' : '#ffff']} />
                        <View style={[styles.dot, backgroundColor.key === 2 ? '#c71585' : '#ffff']} />
                        <View style={[styles.dot, backgroundColor.key === 3 ? '#c71585' : '#ffff']} />

                    </View>

                    <View style={{ marginTop: 80, }}>
                        <View style={styles.btn1}>
                            <TouchableOpacity style={styles.touchbtn1} >

                                <Text style={styles.signUpText}>Sign Up</Text>
                            </TouchableOpacity>

                        </View>


                        <View style={styles.btn2} >


                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RegistrationPage')} style={styles.touchbtn2}>
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#fff',
        backgroundColor: 'lightblue'
    },
    imageStyle: {
        width: '90%',
        height: '60%',
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    slide: {
        height: 500,

        // backgroundColor: "red",
        // marginBottom: 30
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 20,

        bottom: 8,
        justifyContent: 'center',

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
export default OnBoardingScreen;



// import React from 'react';
// import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';
// import AppIntroSlider from 'react-native-app-intro-slider';

// const data = [
//   {
//     title: 'Title 1',
//     text: 'Description.\nSay something cool',
//     image: require('../Assets/Splash.jpg'),
//     bg: '#59b2ab',
//   },
//   {
//     title: 'Title 2',
//     text: 'Other cool stuff',
//     image: require('../Assets/Splash.jpg'),
//     bg: '#febe29',
//   },
//   {
//     title: 'Rocket guy',
//     text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
//     image: require('../Assets/Splash.jpg'),
//     bg: '#22bcb5',
//   },
// ];

// type Item = typeof data[0];

// const styles = StyleSheet.create({
//   slide: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 320,
//     height: 320,
//     marginVertical: 32,
//   },
//   text: {
//     color: 'rgba(255, 255, 255, 0.8)',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: 22,
//     color: 'white',
//     textAlign: 'center',
//   },
//   buttonCircle: {
//     top:0,
//     position:'absolute',
//     width: 44,
//     height: 44,
//     backgroundColor: 'rgba(0, 0, 0, .2)',
//     borderRadius: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default class OnBoardingScreen extends React.Component {
//   _renderItem = ({item}: {item: Item}) => {
//     return (
//       <View
//         style={[
//           styles.slide,
//           {
//             backgroundColor: item.bg,
//           },
//         ]}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Image source={item.image} style={styles.image} />
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   };

//   _keyExtractor = (item: Item) => item.title;

//   _renderNextButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         {/* <Icon
//           name="md-arrow-round-forward"
//           color="rgba(255, 255, 255, .9)"
//           size={24}
//         /> */}<Text>PORS</Text>
//       </View>
//     );
//   };

//   _renderDoneButton = () => {
//     return (
//       <View style={styles.buttonCircle}>
//         {/* <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} /> */}
//         <Text>ABCD</Text>
//       </View>
//     );
//   };

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <StatusBar translucent backgroundColor="transparent" />
//         <AppIntroSlider
//           keyExtractor={this._keyExtractor}
//           renderDoneButton={this._renderDoneButton}
//           renderNextButton={this._renderNextButton}
//           renderItem={this._renderItem}
//           data={data}
//         />
//       </View>
//     );
//   }
// }