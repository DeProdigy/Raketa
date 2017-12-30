import React from 'react';
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Top100Screen from './components/Top100Screen';
import FavoritesScreen from './components/FavoritesScreen';

const App = TabNavigator({
  Top100: {
    screen: Top100Screen,
    navigationOptions: {
      tabBarLabel: 'Top100',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: 'https://www.moneymetals.com/images/products/10-dollar-liberty-gold-coin-20140321124620.jpg'}}
          style={{width: 20, height: 20}}
        />
      ),
    }
  },
  Favorites: {
    screen: FavoritesScreen,
  },
}, {
  swipeEnabled: true,
  animationEnabled: true,
});

export default App;
