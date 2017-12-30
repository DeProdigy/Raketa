import { TabNavigator } from 'react-navigation';
import Top100Screen from './components/Top100Screen';
import FavoritesScreen from './components/FavoritesScreen';

const App = TabNavigator({
  Top100: { screen: Top100Screen },
  Favorites: { screen: FavoritesScreen },
}, {
  swipeEnabled: true,
  animationEnabled: true,
});

export default App;
