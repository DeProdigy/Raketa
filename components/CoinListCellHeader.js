// @flow
import React, { Component } from 'react'
import { View } from 'react-native'
import CoinListCellHeaderButton from './CoinListCellHeaderButton'
import coinListCellHeaderStyles from '../styles/CoinListCellHeaderStyles'

class CoinListCellHeader extends Component {
  state = {
    selectedButtonIndex: 1,
  }

  handleHeaderButtonPress = (index) => {
    this.setState({
      selectedButtonIndex: index,
    })
  }

  render() {
    const s = coinListCellHeaderStyles
    const selectedIndex = this.state.selectedButtonIndex

    return (
      <View style={s.mainContainer}>
        {['1H', '24H', '1W', '1M'].map((text, index) =>
          (<CoinListCellHeaderButton
            key={text}
            isSelected={selectedIndex === index}
            text={text}
            onPress={this.handleHeaderButtonPress}
            index={index}
          />
          ))}
      </View>
    )
  }
}

export default CoinListCellHeader
