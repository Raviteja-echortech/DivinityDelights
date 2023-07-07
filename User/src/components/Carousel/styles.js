import { ScaledSheet } from "react-native-size-matters"
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const styles = ScaledSheet.create({
    image: {
        width: '95%',
        height: '100%',
        borderRadius: '8@s',
        overflow: 'hidden',
        alignSelf:"center",
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30@s'
    },
   
})

export default styles