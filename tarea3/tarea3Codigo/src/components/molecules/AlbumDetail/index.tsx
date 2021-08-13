import styled from '@emotion/native';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import IPhoto from '../../../models/IPhotos';

export interface AlbumDetailItemProps {
  titulo: string;
  index: number;
}

const AlbumDetail: FC<AlbumDetailItemProps> = ({titulo, index }) => {
 

  return (
    <ItemContainer onPress={() =>
      Actions.detail({
        titulo: `${titulo}`,
        id: `${index}`,
      })
    }>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity`
  background-color: #f1f1f1;
  border-radius: 32px;
  padding: 8px 12px;
  margin: 4px 0;
`;

export default AlbumDetail;
