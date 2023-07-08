import React,{useEffect,useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../../routes/routes';
import ProfileActive from '../../assets/svg/ProfileActive';
import ProfileInActive from '../../assets/svg/ProfileInActive';
import Home from '../Home/Home';
import HomeIconActive from '../../assets/svg/HomeIconActive';
import HomeIconInActive from '../../assets/svg/HomeIconInActive';
import CartActive from '../../assets/svg/CartActive';
// import HeartIconActive from "../../assets/svg/HeartIconActive"
// import HeartIconInActive from "../../assets/svg/HeartIconInActive"
import CartInActive from '../../assets/svg/CartInActive';
import Profile from '../Profile/Profile';
import {View, KeyboardAvoidingView, Platform,Keyboard} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
// import WishList from '../WishList/WishList';
import CartPage from '../Cart/Cart';
const Tab = createBottomTabNavigator();
const Footer = () => {
  const [keyboardShow, setKeyboardShow] = useState()
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
            setKeyboardShow(true)
        }
    )
    const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            setKeyboardShow(false)
        }
    )
    return () => {
        keyboardDidHideListener.remove()
        keyboardDidShowListener.remove()
    }
}, [])
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
          tabBarHideOnKeyboard: true,
          tabBarStyle: { ...styles.tabStyle},
          display: keyboardShow ? 'none' : 'flex',
          headerShown: false,
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
          component={CartPage}
          options={{
            tabBarIcon: ({focused}) => {
              return <View>{focused ? <CartActive /> : <CartInActive />}</View>;
            },
          }}
        />
        
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};
export default Footer;
const styles=ScaledSheet.create({
  tabStyle:{
    position: 'absolute',
    bottom: scale(5),
    left: scale(20),
    right: scale(20),
    elevation: scale(10),
    borderRadius: 10,
    shadowColor: '	#c5c5c5',
  }

})