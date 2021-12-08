import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
  width: ${({full}: string | any) => full ? '100%' : "130px"};
  padding: 10px;
  border-radius: ${({radius}: string | any) => radius ? radius : "6px"};
  background-color: ${({bgColor}: string | any) => bgColor ? bgColor : '#000'};

  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: #fff;
`;