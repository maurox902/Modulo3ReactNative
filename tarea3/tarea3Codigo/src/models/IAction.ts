import IAlbum from './IAlbumes';
import IPhoto from './IPhotos';

export interface IAction {
  type: string;
  payload?: string | number | IPhoto[] | IAlbum[];
}