import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import AlbumDetail from '../../molecules/AlbumDetail';
import AlbumList from '../../organisms/AlbumList';
import {useAlbumes} from '../../../contexts/albumes-context';

const HomeScreen: React.FC = () => {
  const {selectedAlbum} = useAlbumes();
  return <View>{selectedAlbum ? <AlbumDetail /> : <AlbumList />}</View>;
};

export default HomeScreen;
