import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_PHOTOS} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
import IPhoto from '../../../models/IPhotos';

export const actualizarPhotos= (payload: IPhoto[]): IAction => {
  console.log(payload);
  return {
    type: ACTUALIZAR_PHOTOS,
    payload,
  };
};

export const fetchPhotos =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const photoResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      dispatch(actualizarPhotos(photoResponse.data));
    } catch (error) {
      console.error(error);
    }
  };