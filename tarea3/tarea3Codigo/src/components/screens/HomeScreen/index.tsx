import React from 'react';
import {SafeAreaView} from 'react-native';
import AlbumDetail from '../../molecules/AlbumDetail';
import AlbumList from '../../organisms/AlbumList';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as reducers from '../../../store/reducers';
import thunk from 'redux-thunk';
import {PhotosProvider} from '../../../contexts/photos-context';
import {AlbumesProvider} from '../../../contexts/albumes-context';


const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk)),
);

const HomeScreen: React.FC = () => {
  return (
    <Provider store={store}>
       <PhotosProvider>
        <AlbumesProvider>
          <SafeAreaView>
          <AlbumList />
          </SafeAreaView>
        </AlbumesProvider>
      </PhotosProvider>
    </Provider>
  );
};

export default HomeScreen;



