import React from "react";
import {Text, Button, View} from 'react-native'


const Cart = (props) => {
    const {navigation} = props
    
    const navigation_to_checkout = () => navigation.navigate('checkout', {id:5})
    return(
        <View>
        <Text>
         cart page
        </Text>
        <Button title='checkout' onPress={navigation_to_checkout}/>
        </View>
     
    
    )
}

export default Cart;