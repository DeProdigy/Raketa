// @flow
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import coinListCellStyles from '../styles/CoinListCellStyles';


export default class CoinListCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.item,
      coinMarketcapData: this.props.coinMarketcapData,
      cryptoCompareData: this.props.cryptoCompareData,
    }
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

    const isPercentChangePositive = this.state.item.percent_change_24h > 0;
    return (
      <View style={coinListCellStyles.listCell}>
        <Image
          source={isPercentChangePositive ?
            require('../images/icon-up-change.png') :
            require('../images/icon-down-change.png')
        }
        />
        <Image
          style={coinListCellStyles.listCellImage}
          source={{uri: this.coinImage(this.state.item)}}
        />
        <Text style={coinListCellStyles.listCellInfo}>
          {this.state.item.symbol}
        </Text>
        <Text style={coinListCellStyles.listCellInfo}>
          {this.state.item.name}
        </Text>
        <Text style={coinListCellStyles.listCellInfo}>
          ${this.state.item.price_usd}
        </Text>
        <Text style={coinListCellStyles.listCellInfo}>
          {this.state.item.percent_change_24h}%
        </Text>
      </View>
    );
  }
}
