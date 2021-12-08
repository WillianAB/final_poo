import React from 'react'
import { Text, ScrollView } from "react-native"


import Header from '../../components/Header'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container, Card, Icon, Line, Identify, OpDivider } from "./styles"

export default function Login(): JSX.Element{
  return (
    <Container>
      <Header/>
      <ScrollView>
        <Card>
          <Identify>Identifique-se no gov.br com:</Identify>
            <Line>
              <Icon source={require("../../assets/login/doc.png")}/>
              <Text>Número do CPF</Text>
            </Line>
            <Line>
              <Text>Digite seu CPF para criar ou acessar sua conta gov.br</Text>
            </Line>
            <Line>
              <Input label="CPF" placeholder="Digite seu CPF"/>
            </Line>
            <Button label="Continuar" radius="50px" full bgColor="#FABD10"/>
            <OpDivider>
              <Line>
                <Text>Outras opções de identificação:</Text>
              </Line>
            </OpDivider>
            <Line>
            <Icon source={require("../../assets/login/mobile.png")}/>
              <Text>Seu banco</Text>
            </Line>

            <Line>
            <Icon source={require("../../assets/login/locked.png")}/>
              <Text>Seu certificado digital em nuvem</Text>
            </Line>
        </Card>
        </ScrollView>
    </Container>
  )
}
