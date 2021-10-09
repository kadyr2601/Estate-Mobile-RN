import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cart from '../screens/cart/cart'
import Checkout from '../screens/cart/checkout'

const Stack = createStackNavigator()

const CartStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'cart'} component={Cart} options={{headerShown:false}}/>
            <Stack.Screen name={'checkout'} component={Checkout}/>
        </Stack.Navigator>
    )
}
export default CartStack;