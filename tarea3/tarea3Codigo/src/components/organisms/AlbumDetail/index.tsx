import styled from '@emotion/native';
import React, {FC} from 'react';
import { useEffect } from 'react';
import { Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { usePhotos } from '../../../contexts/photos-context';

export interface AlbumDetailItemProps {
  titulo: string;
  index: number;
}

const AlbumDetail: FC<AlbumDetailItemProps> = ({titulo, index }) => {
    const {photos, setPhotos, fetchPhotosContext} = usePhotos();
    //const filteredPhoto = photos.filter(photo => photo.id === index)
    //const imageurl = filteredPhoto[0].thumbnailUrl;
    
    console.log(photos);

    useEffect(() => {
        fetchPhotosContext();
      }, []);

    return (
        <CustomContainer>
        <CustomText>Titulo: {titulo}</CustomText>
        {/* <CustomImage source={{uri: imageurl}} /> */}
        <Button title="Atras" onPress={() => Actions.pop()}></Button>
      </CustomContainer>
      );
    };
    
    const CustomContainer = styled.SafeAreaView`
      align-items: center;
      justify-content: center;
    `;
    
    const CustomText = styled.Text`
      font-size: 18px;
    `;
    
    const CustomImage = styled.Image`
      width: 70%;
      height: 60%;
    `;
    
    
    export default AlbumDetail;