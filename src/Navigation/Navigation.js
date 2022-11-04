import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotScreen from '../screen/Forgotscrren1'
import ForgotScreen2 from "../screen/Forgotscreen2";
import Setpassword from "../screen/Setpassword";
import Updatepsw from "../screen/Updatepassword";
import SplashScreen from "../screen/SplashScreen";
import OnBoardingScreen from "../screen/OnBoardingScreen";
import SignUp from "../screen/SignUp";
import LoginPg from "../screen/LoginPg";
const Stack = createNativeStackNavigator();
class StackNavigation extends React.Component{

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SplashScreen" >
                <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}} />
                <Stack.Screen name="Login" component={LoginPg} options={{headerShown:false}} />

                <Stack.Screen name="ForgotScreen1" component={ForgotScreen} options={{headerShown:false}} />
                <Stack.Screen name="ForgotScreen2" component={ForgotScreen2} options={{headerShown:false}} />
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