import React from 'react';
import {View, TextInput,TouchableOpacity} from 'react-native';
import { styles } from './styles';
import SearchIcon from '../assets/svg/SearchIcon';

export const SearchBox = ({valuesGiven, changeText,search}) => {
  return (
    <View style={styles.container}>
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

