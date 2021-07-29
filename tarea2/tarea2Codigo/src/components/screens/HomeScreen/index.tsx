import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import AlbumDetail from '../../molecules/AlbumDetail';
import AlbumList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
  const selectedAlbum= useSelector((state: IState) => state.Albumes.selectedAlbum);

  return <View>{selectedAlbum ? <AlbumDetail /> : <AlbumList />}</View>;
};

export default HomeScreen;
