import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get("window")

export default StyleSheet.create({
    productcont: {
        width: '80%',
        height: 320,
        marginLeft: 39,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'grey',
        marginBottom: 20
    },
    image: {
        marginTop: 10,
        width: 250,
        height: 250,
        
    },
    title: {
        color: 'black',
        fontSize: 20
    },
    price:{
        color: 'orange',
        fontSize: 20
    }
});