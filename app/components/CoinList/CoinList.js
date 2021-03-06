// @flow
import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import propTypes from 'prop-types'
import CoinListCell from '../CoinListCell/CoinListCell'
import CoinListHeader from '../CoinListHeader/CoinListHeader'
import coinListStyles from './CoinListStyles'

export default class CoinList extends Component {
  state = {
    coinMarketcapData: this.props.coinMarketcapData,
    sortByMarketCapAscending: true,
    sortByChangeAscending: false,
    sortByVolumeAscending: false,
  }

  sortByMarketCap() {
    let sortedList

    if (this.state.sortByMarketCapAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a.market_cap_usd) -
      parseFloat(b.market_cap_usd))
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b.market_cap_usd) -
      parseFloat(a.market_cap_usd))
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByMarketCapAscending: !this.state.sortByMarketCapAscending,
    })
  }

  sortByChange() {
    let sortedList

    if (this.state.sortByChangeAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a.percent_change_24h) -
      parseFloat(b.percent_change_24h))
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b.percent_change_24h) -
      parseFloat(a.percent_change_24h))
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByChangeAscending: !this.state.sortByChangeAscending,
    })
  }

  sortByVolume() {
    let sortedList

    if (this.state.sortByVolumeAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a['24h_volume_usd']) -
      parseFloat(b['24h_volume_usd']))
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b['24h_volume_usd']) -
      parseFloat(a['24h_volume_usd']))
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
        title: "VOLUME",
        sortFunction: this.sortByVolume.bind(this),
        isAscending: this.state.sortByVolumeAscending,
      },
    ]
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coinMarketcapData !== this.state.coinMarketcapData) {
      this.setState({ coinMarketcapData: nextProps.coinMarketcapData });
    }
  }

  scrollToTop() {
    this.flatListRef.scrollToIndex({animated: true, index: 0});
  }

  render() {
    return (
      <View>
        <CoinListHeader
          buttons={this.buttons()}
        />
        <FlatList
          ref={(instance) => { this.flatListRef = instance }}
          contentContainerStyle={coinListStyles.container}
          data={this.state.coinMarketcapData}
          extraData={this.state}
          renderItem={({ item, index }) =>
            (<CoinListCell
              item={item}
              coinMarketcapData={this.state.coinMarketcapData}
            />)}
          keyExtractor={(item, index) => item.id}
          onEndReachedThreshold={0.6}
          onEndReached={this.props.handleInfiniteScroll}
        />
      </View>
    )
  }
}

CoinList.propTypes = {
  coinMarketcapData: propTypes.arrayOf(propTypes.any).isRequired
}
