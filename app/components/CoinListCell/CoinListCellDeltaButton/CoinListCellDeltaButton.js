import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import CoinListCellDeltaButtonStyles from './CoinListCellDeltaButtonStyles'
import formulaHelper from '../../../shared/utils/formulaHelper'

export default class CoinListCellDeltaButton extends Component {
  state = {
    isShowingPercentage: true,
  }

  handlePress = () => {
    this.setState({
      isShowingPercentage: !this.state.isShowingPercentage,
    })
  }

  render() {
    const {
      isNegative,
      percentChange,
      priceChange,
    } = this.props

    const s = CoinListCellDeltaButtonStyles

    return (
      <TouchableOpacity
        style={isNegative ?
        [s.container, s.containerNegative] : s.container
      }
        onPress={this.handlePress}
      >
        <View>
          <Text style={
            isNegative ?
            [s.changeText, s.changeTextNegative] : s.changeText}
          >
            {this.state.isShowingPercentage ?
              `${(isNegative === false ? '+' : '') + percentChange}%` :
              `$ ${isNegative === false ? '+' : ''}${formulaHelper.getFormatedPrice(priceChange)}` }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

CoinListCellDeltaButton.defaultProps = {
  isNegative: false,
  percentChange: '0.00%',
  priceChange: 0,
}

CoinListCellDeltaButton.propTypes = {
  isNegative: PropTypes.bool,
  percentChange: PropTypes.string,
  priceChange: PropTypes.number,
}
