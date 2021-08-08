import styled from '@emotion/native';
import React, {useEffect, useMemo} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import IPhoto from '../../../models/IPhotos';
import {fetchPhotos} from '../../../store/actions/Photos';
import {actualizarSelectedAlbum} from '../../../store/actions/Albumes';
import PhotoListItem from '../PhotoListItem';
import {useAlbumes} from '../../../contexts/albumes-context';

const AlbumDetails: React.FC = () => {
    const dispatch = useDispatch();
  
    const selectedAlbum = useSelector((state: IState) => state.Albumes.selectedAlbum);
    console.log(selectedAlbum)
    const {albumes, setselectedAlbum} = useAlbumes();
    const {title, id} = albumes[selectedAlbum || 0];
    const photos = useSelector((state: IState) => state.Photos.photos);
    const filteredPhoto = photos.filter(photo => photo.id === id);
    const imageurl = filteredPhoto[0].thumbnailUrl;
    
    const onBackPress = () => {
      setselectedAlbum(null);
    };
  
    useEffect(() => {
      dispatch(fetchPhotos());
    }, []);
    return (
      <CustomContainer>
        <CustomText>{title}</CustomText>
        <CustomImage
          source={{uri: imageurl}}
        />
        <Button title="Back" onPress={onBackPress} />
      </CustomContainer>
    );
  };

  const CustomText = styled.Text`
    font-size: 18px;
  `;
  
  const PhotoList = styled.FlatList`
    padding: 8px;
  `;
  

  const CustomContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
`;

const CustomImage = styled.Image`
  width: 70%;
  height: 60%;
`;
  
  export default AlbumDetails;
  