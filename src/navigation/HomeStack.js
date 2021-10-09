import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home/home'
import Products from '../screens/Products/ProductList'

const Stack = createStackNavigator()

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'home'} component={Home} options={{headerShown:false}}/>
            <Stack.Screen name={'products'} component={Products}/>
        </Stack.Navigator>
    )
}
export default HomeStack;