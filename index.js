 // import library for components
 import React from 'react';
 import { AppRegistry,View} from 'react-native';
 import Header from './src/components/header';
 import AlbumLists from './src/components/AlbumLists';
 // create a components
 const App =()=>(
     <View style={{flex:1}}>
     <Header text={'Mumbai Police'} />
     <AlbumLists/>
     </View>
 );
 
 //render(run) on the device
 AppRegistry.registerComponent('awesomeproj',()=> App);