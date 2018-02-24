import { Navigation } from 'react-native-navigation'
import { registerScreens } from './index'
import Colors from '../styles/Colors'

registerScreens()

const navigatorStyle = {
  screenBackgroundColor: '#000000',
  drawUnderNavBar: true,
  drawUnderTabBar: true,
  navBarTranslucent: false,
  navBarBackgroundColor: Colors.rkNavBarBlue,
  statusBarTextColorScheme: 'light',
  navBarButtonColor: Colors.rkPureWhite,
  topBarElevationShadowEnabled: true,
  topBarShadowOpacity: 0.5,
  topBarShadowOffset: 0.2,
  topBarShadowRadius: 1.5,
}

const navigatorButtons = {
  rightButtons: [
    {
      buttonColor: 'red',
    },
    {
      icon: require('../config/images/icon-settings.png'),
      id: 'settings',
    },
  ],
}

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'Top100Screen', // this is a registered name for a screen
      icon: require('../config/images/icon-top100.png'),
      selectedIcon: require('../config/images/icon-top100-selected.png'),
      titleImage: require('../config/images/logo-navbar.png'),
      label: 'Top 100',
      navigatorStyle,
      navigatorButtons,
    },
    {
      screen: 'MoversScreen',
      icon: require('../config/images/icon-movers.png'),
      selectedIcon: require('../config/images/icon-movers-selected.png'),
      title: 'Movers',
      label: 'Movers',
      navigatorStyle,
      navigatorButtons,

    },
    {
      screen: 'FavoritesScreen',
      icon: require('../config/images/icon-favorites.png'),
      selectedIcon: require('../config/images/icon-favorites-selected.png'),
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
