import React from 'react';
import styled from '@emotion/native';
import {Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class DetailScreen extends React.Component {
  render() {
    const titulo = this.props.titulo || 'No Titulo';
    const foto = this.props.foto || 'No Foto';
    return (
      <CustomContainer>
        <CustomText>Titulo: {titulo}</CustomText>
        <CustomImage source={{uri: foto}} />
        <Button title="Atras" onPress={() => Actions.pop()}></Button>
      </CustomContainer>
    );
  }
}

const CustomContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
`;

const CustomText = styled.Text`
  font-size: 18px;
`;

const CustomImage = styled.Image`
  width: 70%;
  height: 60%;
`;
