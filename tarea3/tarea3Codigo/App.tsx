import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import HomeScreen from './src/components/screens/HomeScreen';
import * as reducers from './src/store/reducers';
import thunk from 'redux-thunk';
import {PhotosProvider} from './src/contexts/photos-context';
import {AlbumesProvider} from './src/contexts/albumes-context';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
       <PhotosProvider>
        <AlbumesProvider>
          <SafeAreaView>
            <HomeScreen />
          </SafeAreaView>
        </AlbumesProvider>
      </PhotosProvider>
    </Provider>
  );
};

export default App;
