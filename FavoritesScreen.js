import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles/MainStyles';
import CoinList from './CoinList';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Favorites',
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        style={styles.button}
        title="Go back to home tab"
        onPress={() => goBack()}
      />
    );
  }
}
