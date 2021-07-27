import React from 'react';
import HomeScreen from './src/components/screens/HomeScreen';
import DetailScreen from './src/components/screens/DetailsScreen';
import {Scene, Router} from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="home"
            component={HomeScreen}
            title="Lista de Albumnes"
            initial={true}
          />
          <Scene
            key="detail"
            component={DetailScreen}
            title="Detalle de Album"
          />
        </Scene>
      </Router>
    );
  }
}
