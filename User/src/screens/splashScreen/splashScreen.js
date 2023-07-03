import React from "react"
import Logo from "../../assets/svg/Logo.svg"
import {View,Text} from "react-native"
import { globalStyles } from "../../globalStyles/globalStyles"
import { ScaledSheet } from 'react-native-size-matters';
const SplashScreen=()=>{
  return(
    <View style={[globalStyles.container,styles.parentScreen]}>
        <View style={styles.logoBackGroundColour} >
        <Logo/>
        </View>
        <Text style={styles.titleName}>Divinity</Text>
        <Text style={styles.titleName}>Delights</Text>
    </View>
  )
}
export default SplashScreen
const styles=ScaledSheet.create({
    parentScreen:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FEBD69"
    },
    logoBackGroundColour:{ 
    alignItems:"center",
   },
   titleName:{
    fontFamily:"Roboto-Bold",
    color:"white",
    fontSize:"18@s"
   }

})