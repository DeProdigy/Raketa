import React, { Component } from 'react'
import { View, Text } from 'react-native'
import favoritesScreenStyles from './FavoritesScreenStyles'
import top100ScreenStyles from '../Top100Screen/Top100ScreenStyles'
import CoinList from '../../components/CoinList/CoinList'
import favoritesCoinMarketcapDataFetcher from '../../networkers/favoritesCoinMarketcapDataFetcher'
import realm from '../../db/realm'

export default class FavoritesScreen extends Component {
  state = {
    coinMarketcapDataFetched: false,
    coinMarketcapData: [],
  }

  componentDidMount() {
    this.updateUI()
    realm.objects('Favorites').addListener(this.updateUI.bind(this))
  }

  componentWIllUnmount() {
    realm.objects('Favorites').removeAllListeners();
  }

  updateUI() {
    this.setState({coinMarketcapDataFetched: false})
    favoritesCoinMarketcapDataFetcher(this, realm.objects('Favorites'))
  }

  render() {
    let containerView

    if (this.state.coinMarketcapDataFetched) {
      containerView = (
        <CoinList
          coinMarketcapData={this.state.coinMarketcapData}
        />)
    } else {
      containerView = (
        <View>
          <Text>Loading...</Text>
        </View>)
    }

    return (
      <View style={top100ScreenStyles.container}>
        {containerView}
      </View>
    )
  }
}
