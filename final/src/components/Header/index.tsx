import React from "react";
import { Text, View, Image } from "react-native";

import  { Container }from "./styles";

export default function Header() {
  return (
    <Container>
      <Image source={require("../../assets/login/gov.png")} style={{width: 100, height: 100, resizeMode: "contain"}}/>

      <View style={{flexDirection: 'row'}}>
       <Image source={require("../../assets/login/theme.png")}/>
       <Image source={require("../../assets/login/libras.png")}/>
      </View>
    </Container>
  )
}