import React, { Component } from 'react'
import { View, Text } from 'react-native'
import top100ScreenStyles from './Top100ScreenStyles'
import CoinList from '../../components/CoinList/CoinList'
import coinMarketcapDataFetcher from '../../networkers/coinMarketcapDataFetcher'

export default class Top100Screen extends Component {
  state = {
    coinMarketcapDataFetched: false,
    coinMarketcapData: [],
  }

  componentDidMount() {
    coinMarketcapDataFetcher(this)
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
