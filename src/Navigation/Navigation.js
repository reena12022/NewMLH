import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotScreen from '../Screen/Forgotscrren1';
import Forgotscreen2 from "../Screen/Forgotscreen2";
import Setpassword from "../Screen/Setpassword";
import Updatepsw from "../Screen/Updatepassword";
import SplashScreen from "../Screen/SplashScreen";
import OnBoardingScreen from "../Screen/OnBoardingScreen";
import SignUp from "../Screen/SignUp";
import LoginPg from "../Screen/LoginPg";
const Stack = createNativeStackNavigator();
class StackNavigation extends React.Component{

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SplashScreen" >
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
                <Stack.Screen name="LoginPg" component={LoginPg} options={{headerShown:false}} />

                <Stack.Screen name="ForgotScreen1" component={ForgotScreen} options={{headerShown:false}} />
                <Stack.Screen name="Forgotscreen2" component={Forgotscreen2} options={{headerShown:false}} />
                <Stack.Screen name="Setpassword" component={Setpassword} options={{headerShown:false}} />
                <Stack.Screen name="Updatepsw" component={Updatepsw} options={{headerShown:false}} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
            headerShown: false,

          }} />
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{
            headerShown: false,

          }} />


                
             </Stack.Navigator>



            </NavigationContainer>
        )
    }
}

export default StackNavigation;