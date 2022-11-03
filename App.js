import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SignUp from './src/screen/SignUp';
import LoginPg from './src/screen/LoginPg';
export default class App extends React.Component {
    render() {
        return (
            <View>
                {/* <SignUp /> */}
                <LoginPg/>
                </View>
           
        )
    }
} 