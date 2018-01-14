import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'Top100Screen', // this is a registered name for a screen
      // icon: require('../img/one.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'FavoritesScreen',
      // icon: require('../img/two.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});
