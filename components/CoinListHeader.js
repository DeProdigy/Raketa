//@flow

import React, { Component } from 'react';
import { View } from 'react-native';
import coinListHeaderStyles from '../styles/CoinListHeaderStyles';
import CoinListHeaderButton from './CoinListHeaderButton';

export default class CoinListHeader extends Component {

  constructor(props) {
    super(props);
    this.state ={
      selectedButton: {
        index: 0,
        isAscending: true
      }
    }
    this.handleHeaderButtonPress = this.handleHeaderButtonPress.bind(this);
  }

  handleHeaderButtonPress(index) {
    this.setState({
      selectedButton: {
        index,
        isAscending: this.state.selectedButton.index === index ? !this.state.selectedButton.isAscending : true
      }
    });

    if (index === 0) {
      this.props.sortByMarketCap();
    } else if (index === 1) {
      this.props.sortByChange();
    } else if (index === 2) {
      this.props.sortByVolume();
    }

  }

  render() {
    const selectedIndex = this.state.selectedButton.index;
    const isAscending = this.state.selectedButton.isAscending;

    return(
      <View style={coinListHeaderStyles.container}>
        {["M.CAP", "CHANGE", "VOLUME"].map((title,index) =>
          (<CoinListHeaderButton
            index={index}
            onPress={this.handleHeaderButtonPress}
            title={title}
            isSelected={selectedIndex === index}
            isAscending={isAscending}
            key={title}
          />)
        )}
      </View>
    );
  }
}
