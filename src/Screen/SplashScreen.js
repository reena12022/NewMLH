import React from "react";

import { Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView, } from 'react-native'


class SplashScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('OnBoardingScreen')
        }, 4000)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.mainView}>
                    <View style={styles.subView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('OnBoardingScreen')}>
                            <Image source={require("../Assets/Splash.jpg")} style={styles.imageStyle} />
                        </TouchableOpacity>
                    </View>
                </View>


            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    mainView: {
        backgroundColor: 'white',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    subView: {
        alignItems: 'center'
    },

    imageStyle: {
        height: 200,
        width: 200
    },

})

export default SplashScreen