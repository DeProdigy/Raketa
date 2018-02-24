import { Navigation } from 'react-native-navigation'
import Top100Screen from './Top100Screen'
import MoversScreen from './MoversScreen'
import FavoritesScreen from './FavoritesScreen'

export function registerScreens() {
  Navigation.registerComponent('Top100Screen', () => Top100Screen)
  Navigation.registerComponent('MoversScreen', () => MoversScreen)
  Navigation.registerComponent('FavoritesScreen', () => FavoritesScreen)
}
