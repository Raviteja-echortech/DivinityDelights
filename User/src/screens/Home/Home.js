import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import LegPecies from '../../assets/svg/LegPecies';
import Heart from '../../assets/svg/Heart';
import {scale} from 'react-native-size-matters';
import {SearchBox, Shimmer} from '../../Utils/Utils';
import Pizza from '../../assets/svg/Pizza';
import Biryani from '../../assets/svg/Biryani';
import {globalStyles} from '../../globalStyles/globalStyles';
import Carousel from '../../components/Carousel/Carousel';
import {FoodImages} from '../../api/api';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {routes} from '../../routes/routes';
import {useIsFocused} from '@react-navigation/native';

const Home = props => {
  const [name, setname] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets()
  const shimmerLoading=<Shimmer height={"100%"} width={"100%"} />
  useEffect(() => {
    FoodImages().then(res => setFoodItems(res));
  }, [isFocused]);

  const data = [
    {
      name: 'DELICIOUSLY PURE VEGGIE',
      des: ' Variety of wholesome vegetarian delicacies',
      pic: <Biryani width={50} height={50} />,
    },
    {
      name: 'SAVOR THE MEAT',
      des: 'Diverse range of non-vegetarian dishes',
      pic: <LegPecies width={50} height={50} />,
    },
  ];
  return (
    <View style={globalStyles.container}>
      <SearchBox valuesGiven={name} changeText={text => setname(text)} />
      {foodItems.length === 0 ? (
        <View>
          <View
            style={[
              styles.header,
              {paddingTop: insets.top, marginTop: '2%'},
              styles.shimmer,
            ]}>
            {shimmerLoading}
          </View>
          <View
            style={[
              styles.locationContainer,
              {marginTop: '5%'},
              styles.shimmer,
            ]}>
            {shimmerLoading}
          </View>
          <View style={[styles.carouselShimmer, styles.shimmer]}>
            {shimmerLoading}
          </View>
          <View style={[styles.categoryShimmer, styles.shimmer]}>
            <View style={[styles.categoryContainer, {width: '25%'}]}>
              {shimmerLoading}
            </View>
            <View style={[styles.categoryContainer, {width: '25%'}]}>
              {shimmerLoading}
            </View>
            <View style={[styles.categoryContainer, {width: '25%'}]}>
              {shimmerLoading}
            </View>
            <View style={[styles.categoryContainer, {width: '25%'}]}>
              {shimmerLoading}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={[styles.buttonShimmer, styles.shimmer]}>
              {shimmerLoading}
            </View>
            <View style={[styles.buttonShimmer, styles.shimmer]}>
              {shimmerLoading}
            </View>
          </View>
          <View style={[styles.shimmerHeading, styles.shimmer]}>
            {shimmerLoading}
          </View>
          <View style={[styles.shimmerCard, styles.shimmer]}>
            {shimmerLoading}
          </View>
        </View>
      ) : (
        <ScrollView style={styles.bodyContent}>
          <Carousel />
          <View>
            <Text style={styles.orderMeContent}>Order Me</Text>
            <FlatList
              data={foodItems}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollIndicatorInsets={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.orderMe}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.photoArrange}
                    />
                    <Text numberOfLines={1} style={styles.desTxt}>
                      {item.description}
                    </Text>
                    <Text
                      style={{
                        color: '#FEBD69',
                        fontFamily: 'OpenSans-SemiBold',
                        fontSize: 17,
                      }}>
                      ₹{item.cost}
                    </Text>
                    <TouchableOpacity
                      style={styles.addOrderBtn}
                      onPress={() =>
                        props?.navigation?.navigate(routes.singleDish, {item})
                      }>
                      <Text style={styles.addBtnOrderContent}>Add</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={item => item.id.toString()}
            />

            <Text style={styles.bestSellers}>BEST SELLERS</Text>
            <FlatList
              data={foodItems}
              numColumns={2}
              scrollIndicatorInsets={false}
              style={{backgroundColor: 'white', padding: '1%'}}
              columnWrapperStyle={{justifyContent: 'space-around'}}
              renderItem={({item}) => {
                return (
                  <View style={styles.bestSellersCards}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.bestSellerPic}
                    />
                    <Text numberOfLines={1} style={styles.descriptionContent}>
                      {item.description}
                    </Text>
                    <Text style={styles.costTxt}>₹{item.cost}</Text>
                    <TouchableOpacity
                      style={styles.addBtn}
                      onPress={() =>
                        props?.navigation.navigate(routes.singleDish, {item})
                      }>
                      <Text style={styles.addBtnContent}>Add</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <Text style={styles.orderMeContent}>Pizza Special</Text>
          <View style={styles.pizzaCard}>
            <View style={{width: '60%', justifyContent: 'center'}}>
              <Text style={styles.fromSavoryBitesTxt}>
                From Savory Bites to Irresistible Delights
              </Text>
              <Text style={styles.pizzaDescription}>
                Indulge in a delectable assortment of snacks, ranging from
                classic pizza, mouthwatering wraps, juicy burgers, crispy fries,
                and more. Our one-stop food solution has all your cravings
                covered. Order now and experience the ultimate snacking
                satisfaction!
              </Text>
              <TouchableOpacity style={styles.pizzaBtn}>
                <Text style={{color: 'black', fontFamily: 'Roboto-Medium'}}>
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: '40%', alignItems: 'center'}}>
              <Pizza width={scale(170)} height={scale(190)} />
            </View>
          </View>
          <View style={styles.bottomCard}>
            <Text style={styles.bottomEndLine}>100%</Text>
            <Text style={styles.bottomEndLine}>Delicious Food </Text>
            <Text style={styles.tagLineEnd}>
              Created with <Heart /> in Jaipur, India
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default Home;
