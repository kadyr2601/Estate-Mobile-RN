import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../screens/account/signup'
import SignIn from '../screens/account/signin'

const Stack = createStackNavigator()

const SignUpStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'signup'} component={SignUp} options={{headerShown:false}}/>
            <Stack.Screen name={'login'} component={SignIn} />
        </Stack.Navigator>
    )
}
export default SignUpStack;