import { useContext } from 'react';
import {
  Container,
  Icon,
  Label,
} from './styles';

import { CartContext } from '../../contexts/CartContext';

type CartIconProps = {
  color: string;
  size: number;
};

export default function CartTabIcon({ color, size }: CartIconProps) {

  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Icon name="shoppingcart" color={color} size={size} />
      {
        cart.length > 0 &&
        <Label>
          {cart.length <= 99 ? cart.length : '99+'}
        </Label>
      }
    </Container>
  );
}
