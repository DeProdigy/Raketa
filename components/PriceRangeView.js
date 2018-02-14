// @flow
import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import priceRangeViewStyles from '../styles/PriceRangeViewStyles';

export default class CoinListHeaderButton extends Component {

  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   h: 80
  //   //   // item: this.props.item,
  //   //   // coinMarketcapData: this.props.coinMarketcapData,
  //   //   // cryptoCompareData: this.props.cryptoCompareData,
  //   // };
  //
  //   this.handleCellPress = this.handleCellPress.bind(this);
  // }

  state = {

  }

  render() {
    return(
      <View style={priceRangeViewStyles.mainContainer}>
        <View style={priceRangeViewStyles.headerContainer}>
          <Text style={priceRangeViewStyles.headerText}>
            {'PRICE RANGE'}
          </Text>
          <View style={priceRangeViewStyles.headerButtonsContainer}>

            {['1h','3h','6h', '12h','24h','1y','YTD'].map( text =>
              (
                <TouchableOpacity key={text}>
                  <Text style={priceRangeViewStyles.headerButtonText}>{text}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
          <View style={priceRangeViewStyles.dividerLine} />
          {/* <View style={priceRangeViewStyles.}> */}
        </View>
      </View>

    );
  }
}
