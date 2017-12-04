import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import InputsScreen from './InputsScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Inputs: {
    screen: InputsScreen,
    navigationOptions: {
      headerTitle: 'Inputs',
    },
  },
});

export default RootNavigator;
