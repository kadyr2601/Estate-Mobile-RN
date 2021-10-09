import React from "react";
import {View, ImageBackground, TextInput, TouchableOpacity, Text} from 'react-native'
import styles from './signupstyle';

const SignUp = (props) => {
    const {navigation} = props
    
    const navigation_to_login = () => navigation.navigate('login', {id:9})
  
    return(
        <View style={styles.container}>
            {/* <ImageBackground source={require('../../img/sign.jpg')} style={styles.image}> */}
            <View style={styles.inputcont}>
                <TextInput placeholder='Name' placeholderTextColor='black' style={styles.input}/>
                <TextInput placeholder='Surname' placeholderTextColor='black' style={styles.input}/>
                <TextInput placeholder='Email' placeholderTextColor='black' keyboardType='email-address' style={styles.input}/>
                <TextInput placeholder='Password' placeholderTextColor='black' secureTextEntry textContentType='password' style={styles.input}/>
            </View>
            <View>
            <View style={styles.btn}>
            <TouchableOpacity style={styles.signup}>
                <Text style={styles.logintext}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.google}>
                <Text style={styles.logintext}> Google</Text>
            </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={navigation_to_login} style={styles.btnlogin}>
                <Text style={styles.logintext}>Login</Text>
            </TouchableOpacity>
            
            </View>
            
            {/* </ImageBackground> */}

        </View>
        
    )
}

export default SignUp;

