import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type IconProps = {
  color?: string;
};

type ButtonAmountProps = {
  background?: string;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin: 5px 0 5px 5px;
`;

export const InfoArea = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 50%;
  width: 100%;
`;

export const PhotoArea = styled.View.attrs({
  shadowColor: '#030C17',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 8,
})`
  width: 100px;
  height: 75px;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 90%;
  height: 90%;
`;

export const InfoTextArea = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const Description = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.gray};
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
  margin-top: 5px;
`;

export const AmountArea = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const AmountText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  margin: 0 7px;
`;

export const ButtonAmount = styled.TouchableOpacity<ButtonAmountProps>`
  background: ${props =>
    props.background ? props.background : props.theme.colors.white};

  border-width: 1px;
  border-color: ${props => props.theme.colors.green};
  align-items: center;
  justify-content: center;
  padding: 1.5%;
  border-radius: 3px;
`;

export const Icon = styled(AntDesign)<IconProps>`
  font-size: 12px;
  color: ${props => (props.color ? props.color : props.theme.colors.green)};
`;
