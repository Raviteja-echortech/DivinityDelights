import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  outCircle: {
    height: '20@s',
    width: '20@s',
    borderRadius: '10@s',
    borderWidth: 1,
    borderColor: '#848484',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: '70%',
    width: '70%',
    borderRadius: '20@s',
  },
  parrentPaymentCard: {
    width: '90%',
    paddingTop: '5%',
    paddingBottom: '10%',
    borderRadius: '5@s',
    alignSelf: 'center',
    marginTop: '40%',
    backgroundColor: '#F7F7F7',
  },
  payBoxes: {
    width: '30%',
    padding: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: '10@s',
  },
  creditCard: {
    marginLeft: '3%',
    borderBottomWidth: '1@s',
    borderColor: '#EAEAEA',
    marginTop: '4%',
  },
  detailBox1: {
    width: '50%',
    borderColor: '#F7F7F7',
    borderWidth: '1@s',
    backgroundColor: 'white',
    paddingLeft: '5%',
    marginRight: '5%',
    borderRadius: '10@s',
  },
  detailBox2: {
    width: '45%',
    borderColor: '#F7F7F7',
    borderWidth: '0.5@s',
    backgroundColor: 'white',
    paddingLeft: '5%',
    borderRadius: '5@s',
  },
  matterInput: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  majorTxt: {
    fontSize: '16@s',
    color: 'black',
    fontFamily: 'OpenSans-SemiBold',
  },
  nameTxt: {
    fontSize: '16@s',
    color: 'black',
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: '3%',
  },
  collapesableBox: {
    width: '70%',
    marginLeft: '3%',
    marginBottom: '3%',
  },
});
