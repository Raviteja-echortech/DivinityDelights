import React, {useRef, useState, useEffect} from 'react';
import {View, FlatList, Image, Dimensions, Text} from 'react-native';
//import DTCurve from '../../Assets/SVG/DTCurve.svg'
import styles from './styles';

const Carousel = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      id: 1,
      source:
        'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw',
    },
    {id: 2, source: 'https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp'},
    {id: 3, source: 'https://t4.ftcdn.net/jpg/02/28/09/67/360_F_228096754_nK2RWPidbk69ftKQIjjfjEA6NgZI20mg.jpg'},
    {id: 4, source: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/db/46/e1/mutton-nalli-biryani.jpg'},
    {id: 5, source: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg.webp'},
    {id: 6, source: 'https://media.istockphoto.com/id/1292618342/photo/tasty-veg-schezwan-fried-rice-served-in-bowl-over-a-rustic-wooden-background-indian-cuisine.jpg?s=612x612&w=0&k=20&c=lPVC_pXkguBLWme58H_wVx_Tn-4dXy3wAyX4JSekSlc='},
  ];

  const {height, width} = Dimensions.get('window');
  const imageWidth = width * 0.9;
  const imageHeight = 160;

  const scrollToNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(scrollToNextImage, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const onMomentumScrollEnd = event => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / imageWidth);
    setCurrentIndex(index);
  };

  const renderItem = ({item}) => (
    <View style={{width: imageWidth, height: imageHeight}}>
      <Image
        source={{uri: item.source}}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );

  const Footer = () => {
    return (
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View
            style={{
              height: 30,
              alignItems: 'center',
            }}
            key={index}>
            <View
              style={[
                currentIndex != index && {marginTop: 2},
                {
                  height: 15,
                  width: 15,
                  marginLeft: 5,
                  marginRight: 5,
                  borderRadius: 50,
                  borderWidth: 0.5,
                  borderColor: '#CFCFD3',
                },
                currentIndex == index && {
                  backgroundColor: '#FEBD69',
                   width:"95%",
                   height:"60%",
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              {currentIndex == index ? (
                <Text
                  style={{fontSize: 10, color: 'black'}}>
                  {currentIndex+1}/{images.length}
                </Text>
              ) : null}
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={images}
        style={{
          width: width * 0.9,
          alignSelf: 'center',
          marginTop: '3%',
          marginBottom: '2%',
          borderRadius: 8,
        }}
        renderItem={renderItem}
        keyExtractor={(_, index) => String(index)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={imageWidth}
        snapToAlignment="center"
        onMomentumScrollEnd={onMomentumScrollEnd}
        initialScrollIndex={currentIndex}
      />
      <Footer />
    </>
  );
};

export default Carousel;
