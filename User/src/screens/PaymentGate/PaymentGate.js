import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import GooglePay from '../../assets/svg/GooglePay.svg';
import {globalStyles} from '../../globalStyles/globalStyles';
import {styles} from './styles';
import Visa from '../../assets/svg/Visa';
import Paypal from '../../assets/svg/Paypal';
import PhonePay from '../../assets/svg/PhonePay';
import PaytmLogo from '../../assets/svg/PaytmLogo';
import Paypass from '../../assets/svg/Paypass';
import Collapsible from 'react-native-collapsible';
import {HeaderComponent} from '../../Utils/Utils';
import {ScrollView} from 'react-native-gesture-handler';
import { routes } from '../../routes/routes';

const PaymentGateway = props => {
  const [update, setupdate] = useState('');
  const payment = [
    {
      name: 'Credit Card/Debit Card',
      major: 'We accept all major credit/debit cards.',
      state: 'Credit',
      card1: <Visa />,
      card2: <Paypal />,
      card3: <Paypass />,
      id: 1,
    },
    {
      name: 'Cash on delivery',
      major: 'Enjoy the delivery',
      state: 'Cash',
      id: 2,
    },
    {
      name: 'UPI',
      major: 'Select any One',
      state: 'UPI',
      id: 3,
    },
  ];
  const collable = el => {
    setupdate(el);
  };
  return (
    <View style={[globalStyles.container]}>
      <HeaderComponent props={props} title="pament Selection" />
      <View style={styles.parrentPaymentCard}>
        {payment.map((el, i) => {
          return (
            <ScrollView showsVerticalScrollIndicator={false} key={i} style={styles.collapesableBox}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => collable(el.state)}
                style={{flexDirection: 'row'}}>
                <View style={styles.outCircle}>
                  <View
                    style={[
                      styles.innerCircle,
                      {
                        backgroundColor:
                          el.state === update ? '#FEBD69' : 'white',
                      },
                    ]}></View>
                </View>
                <Text style={styles.nameTxt}>{el.name}</Text>
              </TouchableOpacity>
              <Collapsible collapsed={el.state === update ? false : true}>
                <View style={{marginTop: '5%'}}>
                  <Text style={styles.majorTxt}>{el.major}</Text>
                  {el.id == 1 ? (
                    <View style={styles.creditCard}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.payBoxes}>{el.card1}</View>
                        <View style={styles.payBoxes}>{el.card2}</View>
                        <View style={styles.payBoxes}>{el.card3}</View>
                      </View>
                      <View style={styles.matterInput}>
                        <TextInput
                          placeholder="Card number/Debit card number"
                          keyboardType='numeric'
                          placeholderTextColor={'#807D7E'}
                          style={styles.detailBox1}
                        />
                        <TextInput
                          placeholder="Name"
                          placeholderTextColor={'#807D7E'}
                          style={styles.detailBox2}
                        />
                      </View>
                      <View style={styles.matterInput}>
                        <TextInput
                          placeholder="Month/Year"
                          keyboardType='numeric'
                          placeholderTextColor={'#807D7E'}
                          style={styles.detailBox1}
                        />
                        <TextInput
                          placeholder="CVV"
                          placeholderTextColor={'#807D7E'}
                          keyboardType='numeric'
                          style={styles.detailBox2}
                        />
                      </View>
                    </View>
                  ) : el.id == 2 ? (
                    <View style={styles.creditCard}></View>
                  ) : (
                    <View style={styles.creditCard}>
                      <View style={{flexDirection: 'row'}}>
                        <GooglePay marginLeft={20} />
                        <PhonePay />
                        <PaytmLogo />
                      </View>
                    </View>
                  )}
                </View>
              </Collapsible>
            </ScrollView>
          );
        })}
      </View>
      <KeyboardAvoidingView style={{flex: 1}}>
        <TouchableOpacity activeOpacity={0.7} style={styles.proccedBtn} onPress={()=>props?.navigation?.navigate(routes.orderpage)} >
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'OpenSans-SemiBold',
              color: 'black',
            }}>
            Proceed
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
export default PaymentGateway;
