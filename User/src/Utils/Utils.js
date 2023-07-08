import React, {useRef, useState} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles'; //https://www.npmjs.com/package/react-native-step-indicator
import SearchIcon from '../assets/svg/SearchIcon';
import BackArrow from '../assets/svg/BackArrow';
import Hamberugmenu from '../assets/svg/Hamberugmenu';
import {scale} from 'react-native-size-matters';
import {globalStyles} from '../globalStyles/globalStyles';

export const SearchBox = ({valuesGiven, changeText, search, hamberugmenu}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.hamberger}
        onPress={hamberugmenu}>
        <Hamberugmenu />
      </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={valuesGiven}
          onChangeText={changeText}
        />
        <TouchableOpacity
          onPress={search}
          activeOpacity={0.7}
          style={styles.searchIcon}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HeaderComponent = ({props, title}) => {
  return (
    <View style={styles.headerParent}>
      <View style={{width: '20%'}}>
        <TouchableOpacity
          style={styles.BackBtn}
          onPress={() => props?.navigation?.goBack()}>
          <BackArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.titleContent}>{title}</Text>
      </View>
    </View>
  );
};
export const ProgresssiveBar = props => {
  const [select, setSelected] = useState(0);

  const labels = ['Order Placed', 'Inprogress', 'Shipped', 'delivered'];
  const progressBar = () => {
    setSelected(select + 1);
    if (labels.length == select) {
      setSelected(0);
    }
  };
  return (
    <View style={globalStyles.container}>
      <HeaderComponent props={props} title="track Your order" />
      <View style={styles.progressBarContainer}>
        <StepIndicator
          customStyles={styles.customStyles}
          currentPosition={select}
          labels={labels}
          // renderLabel={({position,stepStatus,lable,currentPosition})=>{
          // }}
          direction="vertical"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={progressBar}
        style={styles.nextBtn}>
        <Text style={styles.nextTxt}>Next Step</Text>
      </TouchableOpacity>
    </View>
  );
};
