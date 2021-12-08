import React from 'react'

import {Text} from "react-native"

import {Container, CustomInput } from "./styles"


type InputProps =  {
  label: string;
}

export default function Input({label, ...rest}: InputProps): JSX.Element {
  return (
    <Container>
      <Text>{label}</Text>
      <CustomInput {...rest}/>
    </Container>
  )
}
