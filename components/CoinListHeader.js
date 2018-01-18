//@flow

import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import propTypes from 'prop-types';
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
          onPress={this.props.sortByMarketCap}
        >
          <View style={coinListHeaderStyles.textContainer}>
            <Text>M. CAP</Text>
            <View style={coinListHeaderStyles.icon}>
              <Image source={require('../images/icon-up-sort.png')} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={coinListHeaderStyles.button}
          onPress={this.props.sortByChange}
        >
          <View style={coinListHeaderStyles.textContainer}>
            <Text>CHANGE</Text>
            <View style={coinListHeaderStyles.icon}>
              <Image source={require('../images/icon-up-sort.png')} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={coinListHeaderStyles.button}
          onPress={this.props.sortByVolume}
        >
          <View style={coinListHeaderStyles.textContainer}>
            <Text>VOLUME</Text>
            <View style={coinListHeaderStyles.icon}>
              <Image source={require('../images/icon-up-sort.png')} />
            </View>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

CoinListHeader.propTypes = {
  sortByMarketCap: propTypes.arrayOf(propTypes.any).isRequired,
  sortByChange: propTypes.arrayOf(propTypes.any).isRequired,
  sortByVolume: propTypes.arrayOf(propTypes.any).isRequired
};
