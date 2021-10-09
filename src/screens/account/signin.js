import React from "react";
import {View, ImageBackground, TextInput, TouchableOpacity, Text} from 'react-native'
import styles from './signupstyle';


const SignIn = (props) => {
    const {route} = props
  
    return(
        <View style={styles.container}>
            {/* <ImageBackground source={require('../../img/sign.jpg')} style={styles.image}> */}
            <View style={styles.inputcont}>
                <TextInput placeholder='Email' placeholderTextColor='black' keyboardType='email-address' style={styles.input}/>
                <TextInput placeholder='Password' placeholderTextColor='black' secureTextEntry textContentType='password' style={styles.input}/>
            </View>
            <View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.signup}>
                    <Text style={styles.logintext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.google}>
                    <Text style={styles.logintext}> Google</Text>
                </TouchableOpacity>
            </View>
            </View>
            
            {/* </ImageBackground> */}

        </View>
     
    )
    // {route.params.id ? <Text>{route.params.id}</Text>: null}
}

export default SignIn;