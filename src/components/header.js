import React from 'react';
import {Text,View} from 'react-native';

// make a component
const Header=(Props) =>{ 
    const {textStyle,viewStyle}=styles;
    return (
        <View style={viewStyle}>
    <Text style={textStyle}>{Props.text}</Text>
    </View>
    );
    
    };
// styling function
const styles={
    viewStyle:{
        backgroundColor:'#FEDEFE',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.5
    },
    textStyle:{
        fontSize:20
    }
};
// export so that it can be used by other files
export default Header;
