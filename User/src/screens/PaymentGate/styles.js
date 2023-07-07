import { ScaledSheet } from "react-native-size-matters";

export const styles=ScaledSheet.create({
    outCircle:{
        height:"20@s",
        width:"20@s",
        borderRadius:"10@s",
        borderWidth:1,
        borderColor:"red",
        justifyContent:"center",
        alignItems:"center",
    },
    innerCircle:{
        height:"70%",
        width:"70%",
        borderRadius:"20@s",
        borderWidth:1,
        borderColor:"green",
        backgroundColor:"green"

    }
})