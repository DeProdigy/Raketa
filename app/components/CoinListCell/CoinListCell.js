import React, { Component } from 'react'
import { View, Text, Image, LayoutAnimation, TouchableOpacity } from 'react-native'
import coinListCellStyles from './CoinListCellStyles'
import CoinListCellRangeView from './CoinListCellRangeView/CoinListCellRangeView'
import CoinListCellFavoritesButton from './CoinListCellFavoritesButton/CoinListCellFavoritesButton'
import CoinListCellChangeButton from './CoinListCellChangeButton/CoinListCellChangeButton'
import CoinListCellStatsView from './CoinListCellStatsView/CoinListCellStatsView'


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
    const s = coinListCellStyles

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
      <View style={s.mainContainer}>
        <TouchableOpacity onPress={this.handleCellPress}>
          <View style={s.contentContainer}>
            <View style={s.collapsedContainer}>
              <View style={s.nameSymbolContainer}>
                <Image
                  style={s.symbolImage}
                  source={{ uri: `https://chasing-coins.com/api/v1/std/logo/${symbol}` }}
                />

                <View style={s.nameContainer}>
                  <Text style={s.nameText}>
                    {name}
                  </Text>
                  <Text style={s.symbolText}>
                    {symbol}
                  </Text>
                </View>
              </View>
              {
                this.state.isExpanded === false ?
                  <View style={s.priceContainer}>
                    <Text style={isNegative ?
                    [s.priceText,
                    s.priceTextNegative] :
                    s.priceText}
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
              <View style={s.dividerLine} />
            }
            { this.state.isExpanded &&
              <CoinListCellRangeView item={this.props.item} />
            }
            { this.state.isExpanded &&
              <CoinListCellStatsView item={this.props.item} />
            }
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
