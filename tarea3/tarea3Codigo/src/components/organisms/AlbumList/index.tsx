import React, {useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
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
            <AlbumListItem key={index} album={item} index={index}/>
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default AlbumList;
