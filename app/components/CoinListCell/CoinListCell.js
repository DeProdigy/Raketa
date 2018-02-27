import React, { Component } from 'react'
import { View, Text, Image, LayoutAnimation, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import coinListCellStyles from './CoinListCellStyles'
import CoinListCellRangeView from './CoinListCellRangeView/CoinListCellRangeView'
import CoinListCellFavoritesButton from './CoinListCellFavoritesButton/CoinListCellFavoritesButton'
import CoinListCellChangeButton from './CoinListCellChangeButton/CoinListCellChangeButton'
import CoinListCellStatsView from './CoinListCellStatsView/CoinListCellStatsView'
import CoinListCellChangeView from './CoinListCellChangeView/CoinListCellChangeView'


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
        percent_change_24h: percentChange24,
        name,
        symbol,
        price_usd: price,
      },
    } = this.props

    const isNegative = percentChange24 < 0

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
                      ${price}
                    </Text>
                    <CoinListCellChangeButton
                      isNegative={isNegative}
                      percentChange={percentChange24}
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
            {
              this.state.isExpanded &&
              <CoinListCellChangeView />
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


CoinListCell.defaultProps = {
  item: {
    percent_change_24h: '-',
    name: '-',
    symbol: '-',
    price_usd: '-',
  },
}

CoinListCell.propTypes = {
  item: PropTypes.shape({
    percent_change_24h: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    price_usd: PropTypes.string,
  }),
}
