import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  cartContainer: {
     marginBottom: '20%',
    marginTop: '20@s',
    width: '95%',
    alignSelf: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cartImg: {
    width: '80@s',
    height: '90@s',
  },
  txtContainer: {
    justifyContent: 'center',
    width: '60%',
  },
  imgContainer: {
    width: '25%',
  },
  deleteIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    width: '13%',
    marginLeft: '10@s',
  },
  placeOrderBtn: {
    backgroundColor: '#FEBD69',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: '40@s',
    width: '100@s',
    borderRadius: '5@s',
  },
  placeOrderTxt: {
    color: 'black',
    fontFamily: 'Roboto-Medium',
  },
  descTxt:{
   color:"black" ,
   fontFamily:"OpenSans-SemiBold"
  },
  costTxt:{
    color:"#FEBD69",
    fontFamily:"Roboto-Bold",
    fontSize:"15@s"
  }

});
