import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  firstName: {
    fontFamily: 'Roboto-Bold',
    fontSize: '18@s',
    color: 'black',
  },
  detailsBox: {
    width: '95%',
    alignSelf: 'center',
    marginTop: '10@s',
    justifyContent: 'center',
  },
  inputBoxArrange: {
    width: '70%',
    backgroundColor: '#F6F6F6',
    paddingLeft: '20@s',
    paddingRight: '20@s',
    marginBottom: '20@s',
    borderRadius: '2@s',
  },
  adderssTxt: {
    color: 'black',
    fontFamily: 'Rashkey',
    fontSize: '18@s',
    marginBottom: '10@s',
  },
  editBox: {
    flexDirection: 'row',
    marginTop: "15@s",
    borderTopWidth: "0.2@s",
    borderColor: '#999999',
    width: '100%',
  },
  nameTxt: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: '16@s',
  },
  billingTxt: {
    fontFamily: 'OpenSans-Regular',
    color: 'black',
    fontSize: '12@s',
  },
  editOption: {
    borderColor: '#999999',
    fontSize: '17@s',
    color: '#20BD99',
  },
  editBtn1: {
    marginRight: '5@s',
    width: '50@s',
    justifyContent: 'center',
    borderRightWidth: "0.2@s",
    alignItems: 'center',
    borderColor: '#000000',
  },
  editBtn2: {
    marginRight: '5@s',
    padding: '5@s',
  },
  addressStyles:{
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#333333',
    padding: 10,
    borderRadius: 10,
  }
});
