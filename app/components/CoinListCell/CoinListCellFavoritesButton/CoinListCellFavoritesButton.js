import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import coinListCellFavoritesButtonStyles from './CoinListCellFavoritesButtonStyles'

const Realm = require('realm')

export default class CoinListCellFavoritesButton extends Component {
  constructor(props) {
    super(props);
    this.state = { alreadyInFavorites: false }
  }

  componentDidMount() {
    Realm.open({}).then(realm => {
      if (realm.objects('Favorite').filtered('id = ' + this.props.id).length > 0) {
        this.setState({
          alreadyInFavorites: true,
        })
      }
    })
  }

  addToFavorites = () => {
    Realm.open({}).then(realm => {
      realm.write(() => {
        realm.create('Favorite', {id: this.props.id, symbol: this.props.symbol})
      })
    })
  }

  removeFromFavorites = () => {
    Realm.open({}).then(realm => {
      let favorite = realm.objects('Favorite').filtered('id = ' + this.props.id)

      realm.write(() => {
        realm.delete(favorite)
      })
    })
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
