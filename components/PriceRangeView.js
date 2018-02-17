// @flow
import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Colors from '../styles/Colors';
import Svg,{
    Circle,
    G,
    Rect,
    LinearGradient,
    Stop,
    Defs,
    ClipPath,
    Polygon
} from 'react-native-svg';
import priceRangeViewStyles from '../styles/PriceRangeViewStyles';

export default class PriceRangeView extends Component {

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

    const marketCap = this.props.item.market_cap_usd;
    const circulatingSupply = this.props.item.available_supply;
    const volume = this.props.item['24h_volume_usd'];
    const totalSupply = this.props.item.max_supply;

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
          <View style={priceRangeViewStyles.priceRangeView}>
            <Svg
              style={priceRangeViewStyles.priceRangeSVGContainer}
            >
              <Defs>
                <LinearGradient id="grad" x1="0%" y1="0" x2="100%" y2="0">
                  <Stop offset="0" stopColor={Colors.rkRed} stopOpacity="1" />
                  <Stop offset="1" stopColor={Colors.rkGreen} stopOpacity="1" />
                </LinearGradient>
                <ClipPath id="clip">
                  <G >
                    <Rect
                      y="40%"
                      x="2%"
                      width="96%"
                      height="4"
                    />
                    <Circle
                      cx="2%"
                      cy="50%"
                      r="5"
                    />
                    <Circle
                      cx="98%"
                      cy="50%"
                      r="5"
                    />
                    <Polygon
                      x="100"
                      y="11"
                      rotation="180"
                      points="0,2 20,2 10,10"
                      fill="lime"
                      stroke="purple"
                      strokeWidth="1"
                    />
                  </G>
                </ClipPath>
              </Defs>
              <Rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#grad)"
                clipPath="url(#clip)"
              />
            </Svg>
          </View>


          <View style={priceRangeViewStyles.dividerLine} />


          <View style={priceRangeViewStyles.mainStatContainer}>

            <View style={priceRangeViewStyles.leftAlignedStatContainer}>
              <Text style={priceRangeViewStyles.headerText}>MARKET CAP</Text>
              <Text style={priceRangeViewStyles.statText}>${marketCap}</Text>
            </View>
            <View style={priceRangeViewStyles.rightAlignedStatContainer}>
              <Text style={priceRangeViewStyles.headerText}>VOLUME(24H)</Text>
              <Text style={[priceRangeViewStyles.statText, priceRangeViewStyles.statTextRight]}>${volume}</Text>
            </View>

          </View>

          <View style={priceRangeViewStyles.mainStatContainer}>

            <View style={priceRangeViewStyles.leftAlignedStatContainer}>
              <Text style={priceRangeViewStyles.headerText}>CIRCULATING SUPPLY</Text>
              <Text style={priceRangeViewStyles.statText}>{circulatingSupply}</Text>
            </View>
            <View style={priceRangeViewStyles.rightAlignedStatContainer}>
              <Text style={priceRangeViewStyles.headerText}>MAX SUPPLY</Text>
              <Text style={[priceRangeViewStyles.statText, priceRangeViewStyles.statTextRight]}>{totalSupply}</Text>
            </View>

          </View>
        </View>
      </View>

    );
  }
}
