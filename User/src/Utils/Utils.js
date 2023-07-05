import React from 'react';
import {View, TextInput,TouchableOpacity} from 'react-native';
import { styles } from './styles';
import SearchIcon from '../assets/svg/SearchIcon';
import Hamberugmenu from "../assets/svg/Hamberugmenu"
//import Cart from "../assets/svg/Cart"
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

