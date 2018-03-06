import React, { Component } from 'react'
import { View, Text } from 'react-native'
import favoritesScreenStyles from './FavoritesScreenStyles'
const Realm = require('realm');

export default class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    Realm.open({}).then(realm => {
      this.setState({ realm });
    });
  }

  render() {
    const info = this.state.realm
      ? 'Number of Favorites in this Realm: ' + this.state.realm.objects('Favorite').length
      : 'Loading...';

    return (
      <View style={favoritesScreenStyles.container}>
        <Text>
          {info}
        </Text>
      </View>
    );
  }
}
