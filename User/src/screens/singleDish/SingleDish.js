import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {globalStyles} from '../../globalStyles/globalStyles';
import { HeaderComponent } from '../../Utils/Utils';


const SingleDish = props => {
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    setSingleProduct(props?.route?.params.item);
  }, []);
  console.log(singleProduct);
  return (
    <View style={globalStyles.container}>
    <HeaderComponent {...props} title={"Single Product"} />
    </View>
  );
};
export default SingleDish;
