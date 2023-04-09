import { useContext } from 'react';
import {
  Container,
  InfoArea,
  PhotoArea,
  Photo,
  InfoTextArea,
  Name,
  Description,
  Price,
  AmountArea,
  ButtonAmount,
  Icon,
  AmountText,
} from './styles';

import { CartContext, ProductCartProps } from '../../contexts/CartContext';
import theme from '../../global/theme';

export default function ListCartProduct({ product, amount, total }: ProductCartProps) {

  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <InfoArea>
        <PhotoArea>
          <Photo source={{ uri: product.image }} />
        </PhotoArea>
        <InfoTextArea>
          <Name numberOfLines={1}>{product.title}</Name>
          <Description numberOfLines={2}>
            {product.description}
          </Description>
          <Price>$ {Number(total).toFixed(2)}</Price>
        </InfoTextArea>
      </InfoArea>
      <AmountArea>
        <ButtonAmount>
          <Icon name="minus" />
        </ButtonAmount>
        <AmountText>{amount}</AmountText>
        <ButtonAmount
          onPress={() => addToCart(product)}
          background={theme.colors.green}
        >
          <Icon name="plus" color={theme.colors.white} />
        </ButtonAmount>
      </AmountArea>
    </Container>
  );
}
