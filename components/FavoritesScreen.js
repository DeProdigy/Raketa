import React from 'react';
import { View, Text, Button } from 'react-native';

export default class FavoritesScreen extends React.Component {
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
