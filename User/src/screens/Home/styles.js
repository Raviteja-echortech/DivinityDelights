import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  bestSellersCards: {
    width: Dimensions.get('window').width / 2 - 15,
    backgroundColor: 'white',
    marginTop: '1%',
    marginBottom: '1%',
    padding: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '2@s',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
    elevation: '5@s',
    borderRadius: '5@s',
  },
  orderMe: {
    width: '190@s',
    height: '180@s',
    marginTop: '20@s',
    paddingTop: '10@s',
    paddingBottom: '10@s',
    marginBottom: '30@s',
    marginLeft: '10@s',
    borderRadius: '3@s',
    backgroundColor: '#333333',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '2@s',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
    elevation: '5@s',
  },
  addBtn: {
    backgroundColor: '#FEBD69',
    padding: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '5%',
  },
  addBtnContent: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
  },
  descriptionContent: {
    fontFamily: 'Rashkey',
    color: 'rgb(51,51,51)',
  },
  bestSellers: {
    alignSelf: 'center',
    color: 'black',
    fontSize: '18@s',
    fontFamily: 'Roboto-Bold',
  },
  orderMeContent: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '3%',
    fontFamily: 'Roboto-Bold',
    color: '#000000',
    fontSize: '20@s',
  },
  fromSavoryBitesTxt: {
    fontFamily: 'Rashkey',
    color: 'black',
  },
  pizzaCard: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pizzaDescription: {
    fontSize: '9@s',
    color: 'rgba(51,51,51,0.6)',
    fontFamily: 'Roboto-Medium',
  },
  addOrderBtn: {
    backgroundColor: '#FEBD69', //#FEBD69
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    width: '60%',
    borderRadius: '5@s',
    marginTop: '5%',
  },
  addBtnOrderContent: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
  },
  bottomEndLine: {
    fontSize: '30@s',
    color: '#CFCFD3',
    fontFamily: 'Rashkey',
  },
  bottomCard: {
    marginBottom: '20%',
    marginLeft: '3%',
  },
  tagLineEnd: {
    color: '#AAAAAA',
    fontFamily: 'OpenSans-Bold',
    fontSize: '16@s',
  },
  photoArrange: {
    height: '70@s',
    width: '70@s',
  },
  desTxt:{
    justifyContent: 'center',
    fontFamily: 'Rashkey',
    color: '#FEBD69',
  }
});
