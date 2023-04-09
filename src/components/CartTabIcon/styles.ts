import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View``;

export const Icon = styled(AntDesign)`
  position: relative;
`;

export const Label = styled.Text`
  position: absolute;
  bottom: 0;
  right: -8%;
  font-size: 10px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.green};
  padding: 1% 3.5%;
  border-radius: 500px;
`;
