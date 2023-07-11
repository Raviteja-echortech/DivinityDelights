import React from 'react';
import {TouchableOpacity, Text, Dimensions, View, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Footer from '../Footer/Footer';
import {routes} from '../../routes/routes';
import {scale} from 'react-native-size-matters';

const DrawerMenu = props => {
  return (
    <DrawerContentScrollView
      {...props}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        height: Dimensions.get('window').height,
        justifyContent: 'space-between',
      }}></DrawerContentScrollView>
  );
};
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={routes.home}
      screenOptions={{
        headerMode: 'float',
        headerShown: false,
        overlayColor: 'transparent',
        swipeEnabled: false,
      }}
      drawerContent={props => {
        return <DrawerMenu {...props} />;
      }}>
      <Drawer.Screen name="bottomtabbar">{props => <Footer />}</Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
