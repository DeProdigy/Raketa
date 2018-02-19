//@flow

import React, { Component } from 'react';
import { View } from 'react-native';
import coinListHeaderStyles from '../styles/CoinListHeaderStyles';
import CoinListHeaderButton from './CoinListHeaderButton';

export default class CoinListHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedButton: {index: 0}
    }
    this.handleHeaderButtonPress = this.handleHeaderButtonPress.bind(this);
  }

  handleHeaderButtonPress(index) {
    this.setState({
      selectedButton: {index}
    });

    if (index === 0) {
      this.props.sortByMarketCap();
    } else if (index === 1) {
      this.props.sortByChange();
    } else if (index === 2) {
      this.props.sortByVolume();
    }
  }

  isAscending(index) {
    if (index === 0) {
      return this.props.sortByMarketCapAscending;
    } else if (index === 1) {
      return this.props.sortByChangeAscending;
    } else if (index === 2) {
      return this.props.sortByVolumeAscending;
    }
  }

  render() {
    const selectedIndex = this.state.selectedButton.index;

    return(
      <View style={coinListHeaderStyles.container}>
        {this.props.buttons.map((button, index) =>
          (<CoinListHeaderButton
            index={index}
            onPress={this.handleHeaderButtonPress}
            title={button.title}
            isSelected={selectedIndex === index}
            isAscending={this.isAscending(index)}
            key={button.title}
          />)
        )}
      </View>
    );
  }
}
