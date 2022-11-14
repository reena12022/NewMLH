import React from "react";
import { View, Text, Alert, Image, ScrollView, TextInput, Button, TouchableOpacity, ImageBackground, StyleSheet, StatusBar, KeyboardAvoidingView, SafeAreaView } from 'react-native'

const title = "You are here";

export default class Buttoncom extends React.Component {
    render() {
        return (
            <TouchableOpacity style={this.props.style}
                onPress={this.props.onClick}>
                <Text style={this.props.TextStyle}>
                    {this.props.btnText}

                </Text>

            </TouchableOpacity>
        )
    }

}