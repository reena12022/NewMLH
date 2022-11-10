import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../Screen/SplashScreen';
import OnBoardingScreen from '../Screen/OnBoardingScreen';
import PrefferedLanguage from '../Screen/PrefferedLanguage'


const Stack = createNativeStackNavigator();


class StackNavigation extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='PrefferedLanguage'>

          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
            headerShown: false,

          }} />
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{
            headerShown: false,

          }} />
            <Stack.Screen name="PrefferedLanguage" component={PrefferedLanguage} options={{
            headerShown: false,

          }} />







        </Stack.Navigator>
      </NavigationContainer>

    )
  }

}

export default StackNavigation;