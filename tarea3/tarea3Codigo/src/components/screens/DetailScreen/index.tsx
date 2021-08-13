import React from 'react';
import styled from '@emotion/native';
import {Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { usePhotos } from '../../../contexts/photos-context';
import AlbumDetail from '../../organisms/AlbumDetail';


export default class DetailScreen extends React.Component {
  
  render() {
    const titulo =  this.props.titulo;
    const index = this.props.index;
    return (
      <AlbumDetail titulo={titulo} index={index}  />
    );
  }
}