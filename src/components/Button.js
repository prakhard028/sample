import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button=({onPress,children})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonstyle}>
        <Text style={styles.textstyle}>
        {children}
        </Text>
        </TouchableOpacity>
    );
};

const styles={
    textstyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    buttonstyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
    }
};
export default Button ;