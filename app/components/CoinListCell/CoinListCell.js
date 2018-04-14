import React, { Component } from 'react'
import { View, Text, Image, LayoutAnimation, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import coinListCellStyles from './CoinListCellStyles'
import CoinListCellRangeView from './CoinListCellRangeView'
import CoinListCellFavoritesButton from './CoinListCellFavoritesButton'
import CoinListCellDeltaButton from './CoinListCellDeltaButton'
import CoinListCellStatsView from './CoinListCellStatsView'
import CoinListCellDeltaView from './CoinListCellDeltaView'
import formulaHelper from '../../shared/utils/formulaHelper'


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
        percent_change_24h: percentChange24h,
        name,
        symbol,
        price_usd: priceUSD,
      },
    } = this.props

    const isNegative = percentChange24h < 0
    const priceChange = formulaHelper.getChangeAmount(priceUSD, percentChange24h)

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
                      ${formulaHelper.getFormatedPrice(priceUSD)}
                    </Text>
                    <CoinListCellDeltaButton
                      isNegative={isNegative}
                      percentChange={percentChange24h}
                      priceChange={priceChange}
                    />
                  </View> :
                  <CoinListCellFavoritesButton
                    id={this.props.item.id}
                    symbol={this.props.item.symbol}
                    onFavorite={this.handleCellPress.bind(this)}
                   />
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
              <CoinListCellDeltaView item={this.props.item} />
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
