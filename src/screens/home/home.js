import React, {useEffect, useRef} from "react";
import { Text, View, TextInput, SafeAreaView, FlatList, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {useSelector, useDispatch} from 'react-redux'

import { getCategoies } from '../../store/actions/categories'

import styles from './home.styles';

const {width}=Dimensions.get('window')

const Home = (props) => {
  const {navigation} = props
    
  const navigation_to_product_list = (item) => navigation.navigate('products', {categoryId:item.id})

  const categories = useSelector((state) => state.categories.categories)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoies())
  }, [])

  const slideref = useRef()
  const slide=[{title:'slide1'},{title:'slide2'},{title:'slide3'}]
  // slideref.current.snapToNext()
  const renderCarouselItem=({item,index}) => (
    <View style={styles.slider}>
      <Text style={{fontSize: 28, color: 'white'}}>
        {item.title}
      </Text>
    </View>
      
    )
    return(
        
        <><StatusBar /><SafeAreaView style={styles.container}>
        <View style={styles.logocont}>
            <Image source={require('../../img/logo.png')} style={styles.image}/>
            <TextInput style={styles.input} placeholder='search' placeholderTextColor='black' />
        </View>
        <ScrollView>
        <Carousel
                  ref={slideref}
                  data={slide}
                  renderItem={renderCarouselItem}
                  sliderWidth={width}
                  itemWidth={width}
                  // sliderHeight={100}
                  // itemHeight={100}
                  loop
                  autoplay
                  autoplayInterval={6000}

                />
      
        <View>
          {categories && !!categories.length && categories.map((item, index) => (
              <TouchableOpacity key={index} style={ styles.category} onPress={() => navigation_to_product_list(item)}>
                <View>
                    <Image style={ styles.category_image} source={{uri: item.image}} resizeMode={'cover'} />
                </View>
              {/* <Text>
                {item.name}
              </Text> */}
            </TouchableOpacity>
          ))}
        {/* <FlatList showsVerticalScrollIndicator={true} scrollEnabled={false} data={data} renderItem={renderItem} keyExtractor={(item, index) => `${item.itemID} + ${index}`}/> */}
      </View>
        </ScrollView>
        
      </ SafeAreaView ></>
    )
}

export default Home;
