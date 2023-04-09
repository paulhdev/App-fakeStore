import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
  padding: 5%;
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

export const TitleArea = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const TitleButton = styled.TouchableOpacity``;

export const TitleButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.gray};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

export const ListLine = styled.View`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: ${props => props.theme.colors.grayLight};
  margin: 20px 0;
`;

export const CheckoutArea = styled.View``;

export const TotalArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.gray};
`;

export const TotalValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.green};
`;

export const ButtonCheckout = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  margin: 15px 0 5px 0;
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
