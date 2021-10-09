import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
    // image:{
    //     width: '100%',
    //     height: '100%',
    //     justifyContent: 'space-between',
        
    // },
    container:{
        width: '100%',
        height: '100%',
        // backgroundColor: 'blue',
        // justifyContent: 'space-between',
    },
    input: {
       height: 50,
       width: '80%',
       backgroundColor: 'white',
       marginBottom: 20,
       borderRadius: 20,
       color: 'black',
       borderColor: 'orange',
       borderWidth: 2
      },
      inputcont: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 10,
        paddingHorizontal: 40,
    },
    signup:{
        height: 50,
        width: '40%',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2
        
    },
    google:{
        height: 50,
        width: '40%',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2
    },

    logintext: {
        fontSize: 20,
        color: 'white'
    }
  
  });