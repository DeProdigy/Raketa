//@flow

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import coinListHeaderStyles from '../styles/CoinListHeaderStyles';

export default class CoinListHeader extends Component {

  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    return(
      <View style={coinListHeaderStyles.container}>
        <TouchableOpacity
          style={coinListHeaderStyles.button}
          title="Market Cap"
          onPress={this.props.sortByMarketCap}
        />
        <TouchableOpacity
          title="Change"
          onPress={this.props.sortByChange}
        />
        <TouchableOpacity
          title="Volume"
          onPress={this.props.sortByVolume}
        />
      </View>
    );
  }
}
