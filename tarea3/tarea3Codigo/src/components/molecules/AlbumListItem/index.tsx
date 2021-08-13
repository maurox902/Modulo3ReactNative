import styled from '@emotion/native';
import React, {FC, useEffect} from 'react';
import {Text} from 'react-native';
import IAlbum from '../../../models/IAlbumes';
import {Actions} from 'react-native-router-flux';

export interface AlbumListItemProps {
  album: IAlbum;
  index: number;
}

const AlbumListItem: FC<AlbumListItemProps> = ({album, index }) => {
 

  return (
    <ItemContainer onPress={() =>
      Actions.detail({
        titulo: `${album.title}`,
        id: `${album.id}`,
      })
    }>
      <Text>
        {album.id}. {album.title}
      </Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity`
  background-color: #f1f1f1;
  border-radius: 32px;
  padding: 8px 12px;
  margin: 4px 0;
`;

export default AlbumListItem;
