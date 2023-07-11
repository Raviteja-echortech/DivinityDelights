import React, {useEffect, useState} from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import  {HeaderComponent, } from '../../Utils/Utils';//ProgresssiveBar
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import DeleteIcon from '../../assets/svg/DeleteIcon';
import {styles} from './style';
import Nodata from "../../assets/svg/Nodata"
import { routes } from './../../routes/routes';
import { globalStyles } from '../../globalStyles/globalStyles';
//import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const CartPage = props => {
  const [cartData, setCartData] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    const cartarrangment = async () => {
      try {
        const data = await AsyncStorage.getItem('cart');
        if (data !== null) {
          setCartData(JSON.parse(data));
        }
      } catch (err) {
        console.log(err);
      }
    };
    cartarrangment();
  }, [isFocused]);
  const removeItem = async (id) => {
    try{
        const data = await AsyncStorage.getItem('cart');
        let existingProduct = [];
        if (data !== null ) {
          existingProduct = JSON.parse(data);
        }
        existingProduct = existingProduct.filter((element) => element.id !== id);
        await AsyncStorage.setItem('cart', JSON.stringify(existingProduct));
        setCartData(existingProduct)

    }catch(err){
        console.log(err)
    }
  };
  
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white', flexGrow: 1}}>
      <HeaderComponent title={'Cart'} props={props} />
      {cartData.length===0? (
        <View style={[globalStyles.container,{alignItems:"center",marginTop:"40%"}]} >
           <Nodata/>
        </View>
      ) : (
        <View style={styles.cartContainer}>
         
          {cartData.map((el, i) => {
            return (
              <View key={i} style={styles.cartItem}>
                <View style={styles.imgContainer}>
                  <Image source={{uri: el.image}} style={styles.cartImg} />
                </View>
                <View style={styles.txtContainer}>
                  <Text style={styles.descTxt}>{el.description}</Text>
                  <Text style={styles.costTxt}>₹{el.cost}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => removeItem(el.id)}
                  style={styles.deleteIcon}
                  activeOpacity={0.7}
                  >
                  <DeleteIcon />
                </TouchableOpacity>
              </View>
            );
          })}
          <View>
            <TouchableOpacity style={styles.placeOrderBtn} onPress={()=>props?.navigation.navigate(routes.paymentGateWay)} activeOpacity={0.7}>
              <Text style={styles.placeOrderTxt}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};
export default CartPage;
