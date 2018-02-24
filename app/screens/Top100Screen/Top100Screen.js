import React, { Component } from 'react'
import { View, Text } from 'react-native'
import top100ScreenStyles from './Top100ScreenStyles'
import CoinList from '../../components/CoinList/CoinList'

export default class Top100Screen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coinMarketcapDataFetched: false,
      coinMarketcapData: [],
    }
  }

  componentDidMount() {
    this.fetchCoinMarketData()
  }

  fetchCoinMarketData() {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({ coinMarketcapData: responseJson, coinMarketcapDataFetched: true })
      })
      .catch((error) => {
        console.error(error)
      })
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
