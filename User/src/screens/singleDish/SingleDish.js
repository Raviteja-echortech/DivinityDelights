import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {globalStyles} from '../../globalStyles/globalStyles';
import {HeaderComponent} from '../../Utils/Utils';
import { routes } from '../../routes/routes';

const SingleDish = props => {
  const [singleProduct, setSingleProduct] = useState();
  useEffect(() => {
    setSingleProduct(props?.route?.params?.item);
  }, []);
  return (
    <View style={globalStyles.container}>
      <HeaderComponent props={props} title={'Single Dish'} />
      <View style={styles.singleProductBox}>
        <Image
          source={{uri: singleProduct?.image}}
          style={styles.photoArrangeMent}
        />
        <View style={{marginBottom:"5%"}} >
          <Text style={styles.descriptionTxt} >{singleProduct?.description}</Text>
          <Text style={styles.costStyle} >₹{singleProduct?.cost}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.cartBtn} onPress={()=>props?.navigation?.navigate(routes.cart,{singleProduct})} >
          <Text style={styles.cartbtnTxt}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.orderNowBtn} onPress={()=>props?.navigation?.navigate(routes.paymentGateWay)} >
          <Text style={styles.cartbtnTxt}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SingleDish;
