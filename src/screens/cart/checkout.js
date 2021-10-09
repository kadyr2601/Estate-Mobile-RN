import React from "react";
import {Text, View} from 'react-native'


const Checkout = (props) => {
    const {route} = props
    
    return(
        <View>
            <Text>
            checkout page
            </Text>
            {route.params.id ? <Text>{route.params.id}</Text>: null}
            
        </View>
     
    )
}

export default Checkout;