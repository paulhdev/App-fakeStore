import { useEffect, useMemo, useState } from 'react';
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

  const filteredProducts = useMemo(() => {
    return products?.filter(product => search ? product.title.toString().toLowerCase().includes(search.toLocaleLowerCase()) : true);
  }, [search, products]);

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
        {
          search ?
            <ButtonSearch onPress={() => setSearch('')}>
              <Icon name="close" />
            </ButtonSearch>
            :
            <ButtonSearch>
              <Icon name="search1" />
            </ButtonSearch>
        }
      </InputSearchArea>

      {
        loadingProducts ?
          <ActivityIndicator color={theme.colors.green} size="large" />
          :
          <FlatList
            ListHeaderComponent={<Title>Hot Sales</Title>}
            data={filteredProducts}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
      }
    </Container>
  );
}
