import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { routes } from "./src/routes/routes";
import Home from "./src/screens/Home/Home" ;
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleDish from "./src/screens/singleDish/SingleDish";
import SplashScreen from "./src/screens/splashScreen/splashScreen";
import Footer from "./src/screens/Footer/Footer";
import PaymentGateway from "./src/screens/PaymentGate/PaymentGate";
import { ProgresssiveBar } from './src/Utils/Utils';
import DrawerNavigation from "./src/screens/DrawerMenu.js/DrawerMenu";


const App=()=>{
const Stack = createNativeStackNavigator();

  const config = { animation: 'slide_from_right' }
  return(
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName={routes.SplashScreen}
      screenOptions={{
        headerShown: false,
      }} 
    >
      <Stack.Screen name={routes.home} component={Home} options={config} />
      <Stack.Screen name={routes.singleDish} component={SingleDish} options={config} />
      <Stack.Screen name={routes.footer} component={DrawerNavigation} options={config}/>
      <Stack.Screen name={routes.paymentGateWay} component={PaymentGateway} options={config} />
      <Stack.Screen name={routes.orderpage} component={ProgresssiveBar} options={config} />
      <Stack.Screen name={routes.SplashScreen} component={SplashScreen} options={config} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;
