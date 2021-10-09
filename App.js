import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './src/navigation/HomeStack'
import SignUpStack from './src/navigation/SignUpStack';
import CartStack from './src/navigation/CheckoutStack';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator tabBarOptions={{tabStyle: {backgroundColor: 'white'}, labelStyle: {fontSize: 15, color: 'black', paddingBottom: 10}}}>
          <Tab.Screen name={'Home'} component={HomeStack} />
          <Tab.Screen name={'Cart'} component={CartStack} options={{tabBarIcon: () => <Image source={require('./src/img/cart.png')}/>, tabBarLabel: () => null,  }} />
          <Tab.Screen name={'Profile'} component={SignUpStack}/>
        </Tab.Navigator>
    </NavigationContainer>
  );

}
