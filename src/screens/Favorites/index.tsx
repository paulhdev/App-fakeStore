import { useEffect, useState } from 'react';
import { ListRenderItemInfo, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import ProductCard, { ProductProps } from '../../components/ProductCard';

import {
  Container,
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
          <Title>Nada no momento :\</Title>
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
