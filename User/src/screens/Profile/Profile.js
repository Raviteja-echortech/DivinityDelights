import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import {HeaderComponent} from '../../Utils/Utils';
import {styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';

const Profile = props => {
 const  address =[
    {
      name: 'Phanindhra Kondru',
      billingArea: 'Echor Tech, 3th Floor DSL Abacus IT Park',
      landMark: 'DSL Virtue Mall',
      state: 'HYDERABAD, TELANGANA 500039 India',
      mobileNum: '91+ 9908311663',
    },
    {
      name: 'Phanindhra Kondru',
      billingArea: 'Kondapur Back of KIA show room close to Haffespet ',
      landMark: 'KIA CAR Show roon',
      state: 'HYDERABAD, TELANGANA 500031 India',
      mobileNum: '91+ 9908311663',
    }
  ]
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <HeaderComponent props={props} title={'Profile'} />
      <View style={styles.detailsBox}>
        <Text style={styles.firstName}>First Name</Text>
        <TextInput
          placeholder="Enter First name"
          style={styles.inputBoxArrange}
          placeholderTextColor={'#807D7E'}
        />
        <Text style={styles.firstName}>Last Name</Text>
        <TextInput
          placeholder="Enter Last name"
          placeholderTextColor={'#807D7E'}
          style={styles.inputBoxArrange}
        />
        <Text style={styles.firstName}>Email Address</Text>
        <TextInput placeholder="Enter Email" style={styles.inputBoxArrange} />
        <Text style={styles.firstName}>Mobile </Text>
        <TextInput
          placeholder="Enter mobile"
          style={styles.inputBoxArrange}
          placeholderTextColor={'#807D7E'}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.detailsBox}>
        <Text style={styles.adderssTxt}>My Addresses</Text>
        <View style={{marginBottom: scale(60)}}>
          {address.map((el, i) => {
            return (
              <View key={i} style={{marginBottom:10,borderWidth:0.5,borderColor:"#333333",padding:10,borderRadius:10,}} >
                <Text style={styles.nameTxt} >{el.name}</Text>
                <Text style={styles. billingTxt} >{el.billingArea}</Text>
                <Text style={styles. billingTxt} >{el.landMark}</Text>
                <Text style={styles. billingTxt} >{el.state}</Text>
                <Text style={styles. billingTxt} >{el.mobileNum}</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <TouchableOpacity activeOpacity={0.7} style={styles.editBtn} >
                  <Text
                    style={styles.editOption}>
                    Edit
                  </Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}style={styles.editBtn}  >
                  <Text
                    style={styles.editOption}>
                    Remove
                  </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
export default Profile;
