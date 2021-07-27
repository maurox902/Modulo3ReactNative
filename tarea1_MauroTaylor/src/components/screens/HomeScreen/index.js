import React from 'react';
import {View} from 'react-native';
//import ListAlbums from '../../organism/ListAlbums';
import ListAlbumsClass from '../../ListAlbumsClass';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ListAlbumsClass />
      </View>
    );
  }
}
