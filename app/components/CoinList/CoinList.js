import React, { Component } from 'react'
import { View } from 'react-native'
import propTypes from 'prop-types'
import coinListStyles from './CoinListStyles'
import PTRFlatList from './PTRFlatList'

export default class CoinList extends Component {
  state = {
    coinMarketcapData: this.props.coinMarketcapData,
    sortByMarketCapAscending: true,
    sortByChangeAscending: false,
    sortByVolumeAscending: false,
    isRefreshing: false,
  }

  onRefresh() {
    this.setState({ isRefreshing: true })
    // Simulate fetching data from the server
    setTimeout(() => {
      this.setState({ isRefreshing: false })
    }, 5000)
  }

  sortByMarketCap() {
    let sortedList

    if (this.state.sortByMarketCapAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a.market_cap_usd) - parseFloat(b.market_cap_usd))
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b.market_cap_usd) - parseFloat(a.market_cap_usd))
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByMarketCapAscending: !this.state.sortByMarketCapAscending,
    })
  }

  sortByChange() {
    let sortedList

    if (this.state.sortByChangeAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a.percent_change_24h) - parseFloat(b.percent_change_24h))
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h))
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByChangeAscending: !this.state.sortByChangeAscending,
    })
  }

  sortByVolume() {
    let sortedList

    if (this.state.sortByVolumeAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a['24h_volume_usd']) - parseFloat(b['24h_volume_usd']))
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b['24h_volume_usd']) - parseFloat(a['24h_volume_usd']))
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByVolumeAscending: !this.state.sortByVolumeAscending,
    })
  }

  buttons() {
    return [
      {
        title: 'M.CAP',
        sortFunction: this.sortByMarketCap.bind(this),
        isAscending: this.state.sortByMarketCapAscending,
      },
      {
        title: 'CHANGE',
        sortFunction: this.sortByChange.bind(this),
        isAscending: this.state.sortByChangeAscending,
      },
      {
        title: 'VOLUME',
        sortFunction: this.sortByVolume.bind(this),
        isAscending: this.state.sortByVolumeAscending,
      },
    ]
  }

  render() {
    return (
      <View>
        <PTRFlatList
          data={this.state.coinMarketcapData}
          isRefreshing={this.state.isRefreshing}
          onRefresh={this.onRefresh.bind(this)}
        />
      </View>
    )
  }
}

CoinList.propTypes = {
  coinMarketcapData: propTypes.arrayOf(propTypes.any).isRequired,
}
