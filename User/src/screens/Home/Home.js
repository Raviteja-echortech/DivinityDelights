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
import {SearchBox} from '../../Utils/Utils';
import Pizza from '../../assets/svg/Pizza';
import Biryani from '../../assets/svg/Biryani';
import {globalStyles} from '../../globalStyles/globalStyles';
import Carousel from '../../components/Carousel/Carousel';
import {FoodImages} from '../../api/api';
import { routes } from '../../routes/routes';

const Home = (props) => {
  const [name, setname] = useState('');
  const [foodItems, setFoodItems] = useState();
  useEffect(() => {
    FoodImages().then(res => setFoodItems(res));
  }, []);

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
                    style={{height: 80, width: 80}}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      justifyContent: 'center',
                      fontFamily: 'Rashkey',
                      color: 'black',
                    }}>
                    {item.description}
                  </Text>
                  <Text>₹{item.cost}</Text>
                  <TouchableOpacity style={styles.addOrderBtn}>
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
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={()=>props?.navigation?.navigate(routes.singleDish,{item})}
                  style={styles.bestSellersCards}>
                  <Image
                    source={{uri: item.image}}
                    style={{height: 100, width: 100, alignSelf: 'center'}}
                  />
                  <Text numberOfLines={1} style={styles.descriptionContent}>
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      fontFamily: 'OpenSans-Bold',
                    }}>
                    ₹{item.cost}
                  </Text>
                  <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.addBtnContent}>Add</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
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
              Indulge in a delectable assortment of snacks, ranging from classic
              pizza, mouthwatering wraps, juicy burgers, crispy fries, and more.
              Our one-stop food solution has all your cravings covered. Order
              now and experience the ultimate snacking satisfaction!
            </Text>
          </View>
          <View style={{width: '40%', alignItems: 'center'}}>
            <Pizza width={scale(170)} height={scale(190)} />
          </View>
        </View>
        <View style={styles.bottomCard} >
          <Text style={styles.bottomEndLine} >100%</Text>
          <Text  style={styles.bottomEndLine}  >Delicious Food </Text>
          <Text style={styles.tagLineEnd} >
            Created with <Heart /> in Jaipur, India
          </Text>
        </View>
      </ScrollView>
     
    </View>
  );
};
export default Home;
