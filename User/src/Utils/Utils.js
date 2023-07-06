import React from 'react';
import {View, TextInput,TouchableOpacity,Text} from 'react-native';
import { styles } from './styles';
import SearchIcon from '../assets/svg/SearchIcon';
import BackArrow from "../assets/svg/BackArrow"
import Hamberugmenu from "../assets/svg/Hamberugmenu"
export const SearchBox =  ({valuesGiven, changeText,search,hamberugmenu}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.hamberger}  onPress={hamberugmenu} >
        <Hamberugmenu/>
        </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={valuesGiven}
          onChangeText={changeText}
        />
       <TouchableOpacity onPress={search} activeOpacity={0.7} style={styles.searchIcon}>
          <SearchIcon/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HeaderComponent=({props,title})=>{
  console.log(props)
  return(
    <View
    style={styles.headerParent}>
        <View style={{width:"20%",}} >
    <TouchableOpacity
      style={styles.BackBtn}
      onPress={() => props?.navigation?.goBack()}>
      <BackArrow />
    </TouchableOpacity>
    </View>
    <View style={styles.titleBox} >
      <Text
        style={styles. titleContent}>
        {title}
      </Text>
    </View>
  </View>
  )
}