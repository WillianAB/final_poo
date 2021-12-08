import React from 'react';

import { Container, Label } from "./styles"

type ButtonProps = {
  label: string;
  full?: string;
  width?: string;
  radius?: string | undefined;
  bgColor?:string | undefined;
}

export default function Button({label, full, width, radius, bgColor, ...rest}: ButtonProps) {
  return (
    <Container activeOpacity={0.8} {...rest} radius={radius} bgColor={bgColor} full={full}>
      <Label>{label}</Label>
    </Container>
  )
}
