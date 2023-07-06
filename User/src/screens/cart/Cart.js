import React from "react"
import {View,Text} from "react-native"
import { HeaderComponent } from "../../Utils/Utils"
const Cart=(props)=>{
    return(
        <View style={{backgroundColor:"white"}} >
            <HeaderComponent title={"Cart"} props={props} />
           <View>

           </View>
        </View>
    )
}
export default  Cart 