import styled from '@emotion/native';
import React, {useEffect, useMemo} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import IPhoto from '../../../models/IPhotos';
import {fetchPhotos} from '../../../store/actions/Photos';
import {actualizarSelectedAlbum} from '../../../store/actions/Albumes';
import PhotoListItem from '../PhotoListItem';

const AlbumDetails: React.FC = () => {
    const dispatch = useDispatch();
  
    const selectedAlbum = useSelector((state: IState) => state.Albumes.selectedAlbum);
    const albumes = useSelector((state: IState) => state.Albumes.albumes);
    const {title, id} = albumes[selectedAlbum || 0];
    const photos = useSelector((state: IState) => state.Photos.photos);
    const filteredPhotos = useMemo(
      () => photos.filter(photo => photo.id === id),
      [photos, id],
    );
  
    const onBackPress = () => {
      dispatch(actualizarSelectedAlbum(null));
    };
  
    useEffect(() => {
      dispatch(fetchPhotos());
    }, []);
  
    return (
      <Container>
        <CustomText>{title}</CustomText>
        <Image
          style={styles.image}
          source={{uri: 'https://via.placeholder.com/600/92c952'}}
        />
  
        {filteredPhotos && (
          <PhotoList
            data={filteredPhotos}
            renderItem={({item}) => <PhotoListItem todo={item as IPhoto} />}
          />
        )}
        <Button title="Back" onPress={onBackPress} />
      </Container>
    );
  };
  
  const Container = styled.View`
    padding: 16px;
    height: 100%;
  `;
  
  const CustomText = styled.Text`
    font-size: 18px;
  `;
  
  const PhotoList = styled.FlatList`
    padding: 8px;
  `;
  
  const styles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
    },
  });
  
  export default AlbumDetails;
  