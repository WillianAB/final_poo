import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: 90px;

`;

export const Card = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  elevation: 1;
  border-radius: 4px;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const Line = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const Identify = styled.Text`
  font-weight: bold;
  margin-bottom: 40px;
`;

export const OpDivider = styled.View`
  margin-top: 25px;
  border-bottom-width: 0.5px;
  border-color: #FABD10;
  margin-bottom: 25px;

`;
