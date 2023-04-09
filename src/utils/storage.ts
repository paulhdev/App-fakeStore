import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProductProps} from '../components/ProductCard';

export async function getFavorites(key: string) {
  const favorites = await AsyncStorage.getItem(key);
  return JSON.parse(favorites!) || [];
}

export async function saveFavorite(key: string, product: ProductProps) {
  const myFavorites = await getFavorites(key);

  const hasItem = myFavorites.some(
    (item: ProductProps) => item.id === product.id,
  );

  if (hasItem) {
    return;
  }

  myFavorites.push(product);

  await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
}

export async function removeFavorite(id: number) {
  const products = await getFavorites('@appfakestore');

  const myFavorites = products.filter((item: ProductProps) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem('@appfakestore', JSON.stringify(myFavorites));

  return myFavorites;
}

export async function isFavorite(product: ProductProps) {
  const myProducts = await getFavorites('@appfakestore');

  const favorite = myProducts.find(
    (item: ProductProps) => item.id === product.id,
  );

  if (favorite) {
    return true;
  }

  return false;
}
