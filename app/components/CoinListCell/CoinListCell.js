// @flow
import React, { Component } from 'react'
import { View, Text, Image, LayoutAnimation, TouchableOpacity } from 'react-native'
import coinListCellStyles from './CoinListCellStyles'
import CoinListCellRangeView from './CoinListCellRangeView/CoinListCellRangeView'
import CoinListCellHeader from './CoinListCellHeader/CoinListCellHeader'


export default class CoinListCell extends Component {
  state = {
    isExpanded: false,
  }

  handleCellPress = () => {
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
    expandedView =  <CoinListCellRangeView item={this.props.item} />;
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
                source={{uri: "https://chasing-coins.com/api/v1/std/logo/" + this.props.item.symbol}}
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
