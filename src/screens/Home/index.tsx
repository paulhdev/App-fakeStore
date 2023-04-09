import { useEffect, useState } from 'react';
import { ActivityIndicator, ListRenderItemInfo, FlatList } from 'react-native';

import {
  Container,
  InputSearchArea,
  InputSearch,
  ButtonSearch,
  Icon,
  Title,
} from './styles';

import api from '../../services/api';
import ProductCard, { ProductProps } from '../../components/ProductCard';
import theme from '../../global/theme';

export default function Home() {

  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const result = await api.get('/products');

      if (result.data) {
        setProducts(result.data);
      }
    }
    catch (error) {
      // console.log('ERROR: ', error);
    }
    finally {
      setLoadingProducts(false);
    }
  };

  const renderItem = ({ item }: ListRenderItemInfo<ProductProps>) => <ProductCard {...item} />;

  return (
    <Container>

      <InputSearchArea>
        <InputSearch
          placeholder="Search for a product..."
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <ButtonSearch>
          <Icon name="search1" />
        </ButtonSearch>
      </InputSearchArea>

      {
        loadingProducts ?
          <ActivityIndicator color={theme.colors.green} size="large" />
          :
          <FlatList
            ListHeaderComponent={<Title>Hot Sales</Title>}
            data={products}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
      }
    </Container>
  );
}
