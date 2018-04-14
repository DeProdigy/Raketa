import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import coinListCellFavoritesButtonStyles from './CoinListCellFavoritesButtonStyles'
import realm from '../../../db/realm'

export default class CoinListCellFavoritesButton extends Component {
  state = {
    alreadyInFavorites: false,
    favorites: realm.objects('Favorites'),
  }

  componentDidMount() {
    if (this.state.favorites.filtered('id = $0', this.props.id).length > 0) {
      this.setState({ alreadyInFavorites: true })
    }
  }

  addToFavorites = () => {
    realm.write(() => {
      realm.create('Favorites', {id: this.props.id, symbol: this.props.symbol})
    })

    this.setState({alreadyInFavorites: !this.state.alreadyInFavorites})
    this.props.onFavorite()
  }

  removeFromFavorites = () => {
    let favorite = realm.objects('Favorites').filtered('id = $0', this.props.id)

    realm.write(() => {
      realm.delete(favorite)
    })

    this.setState({alreadyInFavorites: !this.state.alreadyInFavorites})
    this.props.onFavorite()
  }

  render() {
    let containerView
    const s = coinListCellFavoritesButtonStyles

    if (this.state.alreadyInFavorites) {
      containerView = (<TouchableOpacity
        style={s.favoritesButton}
        onPress={this.removeFromFavorites}>
        <View style={s.favoritesButtonImageText}>
          <Image
            style={s.favoritesButtonIcon}
            source={require('../../../assets/images/icon-addfavorites.png')}
          />
          <Text style={s.favoritesButtonText}>Remove from Favorites</Text>
        </View>
      </TouchableOpacity>)
    } else {
      containerView = (<TouchableOpacity
        style={s.favoritesButton}
        onPress={this.addToFavorites}>
        <View style={s.favoritesButtonImageText}>
          <Image
            style={s.favoritesButtonIcon}
            source={require('../../../assets/images/icon-addfavorites.png')}
          />
          <Text style={s.favoritesButtonText}>Add to Favorites</Text>
        </View>
      </TouchableOpacity>)
    }

    return (
      <View>
        {containerView}
      </View>
    )
  }
}
