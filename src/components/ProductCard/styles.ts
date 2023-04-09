import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.TouchableOpacity`
  width: 46%;
  margin: 1% 3% 5% 1%;
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
  width: 100%;
  height: 150px;
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

export const RatingArea = styled.View`
  position: absolute;
  bottom: 5%;
  left: 5%;
  flex-direction: row;
  align-items: center;
  background: ${props => props.theme.colors.black};
  padding: 3px 7px;
  border-radius: 4px;
`;

export const NumberRating = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;

export const Icon = styled(AntDesign)`
  font-size: 14px;
  color: ${props => props.theme.feedback.warning};
  margin-right: 3px;
`;

export const NameArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 5px 0;
`;

export const Name = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const Price = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const Description = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.colors.gray};
`;
