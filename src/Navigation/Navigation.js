import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotScreen from '../Scrren/Forgotscrren1'
import ForgotScreen2 from "../Scrren/Forgotscreen2";
import Setpassword from "../Scrren/Setpassword";
import Updatepsw from "../Scrren/Updatepassword";
const Stack = createNativeStackNavigator();
class StackNavigation extends React.Component{

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator >

                <Stack.Screen name="ForgotScreen1" component={ForgotScreen} options={{headerShown:false}} />
                <Stack.Screen name="ForgotScreen2" component={ForgotScreen2} options={{headerShown:false}} />
                <Stack.Screen name="Setpassword" component={Setpassword} options={{headerShown:false}} />
                <Stack.Screen name="Updatepsw" component={Updatepsw} options={{headerShown:false}} />


                
             </Stack.Navigator>



            </NavigationContainer>
        )
    }
}

export default StackNavigation;