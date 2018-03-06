import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import coinListCellFavoritesButtonStyles from './CoinListCellFavoritesButtonStyles'

export default class CoinListCellFavoritesButton extends Component {

handlePress = () => {
  Realm.open({}).then(realm => {
    realm.write(() => {
      realm.create('Favorite', {id: this.props.id, symbol: this.props.symbol});
    });
  });
}

render() {
  const s = coinListCellFavoritesButtonStyles

  return (
    <TouchableOpacity
      style={s.favoritesButton}
      onPress={this.handlePress}>
      <View style={s.favoritesButtonImageText}>
        <Image
          style={s.favoritesButtonIcon}
          source={require('../../../assets/images/icon-addfavorites.png')}
        />
        <Text style={s.favoritesButtonText}>Add to Favorites</Text>
      </View>
    </TouchableOpacity>
  )
}
}
