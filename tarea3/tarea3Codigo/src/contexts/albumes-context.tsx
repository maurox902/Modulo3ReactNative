import axios from 'axios';
import React, {createContext, useContext, useState, useMemo} from 'react';
import IAlbum from '../models/IAlbumes';

interface AlbumesContextProps {
  albumes: IAlbum[];
  setAlbumes: (albumes: IAlbum[]) => void;
  selectedAlbum: number | null;
  setselectedAlbum: (album: number | null) => void;
  fetchAlbumes: () => Promise<void>;
}

const AlbumesContext = createContext<AlbumesContextProps>({
  albumes: [],
  setAlbumes: () => {},
  selectedAlbum: null,
  setselectedAlbum: () => {},
  fetchAlbumes: () => Promise.resolve(),
});

export const AlbumesProvider: React.FC = ({children}) => {
  const [albumes, setAlbumes] = useState<IAlbum[]>([]);
  const [selectedAlbum, setselectedAlbum] = useState<number | null>(null);

  const fetchAlbumes = async () => {
    try {
      const albumes = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );
      setAlbumes(albumes.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = useMemo(() => {
    return {albumes, setAlbumes, selectedAlbum, setselectedAlbum, fetchAlbumes};
  }, [albumes, setAlbumes, selectedAlbum, setselectedAlbum, fetchAlbumes]);

  return <AlbumesContext.Provider value={val}>{children}</AlbumesContext.Provider>;
};

export const useAlbumes = () => useContext(AlbumesContext);
