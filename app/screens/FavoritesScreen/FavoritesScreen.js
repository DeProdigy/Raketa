import React, { Component } from 'react'
import { View, Text } from 'react-native'
import favoritesScreenStyles from './FavoritesScreenStyles'
import top100ScreenStyles from '../Top100Screen/Top100ScreenStyles'
import CoinList from '../../components/CoinList/CoinList'
import favoritesCoinMarketcapDataFetcher from '../../networkers/favoritesCoinMarketcapDataFetcher'
import realm from '../../db/realm'

export default class FavoritesScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      coinMarketcapData: [],
    }

    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  _onNavigatorEvent(event) {
    if (event.id == 'bottomTabReselected') {
      this.coinList.scrollToTop()
    }
  }

  componentDidMount() {
    this.updateUI()
    realm.objects('Favorites').addListener(this.updateUI.bind(this))
  }

  componentWIllUnmount() {
    realm.objects('Favorites').removeAllListeners();
  }

  updateUI() {
    favoritesCoinMarketcapDataFetcher(this, realm.objects('Favorites'))
  }

  render() {
    let containerView

    if (this.state.coinMarketcapData.length == 0) {
      containerView = (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    } else {
      containerView = (
        <CoinList
          ref={(instance) => { this.coinList = instance } }
          coinMarketcapData={this.state.coinMarketcapData}
        />
      )
    }

    return (
      <View style={top100ScreenStyles.container}>
        {containerView}
      </View>
    )
  }
}
