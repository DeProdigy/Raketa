import React, { Component } from 'react'
import { View } from 'react-native'
import coinListHeaderStyles from './CoinListHeaderStyles'
import CoinListHeaderButton from './CoinListHeaderButton/CoinListHeaderButton'

export default class CoinListHeader extends Component {
  state = {
    selectedButton: { index: 0 },
  }

  handleHeaderButtonPress = (index) => {
    this.setState({ selectedButton: { index } })
  }

  render() {
    const selectedIndex = this.state.selectedButton.index

    return (
      <View style={coinListHeaderStyles.container}>
        {this.props.buttons.map((button, index) =>
          (<CoinListHeaderButton
            index={index}
            onPress={this.handleHeaderButtonPress}
            sortCallback={button.sortFunction}
            title={button.title}
            isSelected={selectedIndex === index}
            isAscending={button.isAscending}
            key={button.title}
          />))}
      </View>
    )
  }
}
