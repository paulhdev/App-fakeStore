import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
  padding: 5%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  margin-bottom: 20px;
`;

export const EmptyArea = styled.View`
  width: 100%;
  align-items: center;
  margin: 30px 0;
`;

export const EmptyText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.black};
  margin-top: 30px;
`;
