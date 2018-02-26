import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import coinListCellChangeButtonStyles from './CoinListCellChangeButtonStyles'

export default class CoinListCellChangeButton extends Component {
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
    } = this.props

    const s = coinListCellChangeButtonStyles

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
            {this.state.isShowingPercentage ? (isNegative === false ? '+' : '') + percentChange + '%' : '$850.55' }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
