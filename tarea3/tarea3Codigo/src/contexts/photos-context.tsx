import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';
import IPhoto from '../models/IPhotos';

interface PhotosContextProps {
  photos: IPhoto[];
  setPhotos: (photos: IPhoto[]) => void;
  fetchPhotosContext: () => Promise<void>;
}

const PhotosContext = createContext<PhotosContextProps>({
  photos: [],
  setPhotos: () => {},
  fetchPhotosContext: () => Promise.resolve(),
});

export const PhotosProvider: React.FC = ({children}) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const fetchPhotosContext = async () => {
    try {
      const photos = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      setPhotos(photos.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = {photos, setPhotos, fetchPhotosContext};

  return (
    <PhotosContext.Provider value={val}>
      {children}
    </PhotosContext.Provider>
  );
};

export const usePhotos = () => useContext(PhotosContext);
