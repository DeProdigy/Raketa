import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles/MainStyles';
import CoinList from './CoinList';


export default class App extends React.Component {
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
    if (this.state.cryptoCompareDataFetched && this.state.coinMarketcapDataFetched) {
        return (
            <CoinList
                cryptoCompareData={this.state.cryptoCompareData}
                coinMarketcapData={this.state.coinMarketcapData}
            />
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }
  }
}
