import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  singleProductBox: {
    height: '90%',
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  photoArrangeMent: {
    width: '300@s',
    height: '300@s',
    marginTop: '10%',
  },
  cartBtn: {
    width: '40%',
    backgroundColor: '#FEBD69',
    padding: '4%',
    borderRadius:"5@s",
    marginTop: '5%',
    justifyContent:"center",
    alignItems:"center",
    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '2@s',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
    elevation: '5@s',
  },
  orderNowBtn:{
    width: '40%',
    backgroundColor: '#FF9000',
    borderRadius:"5@s",
    padding: '4%',
    marginTop: '6%',
    justifyContent:"center",
    alignItems:"center",
    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '2@s',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
    elevation: '5@s',
  },
  cartbtnTxt:{
    color:"black"
  },
  descriptionTxt:{
    fontFamily:"Roboto-Bold",fontSize:"25@s",color:"black"
  }
});
