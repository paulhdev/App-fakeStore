import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import theme from '../global/theme';

import Home from '../screens/Home';
import Product from '../screens/Product';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';

import { ProductProps } from '../components/ProductCard';

export type AppStackParamList = {
  Home: undefined;
  Product: ProductProps;
  Favorites: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<AppStackParamList>();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
      />
      <Stack.Screen
        name="Product"
        component={Product}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
      />
    </Stack.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.green,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="hearto" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="shoppingcart" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
