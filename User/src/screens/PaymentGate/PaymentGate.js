import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../globalStyles/globalStyles';
import {styles} from './styles';

const PaymentGateway = () => {
  const payMentOption = [
    {name: 'Credit Card/Dedit Card'},
    {name: 'Cash on Delivery'},
    {name: 'UPI'},
  ];
  return (
    <View
      style={[
        globalStyles.container,
        {justifyContent: 'center', alignItems: 'center'}  ]}>
      
    </View>
  );
};
export default PaymentGateway;
