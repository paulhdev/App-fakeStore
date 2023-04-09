import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from '../../routes/app.routes';
import theme from '../../global/theme';

import {
  Container,
  Header,
  HeaderButton,
  Icon,
  PhotoArea,
  Photo,
  Title,
  Name,
  Description,
  ContentArea,
  Line,
  PriceArea,
  Price,
  RatingArea,
  RatingInfoArea,
  RatingCount,
  RatingRate,
  ButtonAddToCart,
  ButtonText,
  FavoriteArea,
  CategoryArea,
  CategoryText,
  FavoriteButton,
} from './styles';

import { isFavorite, saveFavorite, removeFavorite } from '../../utils/storage';
import { ProductProps } from '../../components/ProductCard';
import { CartContext } from '../../contexts/CartContext';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Product'>;

export default function Product({ route }: ScreenProps) {

  const { addToCart } = useContext(CartContext);

  const navigation = useNavigation();

  const [favorite, setFavorite] = useState(false);

  const product: ProductProps = {
    id: route.params.id,
    category: route.params.category,
    title: route.params.title,
    image: route.params.image,
    description: route.params.description,
    price: route.params.price,
    rating: route.params.rating,
  };

  const getFavoriteStatus = async () => {
    const favoriteProduct = await isFavorite(product);
    setFavorite(favoriteProduct);
  };

  const handleToggleFavorite = async () => {
    if (favorite) {
      await removeFavorite(product.id);
      setFavorite(false);
      return;
    }

    saveFavorite('@appfakestore', product);
    setFavorite(true);
  };

  useEffect(() => {
    getFavoriteStatus();
  }, []);

  return (
    <Container>

      <Header>
        <Title >Product Details</Title>
        <HeaderButton onPress={() => navigation.goBack()}>
          <Icon name="close" />
        </HeaderButton>
      </Header>

      <ContentArea showsVerticalScrollIndicator={false}>

        <PhotoArea>
          <Photo source={{ uri: product.image }} />
        </PhotoArea>

        <FavoriteArea>
          <CategoryArea>
            <CategoryText>{product.category}</CategoryText>
          </CategoryArea>
          <FavoriteButton onPress={handleToggleFavorite}>
            <Icon name={favorite ? 'heart' : 'hearto'} color={theme.colors.green} />
          </FavoriteButton>
        </FavoriteArea>

        <Name>{product.title}</Name>
        <Description>{product.description}</Description>

        <Line />

        <PriceArea>
          <Price>$ {Number(product.price).toFixed(2)}</Price>
          <RatingArea>
            <RatingInfoArea>
              <Icon name="star" color={theme.feedback.warning} size={16} />
              <RatingRate>{product.rating.rate}</RatingRate>
            </RatingInfoArea>
            <RatingCount>Reviews {product.rating.count}</RatingCount>
          </RatingArea>
        </PriceArea>

        <ButtonAddToCart
          onPress={() => addToCart(product)}
        >
          <ButtonText>Add To Cart</ButtonText>
        </ButtonAddToCart>

      </ContentArea>


    </Container>
  );
}
