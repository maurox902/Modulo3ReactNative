import {IPhotosReducerState} from '../store/reducers/Photos';
import {IAlbumesState} from '../store/reducers/Albumes';

export interface IState {
  Albumes: IAlbumesState;
  Photos: IPhotosReducerState;
}
