import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import coinListCellFavoritesButtonStyles from './CoinListCellFavoritesButtonStyles'

export default class CoinListCellFavoritesButton extends Component {
state ={

}

render() {
  const s = coinListCellFavoritesButtonStyles

  return (
    <TouchableOpacity style={s.favoritesButton}>
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
