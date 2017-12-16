import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

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

  coinImage(coin) {
    if (coin.symbol == 'MIOTA') {
      return 'https://www.cryptocompare.com/media/1383540/iota_logo.png';
    } else if (coin.symbol == 'BCC') {
      return 'https://www.cryptocompare.com/media/9350709/bccoin1.png';
    } else if (this.state.cryptoCompareData['Data'][coin.symbol]) {
      return 'https://www.cryptocompare.com' + this.state.cryptoCompareData['Data'][coin.symbol]['ImageUrl'];
    } else {
      return 'https://www.moneymetals.com/images/products/10-dollar-liberty-gold-coin-20140321124620.jpg';
    }
  }

  render() {
    if (this.state.cryptoCompareDataFetched && this.state.coinMarketcapDataFetched) {
      return (
          <View style={styles.container}>
              <FlatList
                  data={this.state.coinMarketcapData}
                  renderItem={({item}) =>
                      <View style={styles.listCell}>
                          <Image
                              style={{width: 10, height: 10}}
                              source={{uri: this.coinImage(item)}}
                          />
                          <Text>
                              {item.symbol} ${item.price_usd}
                          </Text>
                      </View>
                  }
                  keyExtractor={(item, index) => index}
              />
          </View>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 50,
  },
  listCell: {
    width: '100%',
    height: 30,
  }
});
