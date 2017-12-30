import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles/MainStyles';


export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Favorites',
  };

  render() {
    return (
      <View style={styles.container}>
          <Text>Favorites</Text>
      </View>
    );
  }
}
