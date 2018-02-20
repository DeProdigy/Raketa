// @flow
import React, { Component } from 'react';
import { View, Text, Image, LayoutAnimation, TouchableOpacity } from 'react-native';
import coinListCellStyles from '../styles/CoinListCellStyles';
import PriceRangeView from './PriceRangeView'
import CoinListCellHeader from './CoinListCellHeader';


export default class CoinListCell extends Component {
  constructor(props) {
    super(props);
    this.handleCellPress = this.handleCellPress.bind(this);
  }

  state = {
    isExpanded: false
  };

  coinImage(coin) {
    if (coin.symbol === 'MIOTA') {
      return 'https://www.cryptocompare.com/media/1383540/iota_logo.png';
    } else if (coin.symbol === 'BCC') {
      return 'https://www.cryptocompare.com/media/9350709/bccoin1.png';
    } else if (this.props.cryptoCompareData.Data[coin.symbol]) {

      console.log('https://www.cryptocompare.com' + this.props.cryptoCompareData.Data[coin.symbol].ImageUrl);
      return 'http://www.cryptocompare.com' + this.props.cryptoCompareData.Data[coin.symbol].ImageUrl;

    }
      return 'https://www.moneymetals.com/images/products/10-dollar-liberty-gold-coin-20140321124620.jpg';

  }

  handleCellPress() {
    LayoutAnimation.easeInEaseOut();
    this.setState(
      {
        isExpanded: !this.state.isExpanded
      }
    )
  }

  render() {

  const isPercentChangeNegative = this.props.item.percent_change_24h < 0;

  let expandedView = <View />;
  let cellHeader = <View />;

  if (this.state.isExpanded) {
    cellHeader = <CoinListCellHeader />;
    expandedView =  <PriceRangeView item={this.props.item} />;
  }

  return (
    <View style={coinListCellStyles.mainContainer}>
      <TouchableOpacity
        style={coinListCellStyles.highlightContainer}
        onPress={this.handleCellPress}
      >
        <View style={coinListCellStyles.contentContainer}>
          {cellHeader}
          <View style={coinListCellStyles.collapsedContainer}>
            <View style={coinListCellStyles.nameSymbolContainer}>
              <Image
                style={coinListCellStyles.symbolImage}
                source={{uri: this.coinImage(this.props.item)}}
              />

              <View style={coinListCellStyles.nameContainer}>
                <Text style={coinListCellStyles.nameText}>
                  {this.props.item.name}
                </Text>
                <Text style={coinListCellStyles.symbolText}>
                  {this.props.item.symbol}
                </Text>
              </View>
            </View>

            <View style={coinListCellStyles.priceContainer}>
              <Text style={coinListCellStyles.priceText}>
                    ${this.props.item.price_usd}
              </Text>
              <View style={isPercentChangeNegative ? [coinListCellStyles.changeContainer,coinListCellStyles.changeContainerNegative]:
                coinListCellStyles.changeContainer
                }
              >
                <Text style={
                    isPercentChangeNegative ?
                    [coinListCellStyles.changeText, coinListCellStyles.changeTextNegative]:
                    coinListCellStyles.changeText}
                >
                  {this.props.item.percent_change_24h}%
                </Text>
              </View>
            </View>
          </View>
          {expandedView}
        </View>
      </TouchableOpacity>
    </View>
    );
  }
}
