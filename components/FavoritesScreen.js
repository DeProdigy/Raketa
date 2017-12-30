import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FavoritesScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Favorites',
  };

  render() {
    return (
      <View>
        <Text>Favorites</Text>
      </View>
    );
  }
}
