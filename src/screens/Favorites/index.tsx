import { useEffect, useState } from 'react';
import { ListRenderItemInfo, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import ProductCard, { ProductProps } from '../../components/ProductCard';

import {
  Container,
  EmptyArea,
  EmptyText,
  Title,
} from './styles';

import { getFavorites } from '../../utils/storage';

export default function Favorites() {

  const isFocused = useIsFocused();

  const [favorites, setFavorites] = useState<ProductProps[] | []>([]);

  useEffect(() => {

    let isActive = true;

    async function getMyFavorites() {
      const products = await getFavorites('@appfakestore');
      setFavorites(products);
    }

    if (isActive) {
      getMyFavorites();
    }

    return () => {
      isActive = false;
    };

  }, [isFocused]);

  const renderItem = ({ item }: ListRenderItemInfo<ProductProps>) => <ProductCard {...item} />;

  return (
    <Container>

      <Title>My Favorites</Title>

      {
        favorites.length === 0 ?
          <EmptyArea>
            <Lottie
              source={require('../../assets/animations/empty-fav.json')}
              autoPlay
              loop
              style={{ width: 250 }}
            />
            <EmptyText>You have no favorites...</EmptyText>
          </EmptyArea>
          :
          <FlatList
            data={favorites}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
      }

    </Container>
  );
}
