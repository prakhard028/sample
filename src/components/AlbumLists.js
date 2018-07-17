import React,{Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Albumdetail from './Albumdetail';

class AlbumLists extends Component {
    state ={albums:[]};
componentWillMount(){
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response=> this.setState({albums:response.data}));
}
renderAlbums(){
   return this.state.albums.map(album=>
   <Albumdetail key={album.title} record={album} />);// passed as prop to albumdetail
}
render(){ 
    console.log(this.state);
return(
<ScrollView>
{this.renderAlbums()}
</ScrollView>
)
};
}

export default AlbumLists ;