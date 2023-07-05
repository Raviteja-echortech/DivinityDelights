import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../../routes/routes';
import ProfileActive from '../../assets/svg/ProfileActive';
import ProfileInActive from '../../assets/svg/ProfileInActive';
import Home from '../Home/Home';
import HomeIconActive from '../../assets/svg/HomeIconActive';
import HomeIconInActive from '../../assets/svg/HomeIconInActive';
import CartActive from '../../assets/svg/CartActive';
import HeartIconActive from "../../assets/svg/HeartIconActive"
import HeartIconInActive from "../../assets/svg/HeartIconInActive"
import CartInActive from '../../assets/svg/CartInActive';
import Profile from '../Profile/Profile';
import Cart from '../cart/Cart';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {scale} from 'react-native-size-matters';
import WishList from '../WishList/WishList';
const Tab = createBottomTabNavigator();
const Footer = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} 
    >
      <Tab.Navigator
        initialRouteName={routes.home}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard:true,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: scale(5),
            left: scale(20),
            right: scale(20),
            elevation: scale(10),
            borderRadius: 10,
            shadowColor: '	#c5c5c5',
          },
        }}>
        <Tab.Screen
          name={routes.home}
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  {focused ? <HomeIconActive /> : <HomeIconInActive />}
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={routes.profile}
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View>{focused ? <ProfileActive /> : <ProfileInActive />}</View>
              );
            },
          }}
        />
        <Tab.Screen
          name={routes.cart}
          component={Cart}
          options={{
            tabBarIcon: ({focused}) => {
              return <View>{focused ? <CartActive /> : <CartInActive />}</View>;
            },
          }}
        />
        <Tab.Screen name={routes.wishList} component={WishList} options={{
          tabBarIcon:({focused})=>{
            return(
              <View>
                {focused?<HeartIconActive/>:<HeartIconInActive/>}
              </View>
            )
          }
        }} />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};
export default Footer;
