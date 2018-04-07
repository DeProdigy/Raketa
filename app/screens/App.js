import { Navigation } from 'react-native-navigation'
import { registerScreens } from './index'
import Colors from '../shared/styles/Colors'

registerScreens()

const navigatorStyle = {
  screenBackgroundColor: Colors.rkDarkBlue,
  statusBarTextColorScheme: 'light',
  navBarButtonColor: Colors.rkPureWhite,
  navBarBackgroundColor: Colors.rkNavBarBlue,
  navBarNoBorder: true,
}

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'Top100Screen', // this is a registered name for a screen
      icon: require('../assets/images/icon-top100.png'),
      selectedIcon: require('../assets/images/icon-top100-selected.png'),
      titleImage: require('../assets/images/logo-navbar.png'),
      label: 'Top 100',
      navigatorStyle,
    },
    {
      screen: 'FavoritesScreen',
      icon: require('../assets/images/icon-favorites.png'),
      selectedIcon: require('../assets/images/icon-favorites-selected.png'),
      titleImage: require('../assets/images/logo-navbar.png'),
      title: 'Favorites',
      label: 'Favorites',
      navigatorStyle,
    },
  ],
  tabsStyle: {
    tabBarTranslucent: false,
    tabBarBackgroundColor: Colors.rkNavBarBlue,
    tabBarSelectedButtonColor: Colors.rkPureWhite,
  },
  appStyle: {
    orientation: 'portrait',
  },
})
