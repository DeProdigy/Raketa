import { Navigation } from 'react-native-navigation'
import Top100Screen from './Top100Screen/Top100Screen'
import FavoritesScreen from './FavoritesScreen/FavoritesScreen'

export function registerScreens() {
  Navigation.registerComponent('Top100Screen', () => Top100Screen)
  Navigation.registerComponent('FavoritesScreen', () => FavoritesScreen)
}
