import React from 'react';
import { View, Text } from "react-native";

import Button from '../../components/Button';

import { Container, Logo, Title, LogoImage } from './styles';

export default function Entry({navigation}): JSX.Element {
  return (
  <Container>
      <Logo>
        <LogoImage source={require("../../assets/entry/brasao.png")}/>
        <Title>carteira de trabalho digital</Title>
      </Logo>
      <Button label="ENTRAR" full bgColor="#1351b4" onPress={() => {navigation.navigate("Login")}}/>
  </Container>);
}