import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import WishListSelected from '../../assets/svg/WishListSelected.svg';
import WishUnSelected from '../../assets/svg/WishUnSelected';
import {globalStyles} from '../../globalStyles/globalStyles';
import {HeaderComponent} from '../../Utils/Utils';
import {routes} from '../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SingleDish = props => {
  const [singleProduct, setSingleProduct] = useState();
  const [wish, setWish] = useState(true);
  useEffect(() => {
    setSingleProduct(props?.route?.params?.item);
  }, []);

  const addToCart = async id => {
    try {
      const data = await AsyncStorage.getItem('cart');
      let existingProduct = [];
      if (data !== null) {
        existingProduct = JSON.parse(data);
      }
      props?.navigation?.navigate(routes.cart);
      existingProduct.push(singleProduct);
      await AsyncStorage.setItem('cart', JSON.stringify(existingProduct));
    } catch (err) {
      console.log(err);
    }
  };
  const addToWishList = async () => {
 
    setWish(!wish);
  };
  return (
    <View style={globalStyles.container}>
      <HeaderComponent props={props} title={'Single Dish'} />
      <View style={styles.singleProductBox}>
        <Image
          source={{uri: singleProduct?.image}}
          style={styles.photoArrangeMent}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={()=>addToWishList(singleProduct.id)}
          style={styles.wishStyle}>
          {wish ? <WishUnSelected /> : <WishListSelected />}
        </TouchableOpacity>
        <View style={{marginBottom: '5%', width: '80%'}}>
          <Text style={styles.descriptionTxt}>
            {singleProduct?.description}
          </Text>
          <Text style={styles.costStyle}>₹{singleProduct?.cost}</Text>
        </View>
        <View></View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.cartBtn}
          onPress={() => addToCart(singleProduct.id)}>
          <Text style={styles.cartbtnTxt}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.orderNowBtn}
          onPress={() => props?.navigation?.navigate(routes.paymentGateWay)}>
          <Text style={styles.cartbtnTxt}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SingleDish;
