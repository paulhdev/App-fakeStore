import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import theme from '../../global/theme';
import { AppStackParamList } from '../../routes/app.routes';

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
} from './styles';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Product'>;

export default function Product({ route }: ScreenProps) {

  const navigation = useNavigation();

  const {
    title,
    image,
    description,
    category,
    price,
    rating,
  } = route.params;

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
          <Photo source={{ uri: image }} />
        </PhotoArea>

        <Name>{title}</Name>
        <Description>{description}</Description>

        <Line />

        <PriceArea>
          <Price>$ {price}</Price>
          <RatingArea>
            <RatingInfoArea>
              <Icon name="star" color={theme.feedback.warning} size={16} />
              <RatingRate>{rating.rate}</RatingRate>
            </RatingInfoArea>
            <RatingCount>Reviews {rating.count}</RatingCount>
          </RatingArea>
        </PriceArea>

        <ButtonAddToCart>
          <ButtonText>Add To Cart</ButtonText>
        </ButtonAddToCart>

      </ContentArea>


    </Container>
  );
}
