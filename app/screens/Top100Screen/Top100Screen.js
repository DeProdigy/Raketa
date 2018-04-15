import React, { Component } from 'react'
import { View, Text } from 'react-native'
import top100ScreenStyles from './Top100ScreenStyles'
import CoinList from '../../components/CoinList/CoinList'
import coinMarketcapDataFetcher from '../../networkers/coinMarketcapDataFetcher'

export default class Top100Screen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      coinMarketcapData: [],
      coinMarketcapDataSubset: 0,
    }

    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  _onNavigatorEvent(event) {
    if (event.id == 'bottomTabReselected') {
      this.coinList.scrollToTop()
    }
  }

  componentWillMount() {
    coinMarketcapDataFetcher(this)
  }

  handleInfiniteScroll() {
    coinMarketcapDataFetcher(this)
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
          handleInfiniteScroll={this.handleInfiniteScroll.bind(this)}
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
