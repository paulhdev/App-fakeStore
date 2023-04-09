import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import CartProvider from './src/contexts/CartContext';

import theme from './src/global/theme';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <CartProvider>
          <StatusBar backgroundColor={theme.colors.green} barStyle="light-content" animated />
          <Routes />
        </CartProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
