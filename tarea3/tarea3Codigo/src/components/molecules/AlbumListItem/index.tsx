import styled from '@emotion/native';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import IAlbum from '../../../models/IAlbumes';
import {actualizarSelectedAlbum} from '../../../store/actions/Albumes';
import {useAlbumes} from '../../../contexts/albumes-context';

export interface AlbumListItemProps {
  album: IAlbum;
  index: number;
}

const AlbumListItem: FC<AlbumListItemProps> = ({album, index}) => {
  const {setselectedAlbum} = useAlbumes();
  const onPress = () => {
    setselectedAlbum(index);
  };

  return (
    <ItemContainer onPress={onPress}>
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
