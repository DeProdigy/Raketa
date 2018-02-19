// @flow

import React, { Component } from 'react';
import {View, FlatList} from 'react-native';
import propTypes from 'prop-types';
import CoinListCell from './CoinListCell';
import CoinListHeader from './CoinListHeader';
import coinListStyles from '../styles/CoinListStyles';

export default class CoinList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptoCompareData: this.props.cryptoCompareData,
      coinMarketcapData: this.props.coinMarketcapData,
      sortByMarketCapAscending: true,
      sortByChangeAscending: false,
      sortByVolumeAscending: false,
      buttons: [
        { title: "M.CAP" },
        { title: "CHANGE" },
        { title: "VOLUME" },
      ],
    };

    this.sortByChange = this.sortByChange.bind(this);
    this.sortByMarketCap = this.sortByMarketCap.bind(this);
    this.sortByVolume = this.sortByVolume.bind(this);
  }

  sortByMarketCap() {
    let sortedList;

    if (this.state.sortByMarketCapAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a.market_cap_usd) -
      parseFloat(b.market_cap_usd));
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b.market_cap_usd) -
      parseFloat(a.market_cap_usd));
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByMarketCapAscending: !this.state.sortByMarketCapAscending,
    });
  }

  sortByChange() {
    let sortedList;

    if (this.state.sortByChangeAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a.percent_change_24h) -
      parseFloat(b.percent_change_24h));
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b.percent_change_24h) -
      parseFloat(a.percent_change_24h));
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByChangeAscending: !this.state.sortByChangeAscending,
    });
  }

  sortByVolume() {
    let sortedList;

    if (this.state.sortByVolumeAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a['24h_volume_usd']) -
      parseFloat(b['24h_volume_usd']));
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b['24h_volume_usd']) -
      parseFloat(a['24h_volume_usd']));
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByVolumeAscending: !this.state.sortByVolumeAscending,
    });
  }

  render() {
    return (
      <View>
        <FlatList
          contentContainerStyle={coinListStyles.container}
          data={this.state.coinMarketcapData}
          extraData={this.state}
          ListHeaderComponent={(
            <CoinListHeader
              sortByMarketCap={this.sortByMarketCap}
              sortByChange={this.sortByChange}
              sortByVolume={this.sortByVolume}
              sortByMarketCapAscending={this.state.sortByMarketCapAscending}
              sortByChangeAscending={this.state.sortByChangeAscending}
              sortByVolumeAscending={this.state.sortByVolumeAscending}
              buttons={this.state.buttons}
            />
        )}
          renderItem={({ item, index }) =>
            (<CoinListCell
              item={item}
              coinMarketcapData={this.state.coinMarketcapData}
              cryptoCompareData={this.state.cryptoCompareData}
            />)
                }
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

CoinList.propTypes = {
  cryptoCompareData: propTypes.objectOf(propTypes.any).isRequired,
  coinMarketcapData: propTypes.arrayOf(propTypes.any).isRequired
};
