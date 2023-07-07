import React, {useState} from 'react';

import {View, TextInput, TouchableOpacity, Text, Animated} from 'react-native';
import {styles} from './styles';
import SearchIcon from '../assets/svg/SearchIcon';
import BackArrow from '../assets/svg/BackArrow';
import Hamberugmenu from '../assets/svg/Hamberugmenu';
import {ScaledSheet} from 'react-native-size-matters';
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

// export const ProgresssiveBar = () => {
//   const [stages, setStages] = useState([
//     'OrderPlaced',
//     'Pick up',
//     'On way',
//     'Delivered',
//   ]);
//   return (
//     <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
//       {stages.map((el, i) => {
//         return (
//           <View key={i} style={styles.progressInnerBox}>
//             <View style={styles.progressCircleParent}>
//               <View style={styles.progressCircleChild}></View>
//             </View>
//             <View
//               style={{
//                 width: '60%',
//                 height: '20%',
//                 backgroundColor: 'green',
//               }}></View>
//             <View>
//               <Text numberOfLines={1} style={styles.progressBarTxt}>
//                 {el}
//               </Text>
//             </View>
//           </View>
//         );
//       })}
//     </View>
//   );
// };
