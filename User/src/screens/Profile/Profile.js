import {View, Text,TextInput} from 'react-native';
import React from 'react';
import {HeaderComponent} from '../../Utils/Utils';
import {globalStyles} from '../../globalStyles/globalStyles';
import {styles} from './styles';

const Profile = (props) => {
  return (
    <View style={globalStyles.container}>
      <HeaderComponent props={props} title={'Profile'} />
      <View style={styles.detailsBox} >
        <Text style={styles.firstName} >First Name</Text>
        <TextInput placeholder='Enter First name' style={styles.inputBoxArrange} />
        <Text style={styles.firstName} >Last Name</Text>
        <TextInput placeholder='Enter Last name' style={styles.inputBoxArrange} />
        <Text style={styles.firstName}>Email Address</Text>
        <TextInput placeholder='Enter Email' style={styles.inputBoxArrange} />
        <Text style={styles.firstName} >Mobile </Text>
        <TextInput placeholder='Enter mobile'style={styles.inputBoxArrange} keyboardType='numeric'  />
      </View>
      <View>
        <Text style={{color:"black",}} >My Address</Text>
        <View></View>
        <View></View>
      </View>
    </View>
  );
};
export default Profile;
