import { useContext } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import {
  Container,
  Title,
  ListLine,
} from './styles';

import { CartContext, ProductCartProps } from '../../contexts/CartContext';
import ListCartProduct from '../../components/ListCartProduct';

export default function Cart() {

  const { cart } = useContext(CartContext);

  const renderItem = ({ item }: ListRenderItemInfo<ProductCartProps>) => <ListCartProduct product={item.product} amount={item.amount} total={item.total} />;

  return (
    <Container>
      <Title>Cart</Title>

      {
        cart.length <= 0 ?
          <Title>Nada no carrinho...</Title>
          :
          <FlatList
            data={cart}
            keyExtractor={item => item.product.id}
            renderItem={renderItem}
            ItemSeparatorComponent={<ListLine />}
          />
      }

    </Container>
  );
}
