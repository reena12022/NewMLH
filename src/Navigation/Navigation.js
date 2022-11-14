import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon, { Icons } from '../Screen/icon';

import Colors from '../Screen/colors';
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
import Home from '../Screen/Home';
// import Database from '../Screen/News';
// import Document from '../Screen/Book';
import Profile from '../Screen/Profile';
import Category from '../Screen/Category';
import React, { useEffect, useRef } from 'react'
import { Button, StyleSheet, View, Text, Dimensions, SafeAreaView, Image, TouchableOpacity, Animated } from 'react-native';
import home from '../Assets/home.png'
import home2 from '../Assets/home2.png'
import category2 from '../Assets/category2.png'
import category from '../Assets/category.png'
import book from '../Assets/book.png'
import book1 from '../Assets/book1.png'
import news from '../Assets/news.png'
import news2 from '../Assets/news2.png'
import Account from '../Assets/account.png'
import Accountactive from '../Assets/accountactive.png'
import EmailVerification1 from '../Screen/EmailVerification1';
import EmailVerificationOTP from '../Screen/EmailVerificationOTP';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PrefferedLanguage from '../Screen/PrefferedLanguage';
import SignUpCode from '../Screen/SignUpCode';
import FeaturedCourses from '../Screen/FeaturedCourses';
import Course from '../Screen/Course'
import News from '../Screen/News'

const Tab = createMaterialTopTabNavigator();

import * as Animatable from 'react-native-animatable';
const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();
const TabArr = [
  { name: 'Home', label: 'Home', type: Icons.MaterialCommunityIcons, activeIcon: home2, inActiveIcon: home, activeIcon1: 'minus', inActiveIcon2: 'minus', component: Home },
  { name: 'Category', label: 'Category', type: Icons.MaterialCommunityIcons, activeIcon: category, inActiveIcon: category2, activeIcon1: 'minus', inActiveIcon2: 'minus', component: Category },

  { name: 'Course', label: 'Course', type: Icons.MaterialCommunityIcons, activeIcon: book1, inActiveIcon: book, activeIcon1: 'minus', inActiveIcon2: 'minus', component: Course },
  { name: 'Document', label: 'News', type: Icons.MaterialCommunityIcons, activeIcon: news2, inActiveIcon: news, activeIcon1: 'minus', inActiveIcon2: 'minus', component: News },

  { name: 'Profile', label: 'Account', type: Icons.MaterialCommunityIcons, activeIcon: Accountactive, inActiveIcon: Account, activeIcon1: 'minus', inActiveIcon2: 'minus', component: Profile },
];
const TabArr1 = [
  { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIconn: 'grid', inActiveIconn: 'grid-outline', component: Home },
  { route: 'Like', label: 'Like', type: Icons.MaterialCommunityIcons, activeIconn: 'heart-plus', inActiveIconn: 'heart-plus-outline', component: Category },

];
const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: .5 }, 1: { scale: 1.5 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1.5 }, 1: { scale: 1 } });
    }
  }, [focused])

  return (

    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}

        style={styles.container}>


        <Icon type={item.type} name={focused ? item.activeIcon1 : item.inActiveIcon2} color={focused ? '#dc143c' : Colors.white} size={35} />


        {
          focused ?
            <Image source={item.activeIcon} style={{ width: 30, height: 30 }} /> : <Image source={item.inActiveIcon} style={{ width: 25, height: 26 }} />
        }


        {
          focused ?
            <Text style={{
              fontWeight: '600',
              fontSize: 10, color: focused ? '#dc143c' : Colors.black
            }}>{item.label}</Text> : null}



      </Animatable.View>
    </TouchableOpacity>

  )
}
function Tab5() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        swipeEnabled: false,
        tabBarShowLabel: true,
        tabBarIndicatorStyle: {

          top: 0,
          height: 4,
          width: 40,
          marginLeft: 20,
          backgroundColor: '#dc143c',
        },

        tabBarStyle: { height: 80, width: '100%' },
        // tabBarScrollEnabled: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.primaryLite,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.name} component={item.component}
            options={{
              tabBarLabel: ({ focused }) => {
                return <Text style={{ width: '100%', fontSize: 9, fontWeight: '600', marginLeft: 10, marginTop: 5, color: focused ? '#dc143c' : 'white' }}>{focused ? item.label : "myapp"}</Text>
              },
              tabBarIcon: ({ color, size, focused }) => (
                focused ?
                  <Image source={item.activeIcon} style={{ width: 30, height: 30 }} /> : <Image source={item.inActiveIcon} style={{ width: 25, height: 28 }} />
              ),
            }}
          />
        )
      })}
    </Tab.Navigator>
  );
}


const TabButton1 = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: .5, rotate: '0deg' }, 1: { scale: 1.5, rotate: '360deg' } });
    } else {
      viewRef.current.animate({ 0: { scale: 1.5, rotate: '360deg' }, 1: { scale: 1, rotate: '0deg' } });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}
      >

        <View style={{ height: 60, width: 60, backgroundColor: 'red', }}>
          <Maticon name="notifications" color="black" size={30} />

        </View>


      </Animatable.View>
    </TouchableOpacity>

  )
}



const Bootomroot = () => {
  // const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (

    <BottomTab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 120,
      }
    }}


    >
      {TabArr.map((item, index) => {
        return (
          <BottomTab.Screen key={index} name={item.name} component={item.component}
            options={{
              tabBarLabel: 'Updates',
              tabBarShowLabel: true,

              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}

    </BottomTab.Navigator>
  );

}


class StackNavigation extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bootomroot" >
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="LoginPg" component={LoginPg} options={{ headerShown: false }} />
          <Stack.Screen name="Bootomroot" component={Tab5} options={{ headerShown: false }} />

          <Stack.Screen name="EmailVerification1" component={EmailVerification1} options={{ headerShown: false }} />
          <Stack.Screen name="EmailVerificationOTP" component={EmailVerificationOTP} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotScreen1" component={ForgotScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Forgotscreen2" component={Forgotscreen2} options={{ headerShown: false }} />
          <Stack.Screen name="Setpassword" component={Setpassword} options={{ headerShown: false }} />
          <Stack.Screen name="Updatepsw" component={Updatepsw} options={{ headerShown: false }} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
            headerShown: false,

          }} />
          <Stack.Screen name="SignUpCode" component={SignUpCode} options={{
            headerShown: false,

          }} />


          <Stack.Screen name="PrefferedLanguage" component={PrefferedLanguage} options={{
            headerShown: false,

          }} />
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{
            headerShown: false,

          }} />
          <Stack.Screen name="FeaturedCourses" component={FeaturedCourses} options={{
            headerShown: false,

          }} />



        </Stack.Navigator>



      </NavigationContainer>
    )
  }
}

export default StackNavigation;

const styles = StyleSheet.create({
  container: {



    flex: 1,

    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',




  }
})