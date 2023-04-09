import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;
