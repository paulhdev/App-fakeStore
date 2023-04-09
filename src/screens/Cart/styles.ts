import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
  padding: 5%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
  margin-bottom: 30px;
`;

export const ListLine = styled.View`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: ${props => props.theme.colors.grayLight};
  margin: 20px 0;
`;
