import { TabNavigator } from 'react-navigation';

import Top100Screen from './Top100Screen';
import FavoritesScreen from './FavoritesScreen';

const App = TabNavigator({
  Top100: { screen: Top100Screen },
  Favorites: { screen: FavoritesScreen },
}, {
  swipeEnabled: true,
  animationEnabled: true,
});

export default App;
