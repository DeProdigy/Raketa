import React, { Component } from 'react'
import { View, Text, Image, LayoutAnimation, TouchableOpacity } from 'react-native'
import coinListCellStyles from './CoinListCellStyles'
import CoinListCellRangeView from './CoinListCellRangeView/CoinListCellRangeView'
import CoinListCellFavoritesButton from './CoinListCellFavoritesButton/CoinListCellFavoritesButton'
import CoinListCellChangeButton from './CoinListCellChangeButton/CoinListCellChangeButton'


export default class CoinListCell extends Component {
  state = {
    isExpanded: false,
  }

  handleCellPress = () => {
    LayoutAnimation.easeInEaseOut()
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  render() {
    const {
      item: {
        percent_change_24h,
        name,
        symbol,
        price_usd,
      },
    } = this.props

    const isNegative = percent_change_24h < 0

    return (
      <View style={coinListCellStyles.mainContainer}>
        <TouchableOpacity onPress={this.handleCellPress}>
          <View style={coinListCellStyles.contentContainer}>
            <View style={coinListCellStyles.collapsedContainer}>
              <View style={coinListCellStyles.nameSymbolContainer}>
                <Image
                  style={coinListCellStyles.symbolImage}
                  source={{ uri: `https://chasing-coins.com/api/v1/std/logo/${symbol}` }}
                />

                <View style={coinListCellStyles.nameContainer}>
                  <Text style={coinListCellStyles.nameText}>
                    {name}
                  </Text>
                  <Text style={coinListCellStyles.symbolText}>
                    {symbol}
                  </Text>
                </View>
              </View>
              {
                this.state.isExpanded === false ?
                  <View style={coinListCellStyles.priceContainer}>
                    <Text style={isNegative ?
                    [coinListCellStyles.priceText,
                    coinListCellStyles.priceTextNegative] :
                    coinListCellStyles.priceText}
                    >
                      ${price_usd}
                    </Text>
                    <CoinListCellChangeButton
                      isNegative={isNegative}
                      percentChange={percent_change_24h}
                    />
                  </View> :
                  <CoinListCellFavoritesButton />
              }
            </View>
            { this.state.isExpanded &&
              <CoinListCellRangeView item={this.props.item} />
            }
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
