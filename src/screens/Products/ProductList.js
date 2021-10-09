import React, {useEffect, useState} from "react";
import { StatusBar } from 'react-native';
import { Text, View, SafeAreaView, FlatList, Image, ActivityIndicator  } from 'react-native';
import axios from 'axios';
import styles from './ProductListStyle';



const Products = (props) => {
    const { route } = props
    const categoryId = route.params.categoryId
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadData = () => {
        setLoading(true)
        axios.get("http://192.168.0.175/api/products/").then((res) => setData(res.data))
        setLoading(false)
    }
    useEffect(() => {
      loadData();
    }, [])

    const sortedProducts = () => {
        let sortedProducts = []

        if(data && categoryId) {
            sortedProducts =  data.filter((item) => item.category === categoryId)
        }

        if(sortedProducts.length) {
            return sortedProducts
        }

        return []
    }
  
    const renderItem=({item,index}) => (
      <View style={styles.productcont}>
        <View>
            <Image source={{uri: item.image}} style={styles.image} />
        </View>
      <Text style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.price}>
      {item.price}
      </Text>
    </View>
    )
    return(
        
        <><StatusBar /><SafeAreaView style={styles.container}>
            {
                loading
                ? (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator />
                    </View>
                ) : (
                    sortedProducts().length
                    ? (
                        <View>
                            <FlatList showsVerticalScrollIndicator={true} scrollEnabled={true} data={sortedProducts()} renderItem={renderItem} keyExtractor={(item, index) => `${item.itemID} + ${index}`}/>
                        </View>
                    ) : <Text>No products!</Text>

                )
            }

      </ SafeAreaView ></>
    )
}

export default Products;
