import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get("window")

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingTop: 10
      
    },
    logocont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width,
      paddingHorizontal: 20,
      marginVertical: 10,
    },
    input: {
      marginTop: -15,
      borderBottomColor: 'grey',
      borderBottomWidth: 2,
      width: width/2-16,
      color: 'black'
      
    },
    flatlist:{
      width: width,
      height: 150,
    
    },
    image: {
      resizeMode: "cover",
      height: 30,
      width: 30,
 
    },
    category_image: {
      
      width: width*0.9,
      height: 100,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30
      
    },
    category:{
      alignItems: 'center',
      marginBottom: 30,
    },
    slider: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width*0.9,
      height: 150,
      backgroundColor: 'orange',
      borderRadius: 25,
      marginBottom: 10,
      marginLeft: 19
    }
  
  
  });
