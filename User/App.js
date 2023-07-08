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


const App=()=>{

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName={routes.footer}
      screenOptions={{
        headerShown: false,
      }} 
    >
      <Stack.Screen name={routes.home} component={Home} />
      <Stack.Screen name={routes.singleDish} component={SingleDish} />
      <Stack.Screen name={routes.footer} component={Footer} />
      <Stack.Screen name={routes.paymentGateWay} component={PaymentGateway} />
      <Stack.Screen name={routes.orderpage} component={ProgresssiveBar} />
      <Stack.Screen name={routes.SplashScreen} component={SplashScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;
