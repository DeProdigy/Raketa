import React, { Component } from 'react';
import {View, Text} from 'react-native';
import top100ScreenStyles from '../styles/Top100ScreenStyles';
import coinListStyles from '../styles/CoinListStyles';
import CoinList from '../components/CoinList';

export default class Top100Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptoCompareDataFetched: false,
      coinMarketcapDataFetched: false,
      cryptoCompareData: {},
      coinMarketcapData: [],
    }
  }

  componentDidMount() {
    this.fetchCryptoCompareData();
    this.fetchCoinMarketData();
  }

  fetchCryptoCompareData() {
    return fetch('https://www.cryptocompare.com/api/data/coinlist/')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ cryptoCompareData: responseJson, cryptoCompareDataFetched: true });
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchCoinMarketData() {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ coinMarketcapData: responseJson, coinMarketcapDataFetched: true });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    let containerView;
    const isDataFetched = this.state.cryptoCompareDataFetched && this.state.coinMarketcapDataFetched;

    if (isDataFetched) {
      containerView = (
        <CoinList
          style={coinListStyles.container}
          cryptoCompareData={this.state.cryptoCompareData}
          coinMarketcapData={this.state.coinMarketcapData}
        /> );
    } else {
      containerView = (
        <View>
          <Text>Loading...</Text>
        </View> );
    }
    return (
      <View style={top100ScreenStyles.container}>
        {containerView}
      </View>
    );
  }
}
