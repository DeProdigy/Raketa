import React, { Component } from 'react';
import {View, Button, FlatList} from 'react-native';
import coinListStyles from '../styles/CoinListStyles';
import CoinListCell from './CoinListCell';


export default class CoinList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoCompareData: this.props.cryptoCompareData,
      coinMarketcapData: this.props.coinMarketcapData,
      sortByNameAscending: true,
      sortByPriceAscending: true,
      sortByChangeAscending: true,
      sortByVolumeAscending: true,
    };
  }

  sortByMarketCap() {
    let sortedList;

    if (this.state.sortByMarketCap) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a.market_cap_usd) -
      parseFloat(b.market_cap_usd));
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b.market_cap_usd) -
      parseFloat(a.market_cap_usd));
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByMarketCap: !this.state.sortByMarketCap,
    });
  }

  sortByPrice() {
    let sortedList;

    if (this.state.sortByPriceAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(a.price_usd) -
      parseFloat(b.price_usd));
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => parseFloat(b.price_usd) -
      parseFloat(a.price_usd));
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByPriceAscending: !this.state.sortByPriceAscending,
    });
  }

  sortbyName() {
    let sortedList;

    if (this.state.sortByNameAscending) {
      sortedList = this.state.coinMarketcapData.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else {
      sortedList = this.state.coinMarketcapData.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameB < nameA) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByNameAscending: !this.state.sortByNameAscending,
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
      <View style={coinListStyles.container}>
        <Button
          title="Name"
          onPress={this.sortbyName.bind(this)}
        />

        <Button
          title="Market Cap"
          onPress={this.sortByMarketCap.bind(this)}
        />

        <Button
          title="Price"
          onPress={this.sortByPrice.bind(this)}
        />

        <Button
          title="Change"
          onPress={this.sortByChange.bind(this)}
        />

        <Button
          title="Volume"
          onPress={this.sortByVolume.bind(this)}
        />

        <FlatList
          data={this.state.coinMarketcapData}
          extraData={this.state}
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