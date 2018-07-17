import React from 'react';
import {Text,View,Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Albumdetail =({record})=>
{
    const {title, artist ,thumbnail_image,image,url}=record;
    const {headertextstyle, thumbnailimagestyle,headerfirstlinetext,imagestyle,iconmagecontainer}=styles;
    return(
    <Card>
    
    <CardSection>
           <View style={iconmagecontainer}>
               <Image  //image of icon
               style={thumbnailimagestyle}
               source={{uri:thumbnail_image}}
               />
           </View>
           <View style={headertextstyle}>
                <Text style={headerfirstlinetext}>{title}</Text>
                <Text>{artist}</Text>
           </View>
    </CardSection>

          <CardSection>
              <Image
              style={imagestyle}
              source={{uri:image}}
             />
            </CardSection> 


    <CardSection>
        <Button onPress={()=>Linking.openURL(url)} >
        BUY NOW
        </Button>
        </CardSection>


    </Card>

    );
};

const styles={
    headertextstyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerfirstlinetext:{
    fontSize:18
    },
    thumbnailimagestyle:{
        height:50,
        width:50
    },
    iconmagecontainer:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imagestyle:{
        height:300,
       flex:1,
        width:null
    }
    
};


export default Albumdetail; 