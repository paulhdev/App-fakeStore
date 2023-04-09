import { useContext } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo } from 'react-native';
import Lottie from 'lottie-react-native';

import {
  Container,
  Title,
  ListLine,
  TotalArea,
  CheckoutArea,
  TotalText,
  TotalValue,
  ButtonCheckout,
  ButtonText,
  EmptyArea,
  EmptyText,
} from './styles';

import { CartContext, ProductCartProps } from '../../contexts/CartContext';
import ListCartProduct from '../../components/ListCartProduct';
import theme from '../../global/theme';

export default function Cart() {

  const { cart, loadingCart, total } = useContext(CartContext);

  const renderItem = ({ item }: ListRenderItemInfo<ProductCartProps>) => <ListCartProduct product={item.product} amount={item.amount} total={item.total} />;

  return (
    <Container>
      <Title>My Cart</Title>

      {
        cart.length <= 0 ?
          <EmptyArea>
            <Lottie
              source={require('../../assets/animations/empty-cart.json')}
              autoPlay
              loop
              style={{ width: 250 }}
            />
            <EmptyText>Your cart is empty...</EmptyText>
          </EmptyArea>
          :
          <>
            <FlatList
              data={cart}
              keyExtractor={item => item.product.id}
              renderItem={renderItem}
              ItemSeparatorComponent={<ListLine />}
            />
            <CheckoutArea>
              <ListLine />
              <TotalArea>
                <TotalText>Total:</TotalText>
                {
                  loadingCart ?
                    <ActivityIndicator color={theme.colors.green} size="small" />
                    :
                    <TotalValue>$ {total.toFixed(2)}</TotalValue>
                }
              </TotalArea>
              <ButtonCheckout disabled={loadingCart}>
                <ButtonText>Continue</ButtonText>
              </ButtonCheckout>
            </CheckoutArea>
          </>
      }

    </Container>
  );
}
