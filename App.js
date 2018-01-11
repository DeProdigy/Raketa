import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Top100Screen from './components/Top100Screen';
import FavoritesScreen from './components/FavoritesScreen';
import Navbar from './components/Navbar';
import appStyles from './styles/AppStyles';

const TabNav = TabNavigator({
  Top100: {
    screen: Top100Screen,
    navigationOptions: {
      tabBarLabel: 'Top100',
    }
  },
  Favorites: {
    screen: FavoritesScreen,
  },
}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
  activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'blue',
  },
}

});

const App = () => (
  <View style={appStyles.container}>
    <TabNav />
    <Navbar />
  </View>
);

export default App;
