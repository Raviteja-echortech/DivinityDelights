import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  firstName: {
    fontFamily: 'Roboto-Bold',
    fontSize: '18@s',
    color: 'black',
  },
  detailsBox: {
    width: '90%',
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
    color: '#20BD99',
    marginRight: '5@s',
    fontSize: '18@s',
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
    color: '#20BD99',
    fontSize: '17@s',
  },
  editBtn: {
    marginRight: "5@s",
    padding: "10@s",
  },
});
