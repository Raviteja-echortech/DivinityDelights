
import React,{useState} from "react"
import {View,Text,ScrollView} from "react-native"
import { styles } from "./styles"
import { scale } from "react-native-size-matters"
import { SearchBox } from "../../Utils/Utils"
import { globalStyles } from "../../globalStyles/globalStyles"

const Home =()=>{
  const [name,setname]=useState("")
    return(
       <View style={globalStyles.container} >
        <SearchBox valuesGiven={name} changeText={(text)=>setname(text)} />
    <ScrollView style={styles.bodyContent} >

    </ScrollView>
       </View>
    )
}
export default Home