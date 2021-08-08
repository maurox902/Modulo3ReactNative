import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import IAlbum from '../../../models/IAlbumes';
import {actualizarAlbumes, fetchAlbumes} from '../../../store/actions/Albumes';
import {useAlbumes} from '../../../contexts/albumes-context';

import AlbumListItem from '../../molecules/AlbumListItem';

const AlbumList: React.FC = () => {

  const {albumes, fetchAlbumes} = useAlbumes();

  useEffect(() => {
    fetchAlbumes();
  }, []);
  return (
    <View>
      {albumes.length > 0 ? (
        <FlatList
          data={albumes}
          renderItem={({item, index}) => (
            <AlbumListItem key={index} album={item} index={index} />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default AlbumList;
