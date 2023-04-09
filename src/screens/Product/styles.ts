import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type IconProps = {
  size?: number;
  color?: string;
};

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
  padding: 5%;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.white};
  z-index: 1;
  margin-bottom: 30px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 21px;
  background: ${props => props.theme.colors.grayLight};
`;

export const Icon = styled(AntDesign)<IconProps>`
  font-size: ${props => (props.size ? props.size : '24')}px;
  color: ${props => (props.color ? props.color : props.theme.colors.gray)};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

export const ContentArea = styled.ScrollView`
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
  background: ${props => props.theme.colors.white};
  align-items: center;
  justify-content: space-between;
  padding: 3%;
  margin: 5px auto 30px auto;
  border-radius: 7px;
  width: 98%;
`;

export const Photo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 90%;
  height: 200px;
`;

export const FavoriteArea = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const FavoriteButton = styled.TouchableOpacity``;

export const CategoryArea = styled.View`
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.black};
  padding: 3px 7px;
  border-radius: 4px;
`;

export const CategoryText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
  margin-top: 10px;
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.colors.grayLight};
  border-radius: 2px;
  margin: 20px 0;
`;

export const PriceArea = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

export const RatingArea = styled.View`
  align-items: flex-end;
`;

export const RatingInfoArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RatingCount = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.gray};
`;

export const RatingRate = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  margin-left: 5px;
`;

export const ButtonAddToCart = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin: 30px 0;
  background: ${props => props.theme.colors.green};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`;
