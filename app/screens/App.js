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

const navigatorButtons = {
  rightButtons: [
    {
      buttonColor: 'red',
    },
    {
      icon: require('../assets/images/icon-settings.png'),
      id: 'settings',
    },
  ],
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
      navigatorButtons,
    },
    {
      screen: 'MoversScreen',
      icon: require('../assets/images/icon-movers.png'),
      selectedIcon: require('../assets/images/icon-movers-selected.png'),
      titleImage: require('../assets/images/logo-navbar.png'),
      title: 'Movers',
      label: 'Movers',
      navigatorStyle,
      navigatorButtons,

    },
    {
      screen: 'FavoritesScreen',
      icon: require('../assets/images/icon-favorites.png'),
      selectedIcon: require('../assets/images/icon-favorites-selected.png'),
      titleImage: require('../assets/images/logo-navbar.png'),
      title: 'Favorites',
      label: 'Favorites',
      navigatorStyle,
      navigatorButtons,
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
