import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_SELECTED_ALBUM, ACTUALIZAR_ALBUMES} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
import IUser from '../../../models/IAlbumes';

export const actualizarAlbumes = (payload: IUser[]) => ({
  type: ACTUALIZAR_ALBUMES,
  payload,
});

export const actualizarSelectedAlbum = (payload: number | null) => ({
  type: ACTUALIZAR_SELECTED_ALBUM,
  payload,
});

export const fetchAlbumes =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const albumReponse = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );
      dispatch(actualizarAlbumes(albumReponse.data));
    } catch (error) {
      console.error(error);
    }
  };
