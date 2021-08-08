import {IAction} from '../../../models/IAction';
import IAlbum from '../../../models/IAlbumes';
import {ACTUALIZAR_SELECTED_ALBUM, ACTUALIZAR_ALBUMES} from '../../actions';

export interface IAlbumesState {
  albumes: IAlbum[];
  selectedAlbum: number | null;
}

const initialState: IAlbumesState = {
  albumes: [],
  selectedAlbum: null,
};

export default (state = initialState, {type, payload}: IAction) => {
  switch (type) {
    case ACTUALIZAR_ALBUMES:
      return {...state, albumes: payload as IAlbum[]};

    case ACTUALIZAR_SELECTED_ALBUM:
      return {...state, selectedAlbum: payload as number | null};

    default:
      return state;
  }
};
