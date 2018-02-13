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
    if (coin.symbol === 'MIOTA') {
      return 'https://www.cryptocompare.com/media/1383540/iota_logo.png';
    } else if (coin.symbol === 'BCC') {
      return 'https://www.cryptocompare.com/media/9350709/bccoin1.png';
    } else if (this.state.cryptoCompareData.Data[coin.symbol]) {
      return 'https://www.cryptocompare.com' + this.state.cryptoCompareData.Data[coin.symbol].ImageUrl;
    }
      return 'https://www.moneymetals.com/images/products/10-dollar-liberty-gold-coin-20140321124620.jpg';

  }

  render() {

  const isPercentChangeNegative = this.state.item.percent_change_24h < 0;

  return (
    <View style={coinListCellStyles.mainContainer}>
      <View style={coinListCellStyles.nameSymbolContainer}>
        <Image
          style={coinListCellStyles.symbolImage}
          source={{uri: this.coinImage(this.state.item)}}
        />
        <View style={coinListCellStyles.nameContainer}>
          <Text style={coinListCellStyles.nameText}>
            {this.state.item.name}
          </Text>
          <Text style={coinListCellStyles.symbolText}>
            {this.state.item.symbol}
          </Text>
        </View>
      </View>
      <View style={coinListCellStyles.priceContainer}>
        <Text style={coinListCellStyles.priceText}>
            ${this.state.item.price_usd}
        </Text>
        <View style={
          isPercentChangeNegative ?
          [coinListCellStyles.changeContainer,coinListCellStyles.changeContainerNegative]:
          coinListCellStyles.changeContainer
        }
        >
          <Text style={
            isPercentChangeNegative ?
            [coinListCellStyles.changeText, coinListCellStyles.changeTextNegative]:
            coinListCellStyles.changeText}
          >
            {this.state.item.percent_change_24h}%
          </Text>
        </View>
      </View>
    </View>
    );
  }
}
